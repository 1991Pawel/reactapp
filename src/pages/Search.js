import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import '../styles/search.scss'


const Search = () => {
    const { searchId } = useParams();
    // const [data, setData] = useState();
    // const [loading, setLoading] = useState(true);



    return (
        <div className="search">
            <SearchBar />
            {console.log(searchId)}
            <h1>{searchId}</h1>
        </div>
    )
}
export default Search;