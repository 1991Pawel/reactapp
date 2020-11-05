import React, { useState } from 'react'
import SvgSearch from './SvgSearch';
import '../styles/searchbar.scss'
import { useFetch } from '../hooks/useFetch'


const Result = ({ data, search }) => {

    return (
        <ul className="search-bar__results">
            {data.map(({ id, alt_description }) => <li key={id}>{alt_description}</li>)}
        </ul>
    )

}

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const { data } = useFetch(search);

    const onClickHandler = (e) => {
        setSearch(() => e.target.value)
    }


    return (
        <div className="search-bar">
            <div className="search-bar__inner">
                <button className="search-bar__btn">
                    <SvgSearch width="20" height="20" fill="#3F3F3F" />
                </button>
                <input onChange={(e) => onClickHandler(e)}
                    value={search}
                    className="search-bar__input"
                    type="text"
                    placeholder="Search..." />
            </div>
            <Result search={search} data={data} />
        </div>
    )
}

export default SearchBar;

