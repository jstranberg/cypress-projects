const LOGIN_URL = '/login.html'
const INVALID_USERNAME = 'invalid_username'
const INVALID_PASSWORD = 'invalid_password'


class LoginPage {
    static visit(){
        cy.visit(LOGIN_URL)
        cy.url()
            .should('include', '/login.html')
    }

    static enterInvalidCredentials(){
        cy.login(INVALID_USERNAME, INVALID_PASSWORD)
    }

    static confirmErrorMessage(){
        cy.get('.alert')
            .should('be.visible')
            .and('contain', "Login and/or password are wrong.")
    }

    static enterValidCredentials(){
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd

        cy.login(username, password)
        })
    }

    static confirmLogin(){
        cy.url().should('include', 'account-summary.html')
        cy.get('ul.nav-tabs').should('be.visible')
    }
}
export default LoginPage
