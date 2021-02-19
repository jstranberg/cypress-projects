describe('Transfer funds test', () => {
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

    it('should access the transfer funds tab', () => {
        cy.get('#transfer_funds_tab').click()
        cy.url().should('include', 'transfer-funds.html')
    });

    it('should fill out the transfer form', () => {
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('4')
        cy.get('#tf_amount').type('1000000')
        cy.get('#tf_description').type('wow')
        cy.get('#btn_submit').click()
    });

    it('should verify data and submit', () => {
        cy.url().should('include', '/transfer-funds-verify.html')
        cy.get('#tf_fromAccountId').should('have.value', 'Checking')
        cy.get('#tf_toAccountId').should('have.value', 'Loan')
        cy.get('#tf_amount').should('have.value', '1000000')
        cy.get('#btn_submit').click()
    });

    it('should verify the transfer is complete', () => {
        cy.url().should('include', '/transfer-funds-confirm.html')
        cy.get('#transfer_funds_content').should('be.visible').and('contain', 'You successfully submitted your transaction.')
    });
})