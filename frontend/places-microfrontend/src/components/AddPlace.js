import React from 'react';
import AddPlacePopup from './AddPlacePopup';
import '../blocks/profile/__add-button/profile__add-button.css';

function AddPlace({ onAddPlace }) {
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    return (
        <>
            <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onAddPlace={(props) => { closeAllPopups(); if (typeof onAddPlace === "function") onAddPlace(props) }}
                onClose={closeAllPopups}
            />
        </>
    )
}

export default AddPlace;