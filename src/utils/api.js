class Api {
  constructor(config, renderInfo) {
    this._url = config.url;
    this._headers = config.headers;
    this._renderInfo = renderInfo;
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
      .then((result) => {
        return result
      })
  }

  setNewData(data, method, urlData) {
    return fetch(this._url + `${urlData}`, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._getResponseData)
  }

  clickLike(cardId, method, urlData) {
    return fetch(this._url + urlData + `${cardId}`, {
      method: method,
      headers: this._headers
    })
      .then(this._getResponseData)
      .then((result) => {
        return result
      })
  }

  deleteCard(cardId, method, urlData) {
    return fetch(this._url + urlData + `${cardId}`, {
      method: method,
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