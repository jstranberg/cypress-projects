describe('Make a payment', () => {
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

    it('should access pay tab', () => {
        cy.get('#pay_bills_tab').click()
        cy.url().should('include', 'pay-bills.html')
        cy.get('a').contains('Pay Saved Payee').click()
    });

    it('should send (fake) payment info', () => {
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('1000000')
        cy.get('#sp_date').type('2021-04-20 {enter}')
        cy.get('#sp_description').type('wow')
        cy.get('#pay_saved_payees').click()
    });

    it('should show success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted')
    });
})
