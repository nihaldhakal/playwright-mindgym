Feature: User Login
    Scenario: User Login
        Given I am on the login page
        When I enter my credentials
        And I complete the login page
        Then I should be logged in successfully
        