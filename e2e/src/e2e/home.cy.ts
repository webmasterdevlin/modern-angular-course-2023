describe('End-to-end tests', function () {
  it('Should have visible title message', function () {
    cy.visit('/');
    cy.get('h2').should('have.text', 'home');
  });
});
