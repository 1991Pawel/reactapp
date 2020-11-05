import { useState, useEffect } from 'react'
import { useDebounce } from './useDebounce';
import axios from 'axios';
const API_KEY = 'O7LuvAFjOLt9kL-tr6d4JkHd1csLzgzHqItnJHs1RQg'



export const useFetch = (query) => {
    const [data, setData] = useState();
    const debouncedSearchTerm = useDebounce(query, 600);

    useEffect(() => {
        const fetchData = async () => {
            if (debouncedSearchTerm.length >= 3) {
                const request = await axios.get(`https://api.unsplash.com/search/collections?page=1&per_page=5&query=${debouncedSearchTerm}&client_id=${API_KEY}`);
                setData(request.data.results)

            } else {
                setData([]);
            }
        }
        fetchData();
    }, [debouncedSearchTerm])
    return { data }

}