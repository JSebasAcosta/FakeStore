import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BarraNav from './components/barranav';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

describe('BarraNav', () => {
  it('muestra el first name y last name del usuario', async () => {
    render(
        <MemoryRouter>
          <BarraNav />
        </MemoryRouter>
      );

    
    await waitFor(() => {
        const firstNameElement = screen.getByText(/wh/i);
        return firstNameElement;
      });

    
    const firstNameElement = screen.getByText(/wh/i);

    expect(firstNameElement).toBeInTheDocument();
    
  });
});
