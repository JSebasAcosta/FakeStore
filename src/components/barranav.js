import React from 'react';
import { Link } from 'react-router-dom';
import './barranav.css';
import { useEffect, useState } from "react";

function BarraNav(){

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users/8")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

    return (
        <nav className="barranav">
          <div className="logo">
            <div className="user-data">
            {user.name != null
              ? user.name.firstname[0] + user.name.lastname[0]
              : ""}
            </div>
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