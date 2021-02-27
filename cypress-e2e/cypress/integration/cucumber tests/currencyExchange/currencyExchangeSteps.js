const LOGIN_URL = '/index.html'
const SIGNIN_BUTTON = '#signin_button'
const PAY_BILLS_TAB = '#pay_bills_tab'
const PAY_BILLS_URL = 'pay-bills.html'
const USD_AMOUNT = '1000'
const CURRENCY_TYPE = 'AUD'
const FOREIGN_AMOUNT = '910.17'


class CurrencyExchange {
    static userLogin(){
        cy.visit(LOGIN_URL)
        cy.get(SIGNIN_BUTTON).click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
    
        Cypress.Cookies.preserveOnce('JSESSIONID')
    
    }

    static accessExchangeTab(){
        cy.get(PAY_BILLS_TAB).click()
        cy.url().should('include', PAY_BILLS_URL)
        cy.get('a').contains('Purchase Foreign Currency').click()
    }

    static fillExchangeForm(){
        cy.get('#pc_currency').select(CURRENCY_TYPE)
        cy.get('#pc_amount').type(USD_AMOUNT)
        cy.get('#pc_inDollars_true').click()
        //cy.get('#pc__inDollars_false')
        cy.get('#pc_calculate_costs').click()
    }

    static verifyExchangeRate() {
        cy.get('#pc_conversion_amount').should('contain', `${FOREIGN_AMOUNT} dollar (${CURRENCY_TYPE}) = ${USD_AMOUNT}.00 U.S. dollar (USD)`)
    }

    static purchaseForeignCurrency() {
        cy.get('#purchase_cash').click()
    }

    static verifyCurrencyPurchase(){
        cy.get('#alert_content').should('be.visible')
        cy.url().should('include', '/bank/pay-bills.html')
}
}

// LOTOUT FUNCTION
// after(function () {
//     cy.get(':nth-child(3) > .dropdown-toggle').click()
//     cy.get('#logout_link').click()
// })

export default CurrencyExchange