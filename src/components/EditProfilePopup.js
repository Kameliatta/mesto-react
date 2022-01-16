import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContent";

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  return (
    <>
      <PopupWithForm isOpen={props.isOpen} id="edit" onSubmit={handleSubmit}>
          <form onSubmit={handleSubmit} id="edit-container" name="about-profile" className="popup__container">
            <button id="close-edit" type="button" className="popup__close-button" onClick={props.onClose}></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <label className="popup__field">
              <input id="name" type="text" name="firstname" className="popup__info" placeholder="Имя" onChange={handleNameChange} value={`${name}`} />
              <span id="name-error" className="popup__error-text"></span>
            </label>
            <label className="popup__field">
              <input id="description" type="text" name="description" className="popup__info" placeholder="О себе" onChange={handleDescriptionChange} value={`${description}`} />
              <span id="description-error" className="popup__error-text"></span>
            </label>
            <button id="save" type="submit" className="popup__submit">Сохранить</button>
          </form>
      </PopupWithForm>
    </>
  )
}