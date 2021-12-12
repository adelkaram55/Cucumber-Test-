package cucumberJava; 

import org.openqa.selenium.By; 
import org.openqa.selenium.Keys; 
import org.openqa.selenium.WebDriver; 
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import cucumber.annotation.en.Given; 
import cucumber.annotation.en.Then; 
import cucumber.annotation.en.When; 

public class CucumberJava { 
   WebDriver driver = null; 
   
   @Given("^User opens the browser$") 
   public void openBrowser() { 
	  System.setProperty("webdriver.gecko.driver", "drivers/geckodriver");
      driver = new FirefoxDriver(); 
   } 
	
   @When("^User inserts text within search and selects enter$") 
   public void goToFacebook() { 
      driver.navigate().to("https://www.google.com/en"); 
      driver.findElement(By.name("q")).sendKeys("Google");
      driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
   } 
	
   @Then("^Google search should directs me to result page$") 
   public void loginButton() { 

	    WebDriverWait wait = new WebDriverWait(driver,5000);
        wait.until(ExpectedConditions.urlContains("q="));
  		String pageUrl = driver.getCurrentUrl();
  		System.out.println(pageUrl);
  		assertTrue(pageUrl.contains("q=Google"));
  		assertEquals(driver.getTitle(),"Google - Google Search");
      
     
      driver.close(); 
   } 
}
