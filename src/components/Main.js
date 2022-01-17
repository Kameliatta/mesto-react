import avatarButtonImage from '../images/edit-avatar.svg';
import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContent';

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
    <main className="content">
        <section className="profile">
          <div className="profile__info">
            <img className="profile__avatar" src={currentUser.avatar}  alt="Фото профиля"/>
            <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}><img className="profile__avatar-button-image" src={avatarButtonImage} alt=""/></button>
            <div className="profile__info-container">
              <div className="profile__info-container-text">
                <h1 className="profile__name">{currentUser.name}</h1>
                <p className="profile__text">{currentUser.about}</p>
              </div>
              <button type="button" className="profile__edit-button selected" onClick={props.onEditProfile}></button>
            </div>
          </div>
          <button type="button" className="profile__add-button selected" onClick={props.onAddPlace}></button>
        </section>
          <section className="element-container">
            <ul className="elements">
              {props.cards.map((item) => (
                <Card 
                    onCardClick={props.onCardClick}
                    onCardLike={props.onCardLike}
                    onCardDelete={props.onCardDelete}
                    key={item._id}
                    card={item}
                />
              ))}
            </ul>
          </section>
    </main>
    </>
  )
}