import avatarButtonImage from '../images/edit-avatar.svg';
import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

export default function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
    })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }, [])

  React.useEffect(() => {
      api.getCardsInfo()
        .then(data => {
          const cards = data.map(item => {
            return {
              id: item._id,
              likes: item.likes.length,
              src: item.link,
              name: item.name
            }
          })
          setCards(cards)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        })
  }, [])

  return (
    <>
    <main className="content">
        <section className="profile">
          <div className="profile__info">
            <img className="profile__avatar" src={userAvatar}  alt="Фото профиля"/>
            <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}><img className="profile__avatar-button-image" src={avatarButtonImage} alt=""/></button>
            <div className="profile__info-container">
              <div className="profile__info-container-text">
                <h1 className="profile__name">{userName}</h1>
                <p className="profile__text">{userDescription}</p>
              </div>
              <button type="button" className="profile__edit-button selected" onClick={props.onEditProfile}></button>
            </div>
          </div>
          <button type="button" className="profile__add-button selected" onClick={props.onAddPlace}></button>
        </section>
        <section className="element-container">
          <ul className="elements">
              {cards.map(({id, ...item}) => (
                <Card 
                    onCardClick={props.onCardClick}
                    key={id}
                    {...item}
                />
              ))}
          </ul>
        </section>
    </main>
    </>
  )
}