import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import Payee from './payeeSteps.js'

Given ('I log in to my account', () => {
    Payee.accountLogin()
})

And ('I access the "Pay Bills" tab', () => {
    Payee.accessPayBillTab()
})

When ('I enter new Payee information', () => {
    Payee.enterNewPayeeInfo()
})

And ('submit the new payee form', () => {
    Payee.submitNewPayeeForm()
})

Then ('I am shown a confirmation message that the new payee was added', () => {
    Payee.verifyNewPayee()
})
