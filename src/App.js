import React from 'react';
import './App.css';
import Tienda from './components/tienda';
import Carrito from './components/carrito';
import Detalle from './components/detalle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './AppContext';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="app">
          <Routes>
            <Route
            path="/"
            element={<Tienda />} />
            <Route
            path="/carrito"
            element={<Carrito />} />
            <Route
            path="/products/:id"
            element={<Detalle />} />
        </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App;
