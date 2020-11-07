import { useState, useEffect } from 'react'
import axios from '../helpers/axios';


export const useFetchSinglePhoto = (fetchUrl, id = null) => {
    const [photo, setPhoto] = useState([]);
    const [loadingPhoto, setLoading] = useState(true);

    useEffect(() => {
        if (id === null) return;
        const fetchData = async () => {
            try {
                setLoading(true)
                const request = await axios.get(`${fetchUrl}${process.env.REACT_APP_API_KEY}`);
                setPhoto(request.data)
            }
            catch (err) {
                console.log(err)
            }
            setLoading(false)
        }
        fetchData();
    }, [id, fetchUrl])

    return { photo, loadingPhoto }

}