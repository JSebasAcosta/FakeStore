import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import DetalleProducto from './components/detalle';
import { AppProvider } from './AppContext';

describe('DetalleProducto', () => {
  it('muestra "Cargando..." cuando no hay ningún producto', () => {
    
    const { getByText } = render(
      <AppProvider> 
        <DetalleProducto product={null} />
      </AppProvider> 
        );

    
    const cargandoTexto = screen.getByText('Cargando...');
    expect(cargandoTexto).toBeInTheDocument();
  });
});