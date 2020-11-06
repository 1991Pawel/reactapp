import { useState, useEffect } from 'react'
import { useDebounce } from './useDebounce';
import axios from 'axios';
const API_KEY = 'O7LuvAFjOLt9kL-tr6d4JkHd1csLzgzHqItnJHs1RQg'



export const useFetch = (query, limit = 5) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const debouncedSearchTerm = useDebounce(query, 500);


    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                if (debouncedSearchTerm.length >= 3) {
                    const request = await axios.get(`https://api.unsplash.com/search/collections?page=1&per_page=${limit}&query=${debouncedSearchTerm}&client_id=${API_KEY}`);
                    setData(request.data.results)
                }
            }
            catch (err) {
                console.log(err)
            }
            setLoading(false)

        }
        fetchData();
    }, [debouncedSearchTerm, limit])

    return { data, loading, debouncedSearchTerm }

}