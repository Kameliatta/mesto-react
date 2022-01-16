import '../index.css';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContent';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext)
   
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
   const isLiked = props.card.likes.some(i => i._id === currentUser._id);
   const cardLikeButtonClassName = (
     `element__like-button ${isLiked ? 'active' : ''}`
   );

  // определение отображения кнопки удаления
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__delete-button ${isOwn ? 'active_button' : ''}`
  );

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  function handleClick() {
    props.onCardClick({name: props.card.name, src: props.card.link});
  } 
  return (
    <li card={props.card} className="element">
      <img onClick={handleClick} className="element__image" src={props.card.link} alt={props.card.name}/>
      <button onClick={handleDeleteClick} className={cardDeleteButtonClassName}></button>
      <div className="element__container">
        <h3 className="element__container-text">{props.card.name}</h3>
        <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}></button>
        <span className="element__like-button_count">{props.card.likes.length}</span>
      </div>
    </li>
  )
}