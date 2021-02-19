import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage.js'

Given('I open the login page', () => {
    //cy.visit('http://zero.webappsecurity.com/login.html')
    LoginPage.visit()
})

// When('I submit login creds', () => {
//     LoginPage.fillUsername('username')
//     LoginPage.fillPassword('password')
//     LoginPage.submit()
//     // cy.get('#user_login').type('username')
//     // cy.get('#user_password').type('password')
//     // cy.get('#user_remember_me').click()
//     // cy.get('input[name="submit"]').click()
// })

When('I fill the username with {string}', username => {
    LoginPage.fillUsername(username)
})

And('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})

And('I click on submit login', () => {
    LoginPage.submit()
})

Then('I am taken to the user homepage', () => {
    cy.url().should('include', 'bank/account-summary.html')
    cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see an error message', () => {
    LoginPage.shouldShowErrorMessage()
})