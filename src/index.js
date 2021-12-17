import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App isEditProfilePopupOpen={false} />
  </React.StrictMode>,
  document.getElementById('root')
);

