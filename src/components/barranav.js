import React from 'react';
import { Link } from 'react-router-dom';
import './barranav.css';
import Logo from './JA.png';

function BarraNav(){

    return (
        <nav className="barranav">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h1>Fake Store</h1>
          </div>
          <ul className="links">
            <Link to="/">Inicio</Link>
            <Link to="/carrito">Carrito</Link>
          </ul>
        </nav>
      );
}

export default BarraNav;