Feature: Filter transactions

    As a customer
        I can filter my transactions
    
    Scenario: Use the filter box in my account
    Given I am logged in as a valid user
    When  I access the exchange tab
        And fill out the Filter form
    Then the filtered transactions should be greater than 0

    # Examples:
    #     | Description | From Date    | To Date    | From Amount| To Amount
    #     | Full Year   | 2020-01-01   |2021-01-01  |    0       | 1000
    #     | Full Month  | 2020-01-01   |2020-02-01  |    0       | 1000
    #     | Full Day    | 2020-01-01   |2020-01-02  |    0       | 1000