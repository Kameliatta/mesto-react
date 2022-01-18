class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(this._url + `users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._getResponseData)
  }

  getCardsInfo() {
    return fetch(this._url + `cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._getResponseData)
  }

  setUserInfo(data) {
    return fetch(this._url + `users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._getResponseData)
  }

  setUserAvatar(data) {
    return fetch(this._url + `users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._getResponseData)
  }

  setCardInfo(data) {
    return fetch(this._url + `cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._getResponseData)
  }

  clickLike(cardId, isLiked) {
    return fetch(this._url + `cards/likes/` + `${cardId}`, {
      method: !isLiked ? 'PUT' : 'DELETE',
      headers: this._headers
    })
      .then(this._getResponseData)
  }

  deleteCard(cardId) {
    return fetch(this._url + `cards/` + `${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._getResponseData)
  }
}


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-30/',
  headers: {
    authorization: 'f1819b78-ec7d-4290-94af-f13ebfcefce1',
    'Content-Type': 'application/json'
  }
})

export default api;