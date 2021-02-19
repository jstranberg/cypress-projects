class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }
    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }
    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }
}


describe('abstraction with classes', () => {
    before(function () {
        // runs before all tests inside this describe block
        // setup test data or test context. Seed or reset the db
        HomePage.loadHomePage()
    })

    after(function () {
        // runs after all tests in the describe block are done
        // good for test cleanup
        // clean cookies or local storage
    })

    beforeEach(function () {
        // runs before each 'it' block in the describe block
        // load some sort of data before each block
    })

    afterEach(function () {
        // runs after each 'it' block in the describe block
        // log some data after each 'it'
    })

    it('1st it', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    it('2nd it', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
})
