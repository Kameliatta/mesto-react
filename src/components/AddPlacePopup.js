import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CardsContent } from "../contexts/CardsContent";

export default function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const cards = React.useContext(CardsContent);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link
    });
  }

  React.useEffect(() => {
    setName(name);
    setLink(link);
  }, [cards]);

  return (
    <PopupWithForm isOpen={props.isOpen} id="add" onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit} name="about-card" className="popup__container" id="add-container">
        <button id="close-add" type="button" className="popup__close-button" onClick={props.onClose}></button>
        <h2 className="popup__title">Новое место</h2>
        <label className="popup__field">
          <input id="title" type="text" name="name" className="popup__info" placeholder="Название" onChange={handleName} value={`${name}`} />
          <span id="title-error" className="popup__error-text"></span>
        </label>
        <label className="popup__field">
          <input id="link" type="url" name="link" className="popup__info" placeholder="Ссылка на картинку" onChange={handleLink} value={`${link}`} />
          <span id="link-error" className="popup__error-text"></span>
        </label>
        <button id="create" type="submit" className="popup__submit">Создать</button>
      </form>
    </PopupWithForm>
  )
}