$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buttons.feature");
formatter.feature({
  "line": 1,
  "name": "Setting radiobuttons checkboxes item in dropdown on a site",
  "description": "",
  "id": "setting-radiobuttons-checkboxes-item-in-dropdown-on-a-site",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Homepage should be opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsButtons.Homepage_should_be_opened()"
});
formatter.result({
  "duration": 14076762814,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Selecting item in a dropdown list",
  "description": "",
  "id": "setting-radiobuttons-checkboxes-item-in-dropdown-on-a-site;selecting-item-in-a-dropdown-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Navigate to \"adoption_link\" page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Select \"First day of the next week\" from dropdown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "adoption_link",
      "offset": 13
    }
  ],
  "location": "StepsButtons.Navigate_to_page(String)"
});
formatter.result({
  "duration": 304767720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First day of the next week",
      "offset": 8
    }
  ],
  "location": "TestroomSteps.Select_from_dropdown(String)"
});
formatter.result({
  "duration": 992248798,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Homepage should be opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsButtons.Homepage_should_be_opened()"
});
formatter.result({
  "duration": 372112221,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "#And Close browser"
    }
  ],
  "line": 11,
  "name": "Selecting information on a Contact page",
  "description": "",
  "id": "setting-radiobuttons-checkboxes-item-in-dropdown-on-a-site;selecting-information-on-a-contact-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Navigate to \"contact_link\" page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Enter valid data into contact form selected fields",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "contact_link",
      "offset": 13
    }
  ],
  "location": "StepsButtons.Navigate_to_page(String)"
});
formatter.result({
  "duration": 208140687,
  "status": "passed"
});
formatter.match({
  "location": "TestroomSteps.Enter_valid_data_into_contact_form_selected_fields()"
});
formatter.result({
  "duration": 2202220805,
  "status": "passed"
});
formatter.uri("testroom.feature");
formatter.feature({
  "line": 1,
  "name": "Correct page title",
  "description": "",
  "id": "correct-page-title",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Homepage should be opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsButtons.Homepage_should_be_opened()"
});
formatter.result({
  "duration": 497828073,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Check page title for Adoption page",
  "description": "",
  "id": "correct-page-title;check-page-title-for-adoption-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Navigate to \"adoption_link\" page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that title is \"Adoption\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "adoption_link",
      "offset": 13
    }
  ],
  "location": "StepsButtons.Navigate_to_page(String)"
});
formatter.result({
  "duration": 291195420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adoption",
      "offset": 22
    }
  ],
  "location": "TestroomSteps.Verify_that_title_is(String)"
});
formatter.result({
  "duration": 3126396,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Homepage should be opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsButtons.Homepage_should_be_opened()"
});
formatter.result({
  "duration": 1016440195,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "#And Close browser"
    }
  ],
  "line": 11,
  "name": "Check page title for About page",
  "description": "",
  "id": "correct-page-title;check-page-title-for-about-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Navigate to \"about_link\" page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify that title is \"About Zoo\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "about_link",
      "offset": 13
    }
  ],
  "location": "StepsButtons.Navigate_to_page(String)"
});
formatter.result({
  "duration": 350094677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Zoo",
      "offset": 22
    }
  ],
  "location": "TestroomSteps.Verify_that_title_is(String)"
});
formatter.result({
  "duration": 239258,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Homepage should be opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsButtons.Homepage_should_be_opened()"
});
formatter.result({
  "duration": 686041678,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#And Close browser"
    }
  ],
  "line": 16,
  "name": "Check page title for Contact page",
  "description": "",
  "id": "correct-page-title;check-page-title-for-contact-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Navigate to \"contact_link\" page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Verify that title is \"Contact\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "contact_link",
      "offset": 13
    }
  ],
  "location": "StepsButtons.Navigate_to_page(String)"
});
formatter.result({
  "duration": 239280840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 22
    }
  ],
  "location": "TestroomSteps.Verify_that_title_is(String)"
});
formatter.result({
  "duration": 190509,
  "status": "passed"
});
});