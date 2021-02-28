import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handlePersonChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const personObject = {
      name: newName,
    };
    setPersons(persons.concat(personObject));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handlePersonChange} value={newName} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
