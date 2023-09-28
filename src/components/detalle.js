import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './detalle.css';
import BarraNav from './barranav';

function DetalleProducto(){

    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Ha ocurrido un error');
            }
            return response.json();
          })
          .then((data) => {
            setProducto(data);
          })
          .catch((error) => {
            console.error('Ha ocurrido un error', error);
          });
    }, [id]);

    if (!producto) {
        return <div>Cargando...</div>;
    }

    const addToCarrito = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
          const currentCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
          currentCarrito.push(producto);
          localStorage.setItem('carrito', JSON.stringify(currentCarrito));
        }
    };
    
    return (
        <div className='container'>
          <div className='barranav-container'>
            <BarraNav />
          </div>
          <div className='all-container'>
            <div className='detalle-container'>
              <div key={producto.id} className="card-detalle">
                <div className="image-detalle">
                  <div className="producto-image-detalle">
                    <img src={producto.image} alt={producto.title} />
                  </div>
                </div>
                <div className="detalle">
                  <h2>{producto.title}</h2>
                  <p>Precio: ${producto.price}</p>
                  <p>Categoría: {producto.category}</p>
                  <p>Descripción: {producto.description}</p>
                </div>
              </div>
            </div>
            <button onClick={addToCarrito} className='carrito-button'>
              <Link to="/carrito">Añadir al carrito</Link>
            </button>
          </div>
        </div>
      );

}

export default DetalleProducto;