describe('Visual Regression Test with Percy and Cypress', () => {
    it('should take percy snapshot', () => {
        cy.visit('https://www.example.com')
        cy.wait(1000)
        cy.percySnapshot()
    })
})
