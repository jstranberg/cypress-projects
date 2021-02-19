describe('Write and Read data to JSON or text file', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', {name:"Mike", age: 27})
    })

    it('should write data into text file', () => {
        cy.writeFile('log.txt', "Hello world")
    })

    it('should read data from JSON', () => {
        cy.readFile('log.json')
            .its('age')
            .should('eq', 27)
    })

    it('should read data from text file', () => {
        cy.readFile('log.txt')
            .should('eq', 'Hello world')
    })

    it('should read and verify browser document content', () => {
        cy.visit('https://www.example.com')
        cy.wait(2000)
        cy.document()
            .its('contentType')
            .should('eq', 'text/html')

        cy.document()
            .should('have.property', 'charset')
            .and('eq', 'UTF-8')
    })
})
