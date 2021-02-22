const LOGOUT_BUTTON = '#logout_link'
const HOMEPAGE_URL = 'http://zero.webappsecurity.com/bank/account-summary.html'

class LogoutPage {
    static visitUserHomepage () {
        cy.url().should('include', HOMEPAGE_URL)
    }
    
    static clickLogoutButton (){
        cy.contains('username').click()
        cy.get(LOGOUT_BUTTON).click()
    }

    static confirmLogout () {
        cy.url()
        .should('include', 'index.html')
    }
}

export default LogoutPage