class Navbar {
    static visitHomepage(){
        cy.visit('/index.html')
    }

    static accessHomeTab(){
        cy.get('#homeMenu')
            .click()
    }

    static verifyHomeTab(){
        cy.url()
            .should('include', '/index.html')
    }

    static accessOnlineBankingTab(){
        cy.get('#onlineBankingMenu')
            .click()
    }

    static verifyOnlineBankingTab(){
        cy.url()
            .should('include', '/online-banking.html')
        cy.get('h1')
            .contains('Online Banking')
    }

    static accessFeedbackTab(){
        cy.get('#feedback')
            .click()
    }

    static verifyFeedbackTab(){
        cy.url()
            .should('include', '/feedback.html')
        cy.get('h3')
            .contains('Feedback')
    }
}

export default Navbar