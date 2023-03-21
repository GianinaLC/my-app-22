import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
// ! los estilos propios deben ir debajo de BS para que no los pise
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRoutingOneFinal from './AppRoutingOneFinal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingOne />
    <AppRoutingOneFinal /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
