describe('Currency exchange test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('JSESSIONID')
    })

    after(function () {
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('#logout_link').click()
    })

    it('should access the exchange tab', () => {
        cy.get('#pay_bills_tab').click()
        cy.url().should('include', 'pay-bills.html')
        cy.get('a').contains('Purchase Foreign Currency').click()
    });

    it('should fill in and submit exchange info', () => {
        cy.get('#pc_currency').select('AUD')
        cy.get('#pc_amount').type('1000')
        cy.get('#pc_inDollars_true').click()
        //cy.get('#pc__inDollars_false')
        cy.get('#pc_calculate_costs').click()
    });

    it('should verify the exchange rate is correct', () => {
        cy.get('#pc_conversion_amount').should('contain', '910.17 dollar (AUD) = 1000.00 U.S. dollar (USD)')
    });
})
