export default function ImagePopup({card, onClose}) {
  return (
    <>
      <div className={`popup ${card.src ? 'popup_opened' : ''}`} id="open-image">
          <div className="popup__content">
            <button onClick={onClose} id="close-image" type="button" className="popup__close-button"></button>
            <img className="popup__image" src={card.src} alt={card.name} />
            <p className="popup__text">{card.name}</p>
          </div>
      </div>
    </>
  )
}