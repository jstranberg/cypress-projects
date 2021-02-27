import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import Transfer from './transferSteps.js'

Given ('I login as a user', () => {
    Transfer.login()
})

And ('I access the transfer funds tab', () => {
    Transfer.accessTransferTab()
})

When ('I fill out the transfer form', () => {
    Transfer.fillOutTransferForm()
})

And ('I verify and submit the transfer form', () => {
    Transfer.verifyTransferForm()
    Transfer.submitTransferForm()
})

Then ('I should receive a message that the transfer is complete', () => {
    Transfer.verifyTransferCompetion()
})
