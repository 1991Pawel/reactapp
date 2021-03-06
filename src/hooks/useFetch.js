import { useState, useEffect } from 'react'
import axios from '../helpers/axios';


export const useFetch = (fetchUrl) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const request = await axios.get(`${fetchUrl}${process.env.REACT_APP_API_KEY}`);
                setData(request.data.results)
            }
            catch (err) {
                console.log(err)
            }
            setLoading(false)
        }
        fetchData();
    }, [fetchUrl])

    return { data, loading }

}








