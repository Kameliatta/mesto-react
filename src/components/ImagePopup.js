export default function ImagePopup(props) {
  return(
    <>
      <div className={`popup ${props.card.src && 'popup_opened'}`} id="open-image">
          <div className="popup__content">
            <button onClick={() => props.onClose()} id="close-image" type="button" className="popup__close-button"></button>
            <img className="popup__image" src={props.card.src} alt={props.card.name} />
            <p className="popup__text">{props.card.name}</p>
          </div>
      </div>
    </>
  )
}