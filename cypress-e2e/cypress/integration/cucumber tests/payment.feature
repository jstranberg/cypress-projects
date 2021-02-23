Feature: Make a payment

    As a customer
        I can pay a payee
    
    Scenario: Submit a form to pay
    Given I log into my account
    And I access the "Pay" tab
    When I fill out test payment information
    And I submit the payment information
    Then I should see a notification that the payment was successful