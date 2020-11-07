import React, { createContext, useState } from 'react'

export const SinglePhotoContext = createContext();


export const SinglePhotoProvider = ({ children }) => {
    const [singlePhoto, setSinglePhoto] = useState(null);


    return (
        <SinglePhotoContext.Provider value={{ singlePhoto, setSinglePhoto }}>
            {children}
        </SinglePhotoContext.Provider>
    )

}

