describe('Navbar route check', () => {

    it('should visit the homepage', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('should check and verify online banking', () => {
        cy.get('#onlineBankingMenu')
            .click()
        cy.url()
            .should('include', '/online-banking.html')
        cy.get('h1')
            .contains('Online Banking')
    });

    it('should check and verify feedback', () => {
        cy.get('#feedback')
            .click()
        cy.url()
            .should('include', '/feedback.html')
        cy.get('h3')
            .contains('Feedback')
    });

})
