// AutocompleteInput.jsx

import React, { useState } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';

const AutocompleteInput = ({ onSelect }) => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['address'],
    },
  });

  const handleSelect = (address) => {
    onSelect(address);
    setSelectedAddress(address);
    setValue(address, false);
    clearSuggestions();
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Enter address"
      />
      {status === 'OK' && (
        <ul>
          {data.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion.description)}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
