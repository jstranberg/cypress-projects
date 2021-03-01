import {defineStep} from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} milliseconds', time => {
    cy.wait(time)
})

defineStep('I see {string} in the title', title  => {
    cy.title().should('include', title)
})

defineStep('I see {string} in the url', url  => {
    cy.url().should('include', url)
})

defineStep('I reload the browser', () => {
    cy.reload()
})