import React, { useContext } from 'react'
import '../styles/modal.scss'
import ReactDom from 'react-dom'
import { ModalContext } from '../context/ModalConext'


const Modal = () => {
    const { closeModal, open, currentElement } = useContext(ModalContext);
    if (!open) return null;
    return ReactDom.createPortal(
        <>
            <div className="modal__overlay">
                {console.log(currentElement.cover_photo)}
                <div className="modal">
                    <button onClick={closeModal}>Zamknij</button>
                    <div className="modal__inner">
                        <img className="modal__image" src={currentElement.cover_photo.urls.regular} alt={currentElement.cover_photo.alt_description} />
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;