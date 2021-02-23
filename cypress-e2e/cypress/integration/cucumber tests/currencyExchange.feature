Feature: Exchange Currency

    As a customer
        I can exchange my Currency
    
    Scenario: Calculate currency exchange rate
    Given I am logged as a valid user
        And I access the exchange tab
    When I submit a complete currency exchange form
    Then the exchange should be correct

    Scenario: Submit currency exchange form
    Given correct exchange calculation
    When I submit the form with the correct calculation
    Then I get the message Foreign currency cash was successfully purchased
