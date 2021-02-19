Feature: Send Feedback

    As a customer
    I can send my feedback through a form

    Scenario: Submit feedback form
    Given I open the feedback page
    When I fill out the feedback form
        And I click on the submit button
    Then I see the feedback confirmation page