import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './tienda.css';
import BarraNav from './barranav';

function Tienda(){

    const [productos, setProductos] = useState([]);
    const [showAll, setShowAll] = useState(true);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Ha ocurrido un error');
            }
            return response.json();
          })
          .then((data) => {
            setProductos(data);
          })
          .catch((error) => {
            console.error('Ha ocurrido un error', error);
          });
    }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
      <div className="tienda">
        <BarraNav />
        <div className="productos">
          {productos.slice(0, showAll ? productos.length : 6).map((producto) => (
            <div key={producto.id} className="card">
              <div className="image">
                <div className="imagen_producto">
                  <img src={producto.image} alt={producto.title} />
                </div>
              </div>
              <div className="detalles">
                <h2>{producto.title}</h2>
                <p>Precio: ${producto.price}</p>
                <p>Categoría: {producto.category}</p>
                <Link to={`/productos/${producto.id}`} className='button-link'>Ver Detalles</Link>
              </div>
            </div>
          ))}
        </div>
        <button onClick={toggleShowAll} className='button-ver'>
          {showAll ? 'Ver Menos' : 'Ver Más'}
        </button>
        <p>
          Se están mostrando {showAll ? productos.length : 6} de {productos.length} productos
        </p>
      </div>
    );
}

export default Tienda;