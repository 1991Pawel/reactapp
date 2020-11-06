import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import '../styles/search.scss'
import { useFetch } from '../hooks/useFetch'


const Tabs = ({ uniqueTags }) => {
    return (
        <ul className="tabs">
            {uniqueTags.map((tag) => <li key={tag} className="tabs__item">
                <Link className="tabs__link" to={`/search/${tag}`}>{tag}</Link>
            </li>)}
        </ul>
    )
}

const PhotoCollection = ({ data }) => {
    console.log(data)
    return (
        <ul className="photo">
            {data.map(({ id, cover_photo, tags }) => <li key={id} className="photo__item">
                <img src={cover_photo.urls.thumb} alt={cover_photo.description} />
                <span className="phot__tags">{tags.map((tag) => tag.title).splice(0, 3).join(' ')}</span>
            </li>)}
        </ul>
    )
}

const Search = () => {
    const { searchId } = useParams();
    const resultPerPage = 10;
    const { data } = useFetch(searchId, resultPerPage);
    const tagsList = data.map((item) => item.tags).flat();
    const uniqueTags = Array.from(new Set(tagsList.map((item) => item.title).slice(0, 5)));


    return (
        <div className="search">
            <SearchBar content={searchId} />
            <h1 className="search__title">{searchId}</h1>
            <nav className="search__nav">
                <Tabs uniqueTags={uniqueTags} />
            </nav>
            <div className="search__inner">
                <div className="search__image">
                    <PhotoCollection data={data} />
                </div>
            </div>
        </div>
    )
}
export default Search;

