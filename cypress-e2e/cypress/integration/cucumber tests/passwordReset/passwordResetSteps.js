const URL = '/index.html'
const USER_EMAIL = 'user@email.com'

class PasswordReset {
    static accessLoginPage() {
        cy.visit(URL)
        cy.get('#signin_button')
            .click()
        cy.url()
            .should('include', '/login.html')
    }

    static accessPwResetPage(){
        cy.get('a')
            .contains('Forgot your password')
            .click()
        cy.url()
            .should('include', '/forgot-password.html')
    }

    static submitPwResetForm() {
        cy.get('#user_email')
            .type(USER_EMAIL)
        cy.contains('Send Password')
            .click()
    }

    static verifyPwResetEmail(){
        cy.get('h3')
            .contains('Forgotten Password')
        cy.url()
            .should('include', '/forgotten-password-send.html')
    }

}

export default PasswordReset