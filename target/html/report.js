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
  "duration": 10058142995,
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
formatter.step({
  "line": 9,
  "name": "Close browser",
  "keyword": "And "
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
  "duration": 309850518,
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
  "duration": 868536175,
  "status": "passed"
});
formatter.match({
  "location": "StepsButtons.Close_browser()"
});
formatter.result({
  "duration": 725906103,
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
  "duration": 1228364,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: The FirefoxDriver cannot be used after quit() was called.\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027TDemeniuk-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:843)\r\n\tat com.cucumber.mavenCucumberProtopyte.WebDriverSingleton.openBrowser(WebDriverSingleton.java:22)\r\n\tat com.cucumber.mavenCucumberProtopyte.StepsButtons.Homepage_should_be_opened(StepsButtons.java:24)\r\n\tat ✽.Given Homepage should be opened(buttons.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
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
formatter.step({
  "line": 14,
  "name": "Close browser",
  "keyword": "And "
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
  "status": "skipped"
});
formatter.match({
  "location": "TestroomSteps.Enter_valid_data_into_contact_form_selected_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepsButtons.Close_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 622200,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: The FirefoxDriver cannot be used after quit() was called.\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027TDemeniuk-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:843)\r\n\tat com.cucumber.mavenCucumberProtopyte.WebDriverSingleton.openBrowser(WebDriverSingleton.java:22)\r\n\tat com.cucumber.mavenCucumberProtopyte.StepsButtons.Homepage_should_be_opened(StepsButtons.java:24)\r\n\tat ✽.Given Homepage should be opened(testroom.feature:4)\r\n",
  "status": "failed"
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
formatter.step({
  "line": 9,
  "name": "Close browser",
  "keyword": "And "
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepsButtons.Close_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 656197,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: The FirefoxDriver cannot be used after quit() was called.\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027TDemeniuk-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:843)\r\n\tat com.cucumber.mavenCucumberProtopyte.WebDriverSingleton.openBrowser(WebDriverSingleton.java:22)\r\n\tat com.cucumber.mavenCucumberProtopyte.StepsButtons.Homepage_should_be_opened(StepsButtons.java:24)\r\n\tat ✽.Given Homepage should be opened(testroom.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
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
formatter.step({
  "line": 14,
  "name": "Close browser",
  "keyword": "And "
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepsButtons.Close_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 649140,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: The FirefoxDriver cannot be used after quit() was called.\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027TDemeniuk-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:843)\r\n\tat com.cucumber.mavenCucumberProtopyte.WebDriverSingleton.openBrowser(WebDriverSingleton.java:22)\r\n\tat com.cucumber.mavenCucumberProtopyte.StepsButtons.Homepage_should_be_opened(StepsButtons.java:24)\r\n\tat ✽.Given Homepage should be opened(testroom.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
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
formatter.step({
  "line": 19,
  "name": "Close browser",
  "keyword": "And "
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepsButtons.Close_browser()"
});
formatter.result({
  "status": "skipped"
});
});