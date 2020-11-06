import React from 'react'
import '../styles/modal.scss'
import ReactDom from 'react-dom'

const Modal = ({ openModal, setCloseModal, children }) => {
    if (!openModal) return null

    return ReactDom.createPortal(
        <>
            <div className="modal__overlay">
                <div className="modal">
                    <button onClick={() => setCloseModal(false)}>Zamknij</button>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;