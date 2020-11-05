import { useState, useEffect } from 'react'
import { useDebounce } from './useDebounce';
const API_KEY = 'O7LuvAFjOLt9kL-tr6d4JkHd1csLzgzHqItnJHs1RQg'



export const useFetch = (query) => {
    const [data, setData] = useState([]);
    const debouncedSearchTerm = useDebounce(query, 500);


    useEffect(() => {

        const fetchData = async () => {
            if (debouncedSearchTerm.length >= 3) {
                console.log('bum')
                const response = await fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${debouncedSearchTerm}&client_id=${API_KEY}`);
                const data = await response.json();
                setData(data.results);
            } else {
                setData([]);
            }
        }
        fetchData();
    }, [debouncedSearchTerm])

    return { data }

}