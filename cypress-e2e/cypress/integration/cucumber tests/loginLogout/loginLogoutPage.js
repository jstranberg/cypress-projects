import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginSteps.js'
import LogoutPage from './logoutSteps.js'

Given('I open the login page', () => {
    LoginPage.visit()
})

When ('I submit invalid credentials', ()=>{
    LoginPage.enterInvalidCredentials()
})

Then ('I am shown an error message', ()=>{
    LoginPage.confirmErrorMessage()
})

Given ('I open the login page', () => {
    LoginPage.visit()
})
When ('I submit valid credentials', () => {
    LoginPage.enterValidCredentials()
})

Then ('I am taken to the user homepage', () => {
    LoginPage.confirmLogin()
})


Given ('I am logged in as a valid user', () => {
    LogoutPage.visitUserHomepage()
})

When ('I logout of my account', () => {
    LogoutPage.clickLogoutButton()
})

Then ('I am taken to the homepage of the bank', () => {
    LogoutPage.confirmLogout()
})

