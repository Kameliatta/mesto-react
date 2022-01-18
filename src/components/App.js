import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContent';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', src: ''});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  //получение данных
  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getCardsInfo()
    ])

    .then((values)=>{
      setCurrentUser(values[0]);
      setCards(values[1]);
    })

    .catch((err)=>{
        console.log(err);
    })
  }, [])

  

  //удаление карточки
  function handleCardDelete(card) {
    api.deleteCard(card._id)
          .then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id));
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`)
          })
  }

  //снятие/установка лайка
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.clickLike(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        })
  }

  //обновление информации о пользователе
  function handleUpdateUser(userInfo) {
    api.setUserInfo({
      name: userInfo.name,
      about: userInfo.about
      })
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }
 
  //обновление аватара
  function handleUpdateAvatar(avatarInfo) {
    api.setUserAvatar({
      avatar: avatarInfo.avatar
    })
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }

  //добавление новой карточки
  function handleAddPlaceSubmit(newCard) {
    api.setCardInfo({
      name: newCard.name,
      link: newCard.link
      })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }

  //открытие попапов
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

  // закрытие попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', src: ''});
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick} 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        /> 

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm id="delete">
          <div className="popup__container">
            <button type="button" className="popup__close-button"></button>
            <h2 className="popup__title popup__question">Вы уверены?</h2>
            <button type="submit" id="yes" className="popup__submit">Да</button>
          </div>
        </PopupWithForm>
        
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </CurrentUserContext.Provider>
    </>
  ) 
}

export default App;
