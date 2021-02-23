Feature: Password reset

    As a customer
        I can reset my password
    
    Scenario: Reset the users password
    Given I access the login page
    And I access the password reset page
    When I submit some text
    Then I am taken to the page confirming a password reset email was sent

    #This test can be improved by testing for error conditions (non-valid email)
    # It is not possible on this website, but good for future practice.