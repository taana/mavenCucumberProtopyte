package com.cucumber.mavenCucumberProtopyte;



import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class StepsButtons {
	private WebDriverSingleton automation = WebDriverSingleton.getInstance();
	//private WebDriver driver;
//WebDriver driver = null;


@Given("^Homepage should be opened$")
public void Homepage_should_be_opened() throws Throwable {
	 automation.openBrowser();
	automation.openBrowser().get("http://www.thetestroom.com/webapp/index.html");
	automation.openBrowser().manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
}	

@When("^Navigate to \"([^\"]*)\" page$")
	public void Navigate_to_page(String link) throws Throwable {
		//driver.findElement(By.id(link.toLowerCase() + "_link")).click();
	    automation.openBrowser().findElement(By.id(link)).click();
}
public void closeWebBrowser(){
	automation.closeBrowser();
}

	//@After()
	//public void close(){
		//automation.closeBrowser();
	

	@And("^Close browser$")
	public void Close_browser() throws Throwable {
		closeWebBrowser();
	}

}


