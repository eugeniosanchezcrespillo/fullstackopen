import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Components/Search';
import ShowCountries from './Components/ShowCountries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const handleShow = (event) => {
    console.log('button value', event.target.value);
    setSearch(event.target.value);
  };

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  axios
    .get(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=Madrid`
    )
    .then((response) => {
      console.log('weather', response.data);
      //setWeather(response.data);
    });

  return (
    <div>
      <Search handleSearch={handleSearch} search={search} />
      <ShowCountries
        handleShow={handleShow}
        search={search}
        countries={countries}
      />
    </div>
  );
};

export default App;
