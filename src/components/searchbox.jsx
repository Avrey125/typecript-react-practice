import React from 'react';

const SearchBox = ({placeholder, handleChange}) => {
  return (
    <input
    className='search'
      onChange={handleChange} 
      type="search" 
      placeholder={placeholder}/>
  )
}

export default SearchBox;

