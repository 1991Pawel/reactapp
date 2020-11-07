import React, { useContext, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import '../styles/search.scss'
import { useFetch } from '../hooks/useFetch'
import { ModalContext } from '../context/ModalConext';
import { SinglePhotoContext } from '../context/SinglePhotoContext'
import Modal from '../components/Modal'
import { useFetchSinglePhoto } from '../hooks/useFetchSinglePhoto';



const Tabs = ({ uniqueTags }) => {
    return (
        <ul className="tabs">
            {uniqueTags.map((tag) => <li key={tag} className="tabs__item">
                <Link className="tabs__link" to={`/search/${tag}`}>{tag}</Link>
            </li>)}
        </ul>
    )
}

const PhotoCollection = ({ data, openModal, openSinglePhoto }) => {
    return (
        <ul className="photo">
            {data.map((photo) => <li key={photo.id} onClick={() => openSinglePhoto(photo.id)} className="photo__item">
                <img src={photo.urls?.thumb} alt={photo.description} />
                <span className="photo__tags">{photo.tags.map((tag) => tag.title).splice(0, 3).join(' ')}</span>
                <span>{photo.location}</span>
            </li>)}
        </ul>
    )
}

const Search = () => {
    const { openModal } = useContext(ModalContext);
    const { setSinglePhoto } = useContext(SinglePhotoContext);
    const { searchId } = useParams();
    const { data } = useFetch(`search/photos?&query=${searchId}&client_id=`);
    const [singleImageId, setSingleImageId] = useState(null);
    const { photo, loadingPhoto } = useFetchSinglePhoto(`photos/${singleImageId}?client_id=`, singleImageId);

    const openSinglePhoto = (id) => {
        setSingleImageId(id);
        openModal();
        setSinglePhoto(photo)
    }

    // array for tabs
    const tagsList = data.map((item) => item.tags).flat();
    const uniqueTags = Array.from(new Set(tagsList.map((item) => item.title).slice(0, 5)));


    return (
        <div className="search">
            <Modal photo={photo} loadingPhoto={loadingPhoto} />
            <SearchBar content={searchId} />
            <h1 className="search__title">{searchId}</h1>
            <nav className="search__nav">
                <Tabs uniqueTags={uniqueTags} />
            </nav>
            <div className="search__inner">
                <div className="search__image">
                    {data.length && <PhotoCollection openSinglePhoto={openSinglePhoto} data={data} />}
                </div>
            </div>
        </div>
    )
}
export default Search;

