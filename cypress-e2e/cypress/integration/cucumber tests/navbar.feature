Feature: Navigation bar

    As a customer
        I am able to access different pages with the navbar
    
    Scenario: Use the navbar to visit the Homepage
        Given I am on the homepage
        When  I click on the "Home" Tab
        Then The page should reload

    Scenario: Use the navbar to visit the Online Banking Page
        Given I am on the homepage
        When  I click on the "Online Banking" Tab
        Then I should be taken to the Online Banking page

    Scenario: Use the navbar to visit the Feedback Page
        Given I am on the homepage
        When  I click on the "Feedback" Tab
        Then I should be taken to the Feedback page