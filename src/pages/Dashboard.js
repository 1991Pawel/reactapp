import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import { useFetch } from '../hooks/useFetch'
import { ModalContext } from '../context/ModalConext'
import { SinglePhotoContext } from '../context/SinglePhotoContext'
import Modal from '../components/Modal'
import { useFetchSinglePhoto } from '../hooks/useFetchSinglePhoto'
import Tabs from '../components/Tabs'
import Spinner from '../components/Spinner'
import PhotoCollection from '../components/PhotoCollection'
import '../styles/dashboard.scss'


const Dashboard = () => {
    const { openModal } = useContext(ModalContext);
    const { setSinglePhoto } = useContext(SinglePhotoContext);
    const { searchId } = useParams();
    const { data, loading } = useFetch(`search/photos?&query=${searchId}&client_id=`);
    const [singleImageId, setSingleImageId] = useState(null);
    const { photo, loadingPhoto, error } = useFetchSinglePhoto(`photos/${singleImageId}?client_id=`, singleImageId);

    // array for tabs
    const tagsList = data.map((item) => item.tags).flat();
    const uniqueTags = Array.from(new Set(tagsList.map((item) => item.title).slice(0, 5)));

    const openSinglePhoto = (id) => {
        setSingleImageId(id);
        openModal();
        setSinglePhoto(photo)
    }


    return (
        <div className="search">
            <Modal error={error} photo={photo} loadingPhoto={loadingPhoto} />
            <SearchBar content={searchId} />
            <h1 className="search__title">{searchId}</h1>
            <nav className="search__nav">
                <Tabs uniqueTags={uniqueTags} />
            </nav>
            <div className="search__inner">
                <div className="search__image">
                    {loading ? <Spinner /> : <PhotoCollection openSinglePhoto={openSinglePhoto} data={data} />}
                </div>
            </div>
        </div>
    )
}
export default Dashboard;

