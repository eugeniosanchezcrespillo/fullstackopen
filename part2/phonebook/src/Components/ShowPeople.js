import React from 'react';

const ShowPeople = ({ persons, handleDelete }) => {
  console.log('ShowPeople', persons);
  return (
    <div>
      {persons.map((item, i) => (
        <div key={i}>
          {item.name} {item.number}
          <button onClick={handleDelete(item.id, item.name)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ShowPeople;
