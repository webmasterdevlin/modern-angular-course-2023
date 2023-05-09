describe('End-to-end tests', function () {
  beforeEach(function () {
    cy.intercept('GET', '**/posts?_start=0&_limit=10', {
      statusCode: 200,
      body: [
        {
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        },
      ],
    }).as('getPosts');
  });

  it('Should be able to send a post request', function () {
    cy.visit('http://localhost:4200/');
    cy.findByRole('button', { name: 'posts 0' }).click();
    cy.get('#title').type('test title');
    cy.get('#body').type('test body');
    cy.findByRole('button', { name: 'Submit' }).click();

    cy.findAllByTestId('post-title').should('have.length', 3);
  });
});
