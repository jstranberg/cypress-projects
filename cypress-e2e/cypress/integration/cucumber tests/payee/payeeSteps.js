const URL = '/index.html'
const PAYEE_NAME= 'payee_name'
const PAYEE_ADDRESS= '123 sweet street'
const PAYEE_ACCOUNT_NUMBER= '1234567890'
const PAYEE_DETAILS= 'payee_details'
// Put into static to dynamic sprint

class Payee {
    static accountLogin(){ 
        cy.visit(URL)
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
        Cypress.Cookies.preserveOnce('JSESSIONID')
    }

    static accessPayBillTab(){
        cy.get('#pay_bills_tab').click()
        cy.url().should('include', 'pay-bills.html')
        cy.get('a').contains('Add New Payee').click()
    }

    static enterNewPayeeInfo(){
        cy.get('#np_new_payee_name').type(PAYEE_NAME)
        cy.get('#np_new_payee_address').type(PAYEE_ADDRESS)
        cy.get('#np_new_payee_account').type(PAYEE_ACCOUNT_NUMBER)
        cy.get('#np_new_payee_details').type(PAYEE_DETAILS)
    }

    static submitNewPayeeForm(){
        cy.get('#add_new_payee').click()
    }

    static verifyNewPayee(){
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'The new payee payee_name was successfully created')

    }
}

export default Payee