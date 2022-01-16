import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const avatarRef = React.createRef();
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm isOpen={props.isOpen} id="update" onSubmit={handleSubmit}>
      <form name="update-avatar" id="update-container" className="popup__container" onSubmit={handleSubmit}>
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <label className="popup__field">
          <input ref={avatarRef} id="avatar" type="url" name="link" className="popup__info" placeholder="Ссылка" />
          <span id="avatar-error" className="popup__error-text"></span>
        </label>
        <button id="update-button" type="submit" className="popup__submit">Сохранить</button>
      </form>
    </PopupWithForm>
  )
}