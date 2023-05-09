describe('End-to-end tests', function () {
  beforeEach(function () {
    cy.intercept('GET', '**/todos', {
      statusCode: 200,
      body: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
      ],
    }).as('getTodos');
  });

  it('Should get list of todos', function () {
    cy.visit('http://localhost:4200/');
    cy.findByRole('button', { name: 'todos 0' }).click();

    cy.contains('delectus aut autem').should('be.visible');
    cy.contains('quis ut nam facilis et officia qui').should('be.visible');
  });
});
