import React from 'react';

const ShowPerson = ({ name, number }) => {
  return (
    <p key={name}>
      {name} {number}
    </p>
  );
};

const ShowPeople = ({ persons, newSearch }) => {
  const filtered = newSearch
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(newSearch.trim().toLowerCase())
      )
    : persons;

  return (
    <div>
      {filtered.map((person) => (
        <ShowPerson name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default ShowPeople;
