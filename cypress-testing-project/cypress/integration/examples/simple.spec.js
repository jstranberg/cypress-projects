describe('Browser actions', () => {
    it('should load correct url', () => {
        cy.visit('http://books.toscrape.com/index.html')
        cy.url().should('include', 'index.html')
        cy.log('Website loaded!')
    })

    it('should click on Travel Category', () => {
        cy.get('a')
            .contains('Travel')
            .click()

        cy.get('h1')
            .contains('Travel')
    })

    it('shoud display correct number of books', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq',11)
    })

    it('should click on Poetry Category', () => {
        cy.get('a')
            .contains('Poetry')
            .click()
    })

    it('should click on Olio', () => {
        cy.get('a')
            .contains('Olio')
            .click()

        cy.get('h1')
            .contains('Olio')
    })

    it('shoud display correct price', () => {
        cy.get('.price_color')
            .contains('23.88')
        })

})


