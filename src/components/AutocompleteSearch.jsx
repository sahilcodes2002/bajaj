// AutocompleteSearch.js
import React, { useState } from 'react';

const AutocompleteSearch = ({ value, onChange, doctors }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    onChange(query);
    
    if (query.length > 0) {
      const matches = doctors
        .filter(doctor => 
          doctor.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 3);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container w-full text-sm">
      <input
      className='w-full h-8 rounded-md px-5'
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Search doctors..."
        data-testid="autocomplete-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map(doctor => (
            <li
            className='bg-white cursor-pointer'
              key={doctor.id}
              onClick={() => onChange(doctor.name)}
              data-testid="suggestion-item"
            >
              {doctor.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteSearch;