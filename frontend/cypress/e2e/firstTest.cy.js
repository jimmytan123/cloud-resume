describe('Cloud Resume E2E Test', () => {
  it('renders the default elements on the screen', () => {
    cy.visit('/');

    cy.get('h1').should('exist').contains('Jimmy(Zhixi) Tan');
  });

  it('fetches and displays the correct view count from the API', () => {
    // API call mock
    cy.intercept('POST', Cypress.env('API_URL'), {
      statusCode: 200,
      body: { view_count: 1024 },
    }).as('updateCount'); // and assign an alias

    cy.visit('/');

    // Wait for the API call to complete
    cy.wait('@updateCount');

    // Verify the view count is displayed correctly
    cy.get('[data-testid="view_count"]').should('exist').contains('1024');
  });

  it('displays the error message if the API request fails', () => {
    // API call mock
    cy.intercept('POST', Cypress.env('API_URL'), {
      statusCode: 500,
    }).as('apiError'); // and assign an alias

    cy.visit('/');

    // Wait for the API call to complete
    cy.wait('@apiError');

    cy.wait(5000);

    cy.get('[data-testid="view_count"]').should('not.exist');
    // Check if the error message is displayed
    cy.get('p.error-message')
      .should('exist')
      .contains('Error in fetching view counts');
  });

  it('display the loading message when fetching the view count', () => {
    // API call mock
    cy.intercept('POST', Cypress.env('API_URL'), (req) => {
      req.reply({
        statusCode: 200,
        body: { view_count: 888 },
        delay: 3000, // Simulate a 3-second delay
      });
    }).as('updateCount');

    cy.visit('/');

    // Assert that the loading message shows up
    cy.get('p.loading-message').should('exist').contains('Loading');

    // Wait for the API to complete
    cy.wait('@updateCount');

    // Assert that the loading indicator disappears and the view count is displayed
    cy.get('p.loading-message').should('not.exist');
    cy.get('[data-testid="view_count"]').should('contain', '888');
  });
});
