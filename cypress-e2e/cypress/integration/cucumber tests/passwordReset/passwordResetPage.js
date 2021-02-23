import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import PasswordReset from './passwordResetSteps.js'

Given ('I access the login page', () => {
    PasswordReset.accessLoginPage()
})

And ('I access the password reset page', () => {
    PasswordReset.accessPwResetPage()
})

When ('I submit some text', () => {
    PasswordReset.submitPwResetForm()
})

Then ('I am taken to the page confirming a password reset email was sent', () => {
    PasswordReset.verifyPwResetEmail()
})
