import React, { useState, useEffect } from 'react';
import ShowPeople from './Components/ShowPeople';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Notification from './Components/Notification';
import personService from './Services/persons';

const App = () => {
  /* const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]); */

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //getAll()
  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
      console.log(response);
    });
  }, []);

  const handleSearch = (event) => setNewSearch(event.target.value);
  const handlePersonChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleDelete = (id, name) => () => {
    if (window.confirm(`Delete ${name} id: ${id}?`)) {
      personService.deletePerson(id).then((deleted) => {
        const filteredDeleted = persons.filter((person) => person.id !== id);
        console.log('filteredDeleted', filteredDeleted);
        setPersons(filteredDeleted);
        setErrorMessage(`Person deleted from the phonebook`);

        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        //window.alert(`Deleted ${name} from List`);
      });
    }
  };

  // AddPerson or Change Person
  const addPerson = (event) => {
    event.preventDefault();
    const exist = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (exist.length > 0) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. replace the old number with a new one: ${newNumber}?`
        )
      ) {
        const personToChange = persons.find(
          (p) => p.name.toLowerCase() === newName.toLowerCase()
        );
        const personChanged = { ...personToChange };
        personChanged.number = newNumber;
        console.log('person match', personChanged);

        personService
          .updatePerson(personChanged.id, personChanged)
          .then((personObject) => {
            setPersons(
              persons.map((person) =>
                person.id !== personChanged.id ? person : personChanged
              )
            );
            setErrorMessage(`${personChanged.name} changed on the phonebook`);

            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          })
          .catch((error) =>
            setErrorMessage(`Error Id: ${personChanged.id} doesn't exists.`)
          );
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(personObject).then((personObject) => {
        setPersons(persons.concat(personObject));
        setNewName('');
        setNewNumber('');

        setErrorMessage(`${personObject.name} added to the phonebook`);

        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
    }
  };

  //Filtered Search
  console.log('new Search', newSearch);
  const filtered = newSearch
    ? persons.filter((p) =>
        p.name.toLowerCase().includes(newSearch.trim().toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleSearch={handleSearch} newSearch={newSearch} />

      <h2>add a new</h2>
      <Notification message={errorMessage} />

      <PersonForm
        addPerson={addPerson}
        handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        newName={newName}
      />

      <h2>Numbers</h2>
      <ShowPeople persons={filtered} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
