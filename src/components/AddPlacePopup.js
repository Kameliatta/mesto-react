import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

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

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      id="add"
      onSubmit={handleSubmit}
      onClose={props.onClose}
      popupName="Новое место"
      buttonText="Создать"
    >
      <label className="popup__field">
        <input
          id="title"
          type="text"
          name="name"
          className="popup__info"
          placeholder="Название"
          onChange={handleName}
          value={`${name}`}
        />
        <span id="title-error" className="popup__error-text"></span>
      </label>
      <label className="popup__field">
        <input
          id="link"
          type="url"
          name="link"
          className="popup__info"
          placeholder="Ссылка на картинку"
          onChange={handleLink}
          value={`${link}`}
        />
        <span id="link-error" className="popup__error-text"></span>
      </label>
    </PopupWithForm>
  )
}