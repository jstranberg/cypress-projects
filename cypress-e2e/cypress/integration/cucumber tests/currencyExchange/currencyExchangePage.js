import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import CurrencyExchange from './currencyExchangeSteps.js'


Given ('I am logged as a valid user', () => {
    CurrencyExchange.userLogin()
})

And ('I access the exchange tab', () => {
    CurrencyExchange.accessExchangeTab()
})
When ('I submit a complete currency exchange form', () => {
    CurrencyExchange.fillExchangeForm()
})
Then ('the exchange should be correct', () => {
    CurrencyExchange.verifyExchangeRate()
})

Given ('correct exchange calculation', () => {
    CurrencyExchange.verifyExchangeRate() //not sure what to put here
})
When ('I submit the form with the correct calculation', () => {
    CurrencyExchange.purchaseForeignCurrency()
})
Then ('I get the message Foreign currency cash was successfully purchased', () => {
    CurrencyExchange.verifyCurrencyPurchase()
})