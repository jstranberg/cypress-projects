Feature: Login and Logout

    As an invalid user
        I am unable to login to the web portal
    As a valid user
        I am able to login and logout of my account
    
    Scenario: An invalid user enters credentials
        Given I open the login page 
        When I submit invalid credentials
        Then I am shown an error message 

    Scenario: A valid user enters credentials
        Given I open the login page
        When I submit valid credentials
        Then I am taken to the user homepage

    Scenario: A logged in user logs out
        Given I am logged in as a valid user
        When I logout of my account
        Then I am taken to the homepage of the bank