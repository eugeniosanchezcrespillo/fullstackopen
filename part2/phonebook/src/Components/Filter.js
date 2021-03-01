import React from 'react';
const Filter = ({ handleSearch, newSearch }) => {
  return (
    <div>
      filter shown with a <input onChange={handleSearch} value={newSearch} />
    </div>
  );
};
export default Filter;
