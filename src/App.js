import React from 'react';
import './App.css';
import Tienda from './components/tienda';
import Carrito from './components/carrito';
import Detalle from './components/detalle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
          path="/"
          element={<Tienda />} />
          <Route
          path="/carrito"
          element={<Carrito />} />
          <Route
          path="/productos/:id"
          element={<Detalle />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
