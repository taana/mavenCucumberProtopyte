package com.cucumber.mavenCucumberProtopyte;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WebDriverSingleton {
 private static WebDriverSingleton instance= null;
  private WebDriver driver;
 private WebDriver Mozilla = null;
 
   private WebDriverSingleton(){
}
   
   public WebDriver openBrowser(){
	   if(Mozilla==null){
		   driver =new FirefoxDriver();
		   Mozilla= driver;
	   }
	   else if(Mozilla!= null){
		   driver=Mozilla;
		   
	   }
	   driver.manage().window().maximize();
	   return driver;
	   
   }
   public static WebDriverSingleton getInstance(){
	   if(instance == null){
		   instance= new WebDriverSingleton();
	   }
	return instance;
   }
   public void closeBrowser(){
	   if(driver!=null)
		  driver.quit();
	   } 
	   
	   }
   


