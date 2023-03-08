import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Botonera from './components/main/Botonera/Botonera';
import Presupuesto from './components/main/Search/Presupuesto/Presupuesto';
import SelectRental from './components/main/Search/Select/Select-rental';
import Slice from './components/header/Slice/Slice';
import Nav from './components/header/Nav/Nav';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
    <Slice />
    <Botonera />
    <SelectRental />
    <Presupuesto />


  </React.StrictMode>
);

