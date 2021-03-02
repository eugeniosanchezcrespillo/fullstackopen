import React from 'react';

const ShowCountry = ({ country }) => {
  return country.map((c) => (
    <div key={c.name}>
      <h1>{c.name}</h1>
      <p>capital {c.capital}</p>
      <p>population {c.population}</p>
      <h2>languages</h2>
      <ul>
        {c.languages.map((item) => (
          <li key={item.iso639_1}>{item.name}</li>
        ))}
      </ul>
      <img src={c.flag} width="200px" alt={c.name} />
    </div>
  ));
};

export default ShowCountry;
