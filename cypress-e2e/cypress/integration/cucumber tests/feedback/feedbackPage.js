import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackSteps.js'

Given('I open the feedback page', () => {
    FeedbackPage.visit()
})

When('I fill out the feedback form', () => {
    FeedbackPage.fillFeedbackForm()
})

And('I click on the submit button', () => {
    FeedbackPage.submitFeedbackForm()
})

Then('I see the feedback confirmation page', () => {
    FeedbackPage.confirmFormSubmission()
})