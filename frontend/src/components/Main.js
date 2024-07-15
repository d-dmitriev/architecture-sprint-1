import React from 'react';
import Cards from 'places/Cards';
import AddPlace from 'places/AddPlace';
import Profile from 'profile/Profile';

function Main({ currentUser, cards, onUpdateUser, onAddPlace, onUpdateAvatar, onCardLike, onCardDelete }) {

  return (
    <main className="content">
      <section className="profile page__section">
        <Profile onUpdateAvatar={onUpdateAvatar} onUpdateUser={onUpdateUser} currentUser={currentUser} />
        <AddPlace onAddPlace={onAddPlace} />
      </section>
      <section className="places page__section">
        <Cards cards={cards} onCardLike={onCardLike} onCardDelete={onCardDelete} currentUser={currentUser} />
      </section>
    </main>
  );
}

export default Main;
