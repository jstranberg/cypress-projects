Feature: Add a payee

    As a customer
        I can add someone to pay into my account
    
    Scenario: Submit a payee form
    Given I log in to my account
        And I access the "Pay Bills" tab
    When I enter new Payee information
        And submit the new payee form
    Then I am shown a confirmation message that the new payee was added