import React from 'react'
import SvgSearch from './SvgSearch';
import '../styles/searchbar.scss'


const SearchBar = () => {


    return (
        <div className="search-bar">
            <div className="search-bar__inner">
                <button className="search-bar__btn">
                    <SvgSearch width="20" height="20" fill="#3F3F3F" />
                </button>
                <input className="search-bar__input" type="text" placeholder="Search..." />
            </div>
        </div>

    )
}

export default SearchBar;

