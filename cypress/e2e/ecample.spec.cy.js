describe('Prueba E2E de React App', () => {
  it('Carga la página principal y realiza una acción', () => {
    // Visita la página de la aplicación
    cy.visit('http://localhost:3000'); // Cambia la URL según la de tu aplicación

    // Verifica que el título de la página sea correcto
    cy.get('h1').should('contain', 'Fake Store');

    cy.contains('Mens Casual Premium Slim Fit T-Shirts').parent().contains('Ver Detalles').click();

    cy.url().should('include', '/products')

    cy.contains('Añadir al carrito').click()

    cy.contains('Carrito').click()

    // Verifica que la URL haya cambiado a la página del carrito o realiza una comprobación específica
    cy.url().should('include', '/carrito')

    cy.get('h2').should('contain', 'Mens Casual Premium Slim Fit T-Shirts');
  });
});