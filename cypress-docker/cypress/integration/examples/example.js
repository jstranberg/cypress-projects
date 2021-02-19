describe('Cypress test with Docker', () => {
    it('should viist a website', () => {
        cy.visit('https://www.udemy.com/certificate/UC-d2cf2cc8-3c35-4ced-a7dd-fe5989a53d90/')
        cy.url().should('include', 'd2cf2cc8')
    });
})
