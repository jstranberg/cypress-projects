const LOGIN_URL = '/index.html'
const DESCRIPTION = 'test_text'
const FROM_DATE = '2020-01-01 {enter}'
const TO_DATE = '2021-01-01 {enter}'
const FROM_AMOUNT = '0'
const TO_AMOUNT = '1000'
const TYPE = 'DEPOSIT'
//consider creating fixtures and commands to make filter params dynamic

class Filter {
    static login(){
        cy.visit(LOGIN_URL)
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
        Cypress.Cookies.preserveOnce('JSESSIONID')
    }

    static accessExchangeTab(){
        cy.get('#account_activity_tab').click()
        cy.url().should('include', 'account-activity.html')
        cy.get('a').contains('Find Transactions').click()
    }

    static submitCompletedFilterForm(){
        cy.get('#aa_description').type(DESCRIPTION)
        cy.get('#aa_fromDate').type(FROM_DATE)
        cy.get('#aa_toDate').type(TO_DATE)
        cy.get('#aa_fromAmount').type(FROM_AMOUNT)
        cy.get('#aa_toAmount').type(TO_AMOUNT)
        cy.get('#aa_type').select(TYPE)
        cy.get('button[type="submit"]').click()
    }

    static verifyFilterResults(){
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('length').should('be.gt', 0)
    }
}

export default Filter