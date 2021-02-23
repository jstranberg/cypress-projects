import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import Payment from './paymentSteps.js'

Given ('I log into my account', () => {
    Payment.login()
})

And ('I access the "Pay" tab', () => {
    Payment.accessPaymentsTab()
})

When ('I fill out test payment information', () => {
    Payment.enterTestPaymentInfo()
})

And ('I submit the payment information', () => {
    Payment.submitTestPaymentInfo()
})

Then ('I should see a notification that the payment was successful', () => {
    Payment.verification()
})
