import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './state/index' 
import {Reset} from 'styled-reset';
import MainPage from './components/MainPage/MainPage';
import App from './App';

ReactDOM.render(
  <>

    <StrictMode>
      <Provider store={store}>
      <App/>
      </Provider>
    </StrictMode>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
