import React from "react";

export default function PopupWithForm(props) {
  return(
    <>
      <div className={`popup ${props.isOpen && 'popup_opened'}`} id={props.id}>
        <div className="popup__content">
          {props.children}
        </div>
      </div>
    </>
  )
}