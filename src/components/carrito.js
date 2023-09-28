import React from 'react';
import { Link } from 'react-router-dom';
import './carrito.css';
import BarraNav from './barranav';

function Carrito() {
    const carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];
  
    return (
      <div className='container'>
        <div className='barranav-container'>
          <BarraNav />
        </div>
        <div className='carrito-container'>
          <h2>Carrito de Compras</h2>
            {carritoItems.map((producto) => (
              <li key={producto.id} className='card'>
                <div className="image">
                  <div className="producto-image">
                    <img src={producto.image} alt={producto.title} />
                  </div>
                </div>
                <div className="detalles">
                  <h2>{producto.title}</h2>
                  <p>Precio: ${producto.price}</p>
                  <p>Categoría: {producto.category}</p>
                  <Link to={`/productos/${producto.id}`}>Ver Detalles</Link>
                </div>
              </li>
            ))}
        </div>
      </div>
    );
  }
  
  export default Carrito;