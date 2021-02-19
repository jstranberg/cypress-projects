describe('Filter test', () => {
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
        cy.get('#account_activity_tab').click()
        cy.url().should('include', 'account-activity.html')
        cy.get('a').contains('Find Transactions').click()
    });

    it('should fill out filter form', () => {
        cy.get('#aa_description').type('test_text')
        cy.get('#aa_fromDate').type('2020-01-01 {enter}')
        cy.get('#aa_toDate').type('2021-01-01 {enter}')
        cy.get('#aa_fromAmount').type('0')
        cy.get('#aa_toAmount').type('1000')
        cy.get('#aa_type').select('DEPOSIT')
        cy.get('button[type="submit"]').click()
    });

    it('should verify filter results', () => {
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('length').should('be.gt', 0)
    });
})