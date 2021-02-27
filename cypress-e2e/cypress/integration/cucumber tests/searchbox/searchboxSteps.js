class Searchbox {
    static visit(){
        cy.visit('/index.html')
    }

    static enterSearchTerm(){
        cy.get('#searchTerm').type('Seijin{enter}')
    }

    static verifySearchResults(){
        cy.get('h2').contains('Search Results')
    }
}

export default Searchbox