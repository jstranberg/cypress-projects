describe('Password reset test', () => {
    it('should access the login page', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button')
            .click()
        cy.url()
            .should('include', '/login.html')
    });

    it('should access the password reset page', () => {
        cy.get('a')
            .contains('Forgot your password')
            .click()
        cy.url()
            .should('include', '/forgot-password.html')
    });

    it('should submit the user_email', () => {
        cy.get('#user_email')
            .type('seijtranberg@gmail.com')
        cy.contains('Send Password')
            .click()
    });

    it('should confirm the password reset email was sent', () => {
        cy.get('h3')
            .contains('Forgotten Password')
        cy.url()
            .should('include', '/forgotten-password-send.html')
    });
})




