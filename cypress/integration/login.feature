Feature: user can log in
    Scenario: user can log in account
        Given the user has a valid account
        Then the clicks on sign in
        And enters email
        And enters password
        And clicks sign in
        Then the user is successfully logged in

    Scenario: A user can not create an account with a duplicate email

        Given The user is on Homepage
        When the user clicks on Sign in
        And user enters a duplicate email
        And User Clicks create an account
        Then the system shows an error