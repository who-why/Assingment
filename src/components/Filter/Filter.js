import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tableSize, setTableSize] = useState('');
  const [tableStatus, setTableStatus] = useState('');

  const handleSearch = () => {
    console.log('Search Term:', searchTerm);
    console.log('Table Size:', tableSize);
    console.log('Table Status:', tableStatus);
  };

  return (
    <div className="search-filter-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={tableSize} onChange={(e) => setTableSize(e.target.value)}>
        <option value="">Table Size</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </select>
      <select value={tableStatus} onChange={(e) => setTableStatus(e.target.value)}>
        <option value="">Table Status</option>
        <option value="available">Available</option>
        <option value="Busy">Busy</option>
      </select>
      <button onClick={handleSearch}>Filter</button>
    </div>
  );
};

export default Filter;
