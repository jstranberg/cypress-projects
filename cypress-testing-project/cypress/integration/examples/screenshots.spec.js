describe('Screenshots', () => {
    it('should take a full page screenshot', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: 'fullPage'})
    })

    it('should take an element screenshot', () => {
        cy.get('header').screenshot()
        cy.get('#populate').screenshot()
    })
})
