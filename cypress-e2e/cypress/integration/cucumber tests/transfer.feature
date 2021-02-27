Feature: Transfer money

    As a customer
        I can transfer money
    
    Scenario: Submit a transfer form successfully
    Given I login as a user
    And I access the transfer funds tab
    When I fill out the transfer form
    And I verify and submit the transfer form
    Then I should receive a message that the transfer is complete