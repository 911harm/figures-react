import React from 'react';
import ReactDOM from 'react-dom';
import './access/css/main.css';
import App from './App';
import Axios from 'axios'
import { API } from './Global'
import store from './store'
import { Provider } from 'react-redux';


const { Urlbase } = API

Axios.defaults.baseURL = Urlbase;
// Axios.defaults.headers.common["Authorization"]=localStorage.getItem('token');
Axios.interceptors.request.use(
  config => {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  });



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => console.log(store.getState()))

