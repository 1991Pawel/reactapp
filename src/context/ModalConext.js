import React, { createContext, useState } from 'react'

export const ModalContext = createContext();


export const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    const openModal = () => setOpen(true);



    return (
        <ModalContext.Provider value={{ open, closeModal, openModal }}>
            {children}
        </ModalContext.Provider>
    )

}

