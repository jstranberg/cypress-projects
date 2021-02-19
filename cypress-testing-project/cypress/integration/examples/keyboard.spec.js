describe('keyboard press simulation', () => {
    it('should submit searchbox by hitting ENTER', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('Seijin {enter}')
    })
})
