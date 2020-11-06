import React, { createContext, useState } from 'react'

export const ModalContext = createContext();


export const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [currentElement, setCurrentElement] = useState(null)

    const closeModal = () => setOpen(false);

    const openModal = (element = null) => {
        setCurrentElement(element)
        setOpen(true);
    }


    return (
        <ModalContext.Provider value={{ open, closeModal, openModal, currentElement, setCurrentElement }}>
            {children}
        </ModalContext.Provider>
    )

}

