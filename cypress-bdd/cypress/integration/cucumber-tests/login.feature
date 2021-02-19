Feature: Login to Application

    As an invalid user
    I cannot login to the Application
    As a valid user
    I want to login to the Application

    Scenario: Invalid Login
        Given I open the login page
            And I want to wait 2000 milliseconds
            And I see "Zero - Log in" in the title
            And I see "/login" in the url
        When I fill the username with 'invalid_username'
            And I fill password with 'invalid_password'
            And I click on submit login
        Then I should see an error message

    Scenario: Valid Login
        Given I open the login page
        When I fill the username with 'username'
            And I fill password with 'password'
            And I click on submit login
        Then I am taken to the user homepage 
            And I see "/bank" in the url