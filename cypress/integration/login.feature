Feature: user can log in
    Scenario: user can log in account
        Given the user has a valid account
        Then the clicks on sign in
        And enters email
        And enters password
        And clicks sign in
        Then the user is successfully logged in