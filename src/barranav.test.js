import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BarraNav from './components/barranav';
import '@testing-library/jest-dom'

test('El componente BarraNav se renderiza correctamente', () => {
  render(
    <MemoryRouter>
      <BarraNav />
    </MemoryRouter>
  );

  const logoText = screen.getByText('Fake Store');
  expect(logoText).toBeInTheDocument();

  const linkInicio = screen.getByText('Inicio');
  expect(linkInicio).toHaveAttribute('href', '/');

  const linkCarrito = screen.getByText('Carrito');
  expect(linkCarrito).toHaveAttribute('href', '/carrito');
});
