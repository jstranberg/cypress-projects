class Transfer {
    static login(){
        cy.visit('/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.login(username, password)
        })
        Cypress.Cookies.preserveOnce('JSESSIONID')
    }

    static accessTransferTab(){
        cy.get('#transfer_funds_tab').click()
        cy.url().should('include', 'transfer-funds.html')
    }

    static fillOutTransferForm(){
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('4')
        cy.get('#tf_amount').type('1000000')
        cy.get('#tf_description').type('wow')
        cy.get('#btn_submit').click()
    }

    static verifyTransferForm(){
        cy.url().should('include', '/transfer-funds-verify.html')
        cy.get('#tf_fromAccountId').should('have.value', 'Checking')
        cy.get('#tf_toAccountId').should('have.value', 'Loan')
        cy.get('#tf_amount').should('have.value', '1000000')
    }

    static submitTransferForm(){
        cy.get('#btn_submit').click()
    }

    static verifyTransferCompetion(){
        cy.url().should('include', '/transfer-funds-confirm.html')
        cy.get('#transfer_funds_content').should('be.visible').and('contain', 'You successfully submitted your transaction.')
    }
}

export default Transfer