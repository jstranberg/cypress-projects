Feature: Search the website

    As a site visitor
        I can search the website
    
    Scenario: Search the website with a term
    Given Any site visitor is on the homepage
    When  they enter a search term into the search box
    Then they are taken to a search reseults page