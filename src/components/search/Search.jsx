import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {RiDownload2Fill} from 'react-icons/ri'
import './search.css'

function Search() {
  return (
    <div className='search'>
      <div className='search-wrapper'>
        <div className='main-search'>
          <FiSearch className='icon'/>
          <input type='text' placeholder='Search by name or email'/>
        </div>
        <RiDownload2Fill className='icon-down'/>
      </div>
    </div>
  )
}

export default Search