import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import Searchbox from './searchboxSteps.js'

Given('Any site visitor is on the homepage', () => {
    Searchbox.visit()
})

When ('they enter a search term into the search box', () => {
    Searchbox.enterSearchTerm()
})

Then ('they are taken to a search reseults page', () => {
    Searchbox.verifySearchResults()
})
