const URL = 'http://zero.webappsecurity.com/index.html'
const PAYMENT_PAYEE = 'wellsfargo'
const PAYMENT_ACCOUNT = 'Credit Card'
const PAYMENT_AMOUNT = '1000000'
const PAYMENT_DATE = '2021-04-20 {enter}'
const PAYMENT_DESCRIPTION = 'wow'

class Payment {
    static login() {
        cy.visit(URL)
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
        Cypress.Cookies.preserveOnce('JSESSIONID')
    }

    static accessPaymentsTab() {
        cy.get('#pay_bills_tab').click()
        cy.url().should('include', 'pay-bills.html')
        cy.get('a').contains('Pay Saved Payee').click()
    }

    static enterTestPaymentInfo() {
        cy.get('#sp_payee').select(PAYMENT_PAYEE)
        cy.get('#sp_account').select(PAYMENT_ACCOUNT)
        cy.get('#sp_amount').type(PAYMENT_AMOUNT)
        cy.get('#sp_date').type(PAYMENT_DATE)
        cy.get('#sp_description').type(PAYMENT_DESCRIPTION)
    }

    static submitTestPaymentInfo() {
        cy.get('#pay_saved_payees').click()
    }

    static verification() {
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted')
    }
}

export default Payment