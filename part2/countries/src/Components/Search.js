import React from 'react';

const Search = ({ handleSearch, search }) => {
  return (
    <div>
      find countries
      <input onChange={handleSearch} value={search} />
    </div>
  );
};

export default Search;
