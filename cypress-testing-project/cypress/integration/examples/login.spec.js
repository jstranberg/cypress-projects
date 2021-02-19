describe('Working with inputs', () => {

    it('should override the current time', () => {
        const date = new Date(2021, 4, 20).getTime()
        cy.clock(date)
        cy.log(date)
    })
    it('should load the login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('your Item', {log: true})
        cy.title().should('include', 'Zero - Log in')
    })

    it('should fill username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Some invalid name')
    })

    it('should fill password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Some invalid password')
    })

    it('should mark checkbox', () =>{
        cy.get('input[type="checkbox"]').click()
    })

    it('should submit the form', () =>{
        cy.contains('Sign in').click()
    })

    it('should display an error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong.')
    })
})
