describe('Use the searchbox and validate functionality', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should type into search box and submit by pressing enter', () => {
        cy.get('#searchTerm').type('Seijin{enter}')
    })

    it('should show the search results page', () => {
        cy.get('h2').contains('Search Results')
    })
})
