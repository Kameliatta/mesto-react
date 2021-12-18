import '../index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', src: ''});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', src: ''});
  }

  return (
    <>
      <Header />

      <Main onEditAvatar={handleEditAvatarClick} 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
      />

      <PopupWithForm isOpen={isEditProfilePopupOpen} id="edit">
        <form id="edit-container" name="about-profile" className="popup__container">
          <button id="close-edit" type="button" className="popup__close-button" onClick={closeAllPopups}></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <label className="popup__field">
            <input id="name" type="text" name="firstname" className="popup__info" placeholder="Имя" />
            <span id="name-error" className="popup__error-text"></span>
          </label>
          <label className="popup__field">
            <input id="description" type="text" name="description" className="popup__info" placeholder="О себе" />
            <span id="description-error" className="popup__error-text"></span>
          </label>
          <button id="save" type="submit" className="popup__submit">Сохранить</button>
        </form>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} id="add">
        <form name="about-card" className="popup__container" id="add-container">
          <button id="close-add" type="button" className="popup__close-button" onClick={closeAllPopups}></button>
          <h2 className="popup__title">Новое место</h2>
          <label className="popup__field">
            <input id="title" type="text" name="name" className="popup__info" placeholder="Название" />
            <span id="title-error" className="popup__error-text"></span>
          </label>
          <label className="popup__field">
            <input id="link" type="url" name="link" className="popup__info" placeholder="Ссылка на картинку" />
            <span id="link-error" className="popup__error-text"></span>
          </label>
          <button id="create" type="submit" className="popup__submit">Создать</button>
        </form>
      </PopupWithForm>

      <PopupWithForm isOpen={isEditAvatarPopupOpen} id="update">
        <form name="update-avatar" id="update-container" className="popup__container">
          <button type="button" className="popup__close-button" onClick={closeAllPopups}></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <label className="popup__field">
            <input id="avatar" type="url" name="link" className="popup__info" placeholder="Ссылка" />
            <span id="avatar-error" className="popup__error-text"></span>
          </label>
          <button id="update-button" type="submit" className="popup__submit">Сохранить</button>
        </form>
      </PopupWithForm>

      <PopupWithForm id="delete">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__title popup__question">Вы уверены?</h2>
          <button type="submit" id="yes" className="popup__submit">Да</button>
        </div>
      </PopupWithForm>
      
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Footer />
    </>
  ) 
}

ReactDOM.render((
  <>
    <App/>
  </>
), document.getElementById('root'));

export default App;
