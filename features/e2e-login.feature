Feature: E2E Test - Login

Scenario: Login failure with invalid credentials
    Given I visit the login page
    When I submit invalid credentials
    Then I confirm that the login fails

Scenario: Login success with valid credentials
    Given I visit the login page
    When I submit valid credentials
    Then I confirm that the login is a success