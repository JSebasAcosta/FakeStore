import React from 'react';
import { Link } from 'react-router-dom';
import './carrito.css';
import BarraNav from './barranav';
import {useAppContext} from '../AppContext';

function Carrito() {
    
    const { state } = useAppContext();
  
    return (
      <div className='container'>
        <div className='barranav-container'>
          <BarraNav />
        </div>
        <div className='carrito-container'>
          <h2>Carrito de Compras</h2>
            {state.cart.map((product) => (
              <li key={product.id} className='card'>
                <div className="image">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                </div>
                <div className="detalles">
                  <h2>{product.title}</h2>
                  <p>Precio: ${product.price}</p>
                  <p>Categoría: {product.category}</p>
                  <Link to={`/products/${product.id}`}>Ver Detalles</Link>
                </div>
              </li>
            ))}
        </div>
      </div>
    );
  }
  
  export default Carrito;