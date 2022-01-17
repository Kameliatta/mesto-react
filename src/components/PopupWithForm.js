import React from "react";

export default function PopupWithForm(props) {
  return(
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} id={props.id}>
      <div className="popup__content">
        <form onSubmit={props.onSubmit}  className="popup__container">
          <button type="button" className="popup__close-button" onClick={props.onClose}></button>
          <h2 className="popup__title">{props.popupName}</h2>
          {props.children}
          <button type="submit" className="popup__submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}