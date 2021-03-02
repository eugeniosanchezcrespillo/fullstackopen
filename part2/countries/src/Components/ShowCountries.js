import React from 'react';

const ShowCountries = ({ search, countries }) => {
  const filter = search
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    : countries;

  console.log('filter country', filter);

  if (filter.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filter.length === 1) {
    return filter.map((c) => (
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
        <img src={c.flag} width="200px" />
      </div>
    ));
  } else {
    return (
      <div>
        <ul>
          {filter.map((item) => (
            <p key={item.name}>{item.name}</p>
          ))}
        </ul>
        {/* Debug: {countries.map((country) => country.name)} */}
      </div>
    );
  }
};
export default ShowCountries;
