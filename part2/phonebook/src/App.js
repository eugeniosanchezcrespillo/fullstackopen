import React, { useState, useEffect } from 'react';
import ShowPeople from './Components/ShowPeople';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import axios from 'axios';

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

  const hook = () => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
      console.log(response.data);
    });
  };

  useEffect(hook, []);

  const handleSearch = (event) => setNewSearch(event.target.value);
  const handlePersonChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    //console.log('button clicked', event.target);
    const exist = persons.filter((person) => person.name === newName);

    //console.log('exist', exist);
    if (exist.length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleSearch={handleSearch} newSearch={newSearch} />

      <h2>add a new</h2>

      <PersonForm
        addPerson={addPerson}
        handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        newName={newName}
      />

      <h2>Numbers</h2>
      <ShowPeople persons={persons} newSearch={newSearch} />
    </div>
  );
};

export default App;