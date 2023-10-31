import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemorySource, createHistory, LocationProvider } from '@reach/router'; // Importa las utilidades de React Router v6
import DetalleProducto from './components/detalle';

test('El componente DetalleProducto se renderiza correctamente', async () => {
  // Simula una URL con un parámetro "id"
  const source = createMemorySource('/producto/1');
  const history = createHistory(source);

  // Simula una respuesta de la API con un producto
  const mockProduct = {
    id: 1,
    title: 'Producto de prueba',
    price: 20,
    category: 'Pruebas',
    description: 'Este es un producto de prueba.',
    image: 'imagen.jpg',
  };

  // Mock de fetch para simular la respuesta de la API
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(mockProduct),
  });

  // Renderiza el componente dentro de LocationProvider con el historial
  render(
    <LocationProvider history={history}>
      <DetalleProducto />
    </LocationProvider>
  );

  // Verifica que el texto "Cargando..." esté presente mientras se carga el producto
  expect(screen.getByText('Cargando...')).toBeInTheDocument();

  // Espera a que se cargue y renderice el producto
  await waitFor(() => {
    expect(screen.getByText('Producto de prueba')).toBeInTheDocument();
    expect(screen.getByText('Precio: $20')).toBeInTheDocument();
    expect(screen.getByText('Categoría: Pruebas')).toBeInTheDocument();
    expect(screen.getByText('Descripción: Este es un producto de prueba.')).toBeInTheDocument();
  });
});
