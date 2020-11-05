import React, { useState } from 'react'
import SvgSearch from './SvgSearch';
import '../styles/searchbar.scss'
import { useFetch } from '../hooks/useFetch'
import Spinner from './Spinner';


const Result = ({ data, search }) => {
    if (!data.length) return <li>no results</li>
    return (
        <ul className="search-bar__results">
            {data?.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
    )
}

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const { data, loading, debouncedSearchTerm } = useFetch(search);

    const onClickHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <form className="search-bar">
            <div className="search-bar__inner">
                <button className="search-bar__btn">
                    <SvgSearch width="20" height="20" fill="#3F3F3F" />
                </button>
                <input onChange={(e) => onClickHandler(e)}
                    value={search}
                    className="search-bar__input"
                    type="text"
                    placeholder="Search..." />

                {loading && <Spinner />}
            </div>
            {debouncedSearchTerm.length >= 3 && <Result search={search} data={data} />}
        </form>
    )
}

export default SearchBar;

