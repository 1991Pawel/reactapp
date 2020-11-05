import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import SvgSearch from './SvgSearch';
import '../styles/searchbar.scss'
import { useFetch } from '../hooks/useFetch'
import Spinner from './Spinner';


const Result = ({ data }) => {

    if (!data.length) {
        return (
            <ul className="search-bar__results">
                <li><span>no results</span></li>

            </ul>
        )
    }


    return (
        <ul className="search-bar__results">
            {data?.map(({ id, title }) =>
                <li key={id}>
                    <Link key={id} to={`/search/${title}`}>{title}</Link>
                </li>
            )}
        </ul >
    )
}

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const { data, loading, debouncedSearchTerm } = useFetch(search);
    const history = useHistory();

    const onChangeHandler = (e) => setSearch(e.target.value)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        history.push(`/search/${search}`);
    }

    return (
        <form onSubmit={(e) => onSubmitHandler(e)} className="search-bar">
            <div className="search-bar__inner">
                <button className="search-bar__btn">
                    <SvgSearch width="20" height="20" fill="#3F3F3F" />
                </button>
                <input onChange={(e) => onChangeHandler(e)}
                    value={search}
                    className="search-bar__input"
                    type="text"
                    placeholder="Search..." />

                {loading && <Spinner />}
            </div>
            {debouncedSearchTerm.length >= 3 && <Result data={data} />}
        </form>
    )
}

export default SearchBar;

