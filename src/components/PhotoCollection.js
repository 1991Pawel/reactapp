import '../styles/dashboard.scss'
const PhotoCollection = ({ data, openSinglePhoto }) => {
    if (!data.length) return <p>Brak zdjęć</p>

    return (
        <ul className="photo">
            {data.map((photo) => <li key={photo.id} onClick={() => openSinglePhoto(photo.id)} className="photo__item">
                <img src={photo.urls.thumb} alt={photo.description} />
                <span>{photo.location}</span>
            </li>)}
        </ul>
    )
}
export default PhotoCollection;