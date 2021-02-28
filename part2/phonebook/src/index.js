import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  const handleSearch = (event) => setNewSearch(event.target.value);
  const handlePersonChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const filtered = newSearch
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(newSearch.trim().toLowerCase())
      )
    : persons;

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
      filter shown with a <input onChange={handleSearch} value={newSearch} />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handlePersonChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filtered.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
