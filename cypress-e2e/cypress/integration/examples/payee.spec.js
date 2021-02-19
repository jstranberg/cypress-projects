describe('New Payee Test', () => {
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


    it('should access new payee', () => {
        cy.get('#pay_bills_tab').click()
        cy.url().should('include', 'pay-bills.html')
        cy.get('a').contains('Add New Payee').click()
    });

    it('should enter and submit payee information', () => {
        cy.get('#np_new_payee_name').type('payee_name')
        cy.get('#np_new_payee_address').type('123 sweet street')
        cy.get('#np_new_payee_account').type('1234567890')
        cy.get('#np_new_payee_details').type('payee_details')
        cy.get('#add_new_payee').click()
    });

    it('should confirm new payee info', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'The new payee payee_name was successfully created')
    });
})
