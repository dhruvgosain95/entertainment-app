import React from 'react'
import searchIcon from '../../assets/icon-search.svg'
import './Search.scss'

const Search = () => {
  return (
    <div className='search-wrapper'>
        <input type='text'/>
        <img src={searchIcon} className='search-icon' alt="search"/>
    </div>
  )
}

export default Search