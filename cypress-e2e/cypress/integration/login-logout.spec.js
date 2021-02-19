describe('Authentication testing', () => {
    it('should access the login page', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url()
            .should('include', 'index.html')
        cy.get('#signin_button')
            .click()
        cy.url()
            .should('include', '/login.html')

    });

    it('should enter incorrect login information', () => {
        cy.login('invalid username', 'invalid password')
    });

    it('should display an error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong.')
    });

    it('should enter correct login information', () => {
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd

            cy.login(username, password)
        })
    })
});

it('should check the user successfully logged in', () => {
    cy.url().should('include', 'account-summary.html')
    cy.get('ul.nav-tabs').should('be.visible')
});

it('should log the user out', () => {
    cy.contains('username').click()
    cy.get('#logout_link').click()
});

it('should verify the user has logged out', () => {
    cy.url()
        .should('include', 'index.html')
});
