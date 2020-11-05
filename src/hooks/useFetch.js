import { useState, useEffect } from 'react'
const API_KEY = 'O7LuvAFjOLt9kL-tr6d4JkHd1csLzgzHqItnJHs1RQg'

export const useFetch = (query) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            if (query.length >= 3) {
                const response = await fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${API_KEY}`);
                const data = await response.json();
                setData(() => data.results);
            }
        }
        fetchData();
    }, [query])

    return { data }

}