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
    <PopupWithForm
      isOpen={props.isOpen}
      id="update"
      onSubmit={handleSubmit}
      onClose={props.onClose}
      popupName="Обновить аватар"
      buttonText="Сохранить"
    >
      <label className="popup__field">
        <input
          ref={avatarRef}
          id="avatar"
          type="url"
          name="link"
          className="popup__info"
          placeholder="Ссылка"
        />
        <span id="avatar-error" className="popup__error-text"></span>
      </label>
    </PopupWithForm>
  )
}