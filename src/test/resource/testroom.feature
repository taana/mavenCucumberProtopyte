Feature: Correct page title

  Background: 
    Given Homepage should be opened

  Scenario: Check page title for Adoption page
    When Navigate to "adoption_link" page
    Then Verify that title is "Adoption"
    #And Close browser

  Scenario: Check page title for About page
    When Navigate to "about_link" page
    Then Verify that title is "About Zoo"
    #And Close browser

  Scenario: Check page title for Contact page
    When Navigate to "contact_link" page
    Then Verify that title is "Contact"
    #And Close browser
