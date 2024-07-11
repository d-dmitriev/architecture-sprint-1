import React from 'react';
import Card from './Card';
import ImagePopup from './ImagePopup';
import '../blocks/places/places.css';

function Cards({ cards, onCardLike, onCardDelete, currentUser }) {
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setSelectedCard(null);
    }

    return (
        <>
            <ul className="places__list">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={handleCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                        currentUser={currentUser}
                    />
                ))}
            </ul>
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </>
    )
}

export default Cards;