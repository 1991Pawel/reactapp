import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import SvgSearch from './SvgSearch';
import '../styles/searchbar.scss'
import { useFetch } from '../hooks/useFetch'
import Spinner from './Spinner';
import { useDebounce } from '../hooks/useDebounce'

const Suggestions = ({ suggestionArray, setShowSuggestions, showSuggestions }) => {


    if (!suggestionArray.length) {
        return (
            <ul className="active search-bar__results">
                <li><span>no results</span></li>
            </ul>
        )
    }
    return (
        <ul className={showSuggestions ? 'active search-bar__results' : 'search-bar__results'}>
            {suggestionArray.map(({ id, title }) =>
                <li key={id}>
                    {console.log(suggestionArray)}
                    <Link onClick={() => setShowSuggestions(false)} key={id} to={`/search/${title}`}>{title}</Link>
                </li>
            )}
        </ul>
    )
}

const SearchBar = ({ content = '' }) => {
    const history = useHistory();
    const [search, setSearch] = useState(content);
    const debounceValue = useDebounce(search, 600)
    const [showSuggestions, setShowSuggestions] = useState(true);
    const { data, loading } = useFetch(`search/collections?&per_page=5&query=${debounceValue}&client_id=`);
    const suggestionArray = data.map((item) => item).splice(0, 1);

    useEffect(() => {
        setShowSuggestions(false)
    }, [])

    const resetInputHandler = () => setSearch('');

    const onChangeInputHandler = (e) => {
        if (!showSuggestions) {
            setShowSuggestions(true)
        }
        setSearch(e.target.value)
    }

    const onSubmitInputHandler = (e) => {
        e.preventDefault();
        if (showSuggestions) {
            setShowSuggestions(false)
        }
        search.trim() && history.push(`/search/${search}`);
    }

    return (
        <form onSubmit={onSubmitInputHandler} className="search-bar">
            <div className="search-bar__inner">
                <button className="search-bar__btn">
                    <SvgSearch width="20" height="20" fill="#3F3F3F" />
                </button>
                <input onChange={(e) => onChangeInputHandler(e)}
                    value={search}
                    className="search-bar__input"
                    type="text"
                    required="required"
                    placeholder="Search..." />
                {loading && <Spinner />}
                {search && <button onClick={resetInputHandler} type="reset" className="search-bar__btn">X</button>}
            </div>
            {debounceValue.length >= 3 && <Suggestions debounceValue={debounceValue} setShowSuggestions={setShowSuggestions} showSuggestions={showSuggestions} suggestionArray={suggestionArray} />}
        </form >
    )
}

export default SearchBar;

