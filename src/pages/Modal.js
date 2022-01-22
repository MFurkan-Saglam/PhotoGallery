import React from "react";

const Modal = ({ selectedPhoto, setSelectedPhoto}) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedPhoto(null);
        }
        }
       

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedPhoto} alt="selected photo"/>
        </div>
    )
}

export default Modal;