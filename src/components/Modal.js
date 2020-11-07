import React, { useContext } from 'react'
import '../styles/modal.scss'
import { ModalContext } from '../context/ModalConext'
import Spinner from './Spinner';

const Modal = ({ photo, loadingPhoto, error }) => {
    const { closeModal, open } = useContext(ModalContext);
    if (!open) return null
    if (loadingPhoto) {
        return (
            <div className="modal__overlay">
                <div className="modal">
                    <Spinner />
                </div>
            </div>
        )
    }
    if (error) return (
        <div className="modal__overlay">
            <div className="modal">
                <button className="modal__btn" onClick={closeModal}>X</button>
                nie można załadować zdjecia.
            </div>
        </div>
    )
    return (
        <>
            <div className="modal__overlay">
                <div className="modal">
                    <button className="modal__btn" onClick={closeModal}>X</button>
                    <div className="modal__user">
                        <span className="user__avatar">
                            <img src={photo.user.profile_image.medium} alt={photo.user.name} />
                        </span>
                        <h5 className="user">
                            {photo.user.name}
                        </h5>
                    </div>
                    <div className="modal__image">
                        <img src={photo.urls.regular} alt={photo.alt_description} />
                    </div>
                    <div className="modal__location">
                        {photo.location.name}
                    </div>
                    <span className="modal__likes">{'likes: ' + photo.likes}</span>
                </div>
            </div>
        </>
    )
}

export default Modal;