import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import Navbar from './navbarSteps.js'

    Given ('I am on the homepage', () => {
        Navbar.visitHomepage()
    })

    When  ('I click on the "Home" Tab', () => {
        Navbar.accessHomeTab()
    })

    Then ('The page should reload', () => {
        Navbar.verifyHomeTab()
    })


    Given ('I am on the homepage', () => {
        Navbar.visitHomepage()
    })

    When  ('I click on the "Online Banking" Tab', () => {
        Navbar.accessOnlineBankingTab()
    })

    Then ('I should be taken to the Online Banking page', () => {
        Navbar.verifyOnlineBankingTab()
    })


    Given ('I am on the homepage', () => {
        Navbar.accessHomeTab()
    })

    When  ('I click on the "Feedback" Tab', () => {
        Navbar.accessFeedbackTab()
    })

    Then ('I should be taken to the Feedback page', () => {
        Navbar.verifyFeedbackTab()
    })
