import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './detalle.css';
import BarraNav from './barranav';
import { useAppContext } from '../AppContext';


function DetalleProducto(){

    const { id } = useParams();
    const [product, setProducto] = useState(null);
    const { dispatch } = useAppContext();

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

    if (!product) {
        return <div>Cargando...</div>;
    }

    const addToCarrito = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
          const currentCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
          currentCarrito.push(product);
          localStorage.setItem('carrito', JSON.stringify(currentCarrito));
        }
        const action = { type: 'ADD_TO_CART', payload: product };
        dispatch(action);
    };
    
    return (
        <div className='container'>
          <div className='barranav-container'>
            <BarraNav />
          </div>
          <div className='all-container'>
            <div className='detalle-container'>
              <div key={product.id} className="card-detalle">
                <div className="image-detalle">
                  <div className="product-image-detalle">
                    <img src={product.image} alt={product.title} />
                  </div>
                </div>
                <div className="detalle">
                  <h2>{product.title}</h2>
                  <p>Precio: ${product.price}</p>
                  <p>Categoría: {product.category}</p>
                  <p>Descripción: {product.description}</p>
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