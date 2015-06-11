package com.cucumber.mavenCucumberProtopyte;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Then;


public class TestroomSteps {

	private WebDriverSingleton automation = WebDriverSingleton.getInstance();

	
	@Then("^Verify that title is \"([^\"]*)\"$")
	public void Verify_that_title_is(String title) throws Throwable {
	Assert.assertTrue(title, true);
		//Assert.assertEquals(driver.getTitle(), title);
	}
	@Then("^Select \"([^\"]*)\" from dropdown$")
	public void Select_from_dropdown(String dropItem) throws Throwable {
Select dropDown= new Select(automation.openBrowser().findElement(By.id("start_select")));
dropDown.selectByVisibleText(dropItem);
	}

	@Then("^Enter valid data into contact form selected fields$")
	public void Enter_valid_data_into_contact_form_selected_fields() throws Throwable {
	  automation.openBrowser().findElement(By.name("name_field")).sendKeys("Tania");
	  automation.openBrowser().findElement(By.id("rinfo")).click();
	  automation.openBrowser().findElement(By.id("cdona")).click();
	}
	}

