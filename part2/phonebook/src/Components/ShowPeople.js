import React from 'react';

const ShowPerson = ({ name, number }) => {
  return (
    <>
      {name} {number}
    </>
  );
};

const ShowPeople = ({ persons }) => {
  console.log('error persons', persons);
  return (
    <div>
      <ul>
        {persons.map((item, i) => (
          <li key={i}>
            <ShowPerson name={item.name} number={item.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowPeople;
