describe('login',function() {  
	
	it('open login page', async function() {
	
		browser.driver.get("Unable to create new service: ChromeDriverService").then(function()
		{
			browser.driver.manage().window().maximize();
		});
		//browser.ignoreSynchronization = true;
		await browser.waitForAngularEnabled(false);
		var loginTxt = browser.driver.findElement(by.id("userNameInput"));
		var pwdTxt = browser.driver.findElement(by.id("passwordInput"));
		var signInBtn = browser.driver.findElement(by.id("submitButton"));
		loginTxt.sendKeys("riopoc\\test1");
		pwdTxt.sendKeys("Acce55123!");
		signInBtn.click();
		
	})
	
	it('Navigate to Order Page', function(){
		//await browser.waitForAngularEnabled(true);
		//browser.ignoreSynchronization = false;
		browser.sleep(10000);
		//var EC = protractor.ExpectedConditions;
		var el = element(by.className("btn item-desktop-only inactive-btn"));
		//browser.driver.wait(EC.presenceOf(el), 50000);
		el.click();
		// .then(function()
		// {
		// 	var createOrderBtn = element(by.className("btn btn-outline-secondary ml-auto item-desktop-only ng-star-inserted"));
		// 	createOrderBtn.click()

		// });
		
		//browser.sleep(10000);

	})
	it ('create order', function(){
		var createOrderBtn = element(by.className("btn btn-outline-secondary ml-auto item-desktop-only ng-star-inserted"));
		createOrderBtn.click();
		browser.sleep(10000);

	})
})