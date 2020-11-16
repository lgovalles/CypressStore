Feature: User Creates an account

    Scenario: User can create an account

        Given The user is on Homepage
        When the user clicks on Sign in
        And user enters email
        And User Clicks create an account
        And User fills sign up form
        And user clicks register
        Then the user is taken my account page

    Scenario: user can log in account
        Given the user has a valid account
        Then the clicks on sign in
        And enters email
        And enters password
        And clicks sign in
        Then the user is successfully logged in