import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './tienda.css';
import BarraNav from './barranav';
import { useAppContext } from '../AppContext';

function Tienda() {
  const { state, dispatch } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
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
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      })
      .catch((error) => {
        console.error('Ha ocurrido un error', error);
      });
  }, [dispatch]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  let products = state.products;
  let ProductosMostrados = showAll ? products : products.slice(0, 6);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (selectedCategory !== "Todos") {
    ProductosMostrados = ProductosMostrados.filter(
      (product) => product.category === selectedCategory
    );
  }

  return (
    <div className="tienda">
      <BarraNav />
      <div className="category-filter">
        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="Todos">Mostrar Todos</option>
          <option value="men's clothing">Ropa de Hombre</option>
          <option value="jewelery">Joyería</option>
          <option value="electronics">Electrónicos</option>
          <option value="women's clothing">Ropa de Mujer</option>
        </select>
        <button onClick={toggleShowAll} className='button-ver'>
          {showAll ? 'Ver Menos' : 'Ver Más'}
        </button>
        <p>
        Se están mostrando {showAll ? products.length : 6} de {products.length} productos
        </p>
      </div>
      <div className="products">
        {ProductosMostrados.map((product) => (
          <div key={product.id} className="card">
            <div className="image">
              <div className="imagen_producto">
                <img src={product.image} alt={product.title} />
              </div>
            </div>
            <div className="detalles">
              <h2>{product.title}</h2>
              <p>Precio: ${product.price}</p>
              <p>Categoría: {product.category}</p>
              <Link to={`/products/${product.id}`} className='button-link'>Ver Detalles</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tienda;
