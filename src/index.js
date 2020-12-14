import React from 'react';
import ReactDOM from 'react-dom';
import './access/css/main.css';
import App from './App';
import Axios from 'axios'
import { API } from './Global'


const { Urlbase } = API

Axios.defaults.baseURL = Urlbase;
// Axios.defaults.headers.common["Authorization"]=localStorage.getItem('token');
Axios.interceptors.request.use(
  config=>{
    config.headers.Authorization=localStorage.getItem('token')
    return config
  });
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );


