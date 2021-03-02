import React from 'react';
import ShowCountry from './ShowCountry';

const ShowCountries = ({ handleShow, search, countries }) => {
  const filter = search
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    : countries;

  console.log('filter country', filter);

  if (filter.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (filter.length === 1) {
    return <ShowCountry country={filter} />;
  } else {
    return (
      <div>
        <ul>
          {filter.map((item) => (
            <p key={item.name}>
              {item.name}
              <button value={item.name} onClick={handleShow}>
                show
              </button>
            </p>
          ))}
        </ul>
        {/* Debug: {countries.map((country) => country.name)} */}
      </div>
    );
  }
};

export default ShowCountries;
