import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import Filter from './filterSteps.js'

Given ('I am logged in as a valid user', ()=> {
    Filter.login()
})

When  ('I access the exchange tab', ()=> {
    Filter.accessExchangeTab()
})

And ('fill out the Filter form', ()=> {
    Filter.submitCompletedFilterForm()
})

Then ('the filtered transactions should be greater than 0', ()=> {
    Filter.verifyFilterResults()
})