import React from 'react'
import './css/searchbar.css'

const SearchBar = () => {
  return (
    <div className='search-container'>
        <div className='search'>
            <input type='text' placeholder='input youtube url..' />
        </div>
    </div>
  )
}

export default SearchBar