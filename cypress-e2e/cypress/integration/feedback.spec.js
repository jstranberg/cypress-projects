describe('Navbar route check', () => {

    it('should visit the homepage', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('should access and verify feedback', () => {
        cy.get('#feedback')
            .click()
        cy.url()
            .should('include', '/feedback.html')
        cy.get('h3')
            .contains('Feedback')
    });

    it('should fill out the feedback form', () => {
        cy.get('#name')
            .type('sometext')
        cy.get('#email')
            .type('sometext@email.com')
        cy.get('#subject')
            .type('sometext')
        cy.get('#comment')
            .type('sometext')
    });

    it('should submit the form and verify submission', () => {
        cy.contains('Send Message')
            .click()
        cy.url()
            .should('include', '/sendFeedback.html')
        cy.get('#feedback-title')
            .contains('Feedback')
    });
})


