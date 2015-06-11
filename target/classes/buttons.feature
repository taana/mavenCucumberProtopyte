Feature: Setting radiobuttons checkboxes item in dropdown on a site

  Background: 
    Given Homepage should be opened

  Scenario: Selecting item in a dropdown list
    When Navigate to "adoption_link" page
    Then Select "First day of the next week" from dropdown
    #And Close browser

  Scenario: Selecting information on a Contact page
    When Navigate to "contact_link" page
    Then Enter valid data into contact form selected fields
    #And Close browser
