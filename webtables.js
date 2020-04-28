describe('webtables session', function(){
    it('webtables testing', function() {
        browser.driver.manage().window().maximize();

        //disable wait for angular if the website is non-angular
        browser.waitForAngularEnabled(false)
        browser.get('http://www.way2automation.com/protractor-angularjs-practice-website.html');
        
       var webtablesLink = browser.element.all(by.linkText('WebTables'));
      
        //multiple element found with linkText, so passing get(1)
       webtablesLink.get(1).click().then(function(){
        //switching to another browser tab
           browser.getAllWindowHandles().then(function(winHandles){
           browser.switchTo().window(winHandles[1]);

           })

           var btnAddUser = browser.element(by.className('btn btn-link pull-right'));
           btnAddUser.click();
           //adding user
           var txtFname = browser.element(by.name('FirstName'));
           var txtLname = browser.element(by.name('LastName'));
           var txtUname = browser.element(by.className('ng-pristine ng-valid ng-valid-required'));
           var txtUname = browser.element(by.name('Password'));
           var rbCompany = browser.element.all(by.className('radio ng-scope ng-binding'));
           var ddRole = browser.element(by.name('RoleId'));
           var txtEmail = browser.element(by.name('Email'));
           var txtPhone = browser.element(by.name('Mobilephone'));
           var btnSave = browser.element(by.className('btn btn-success'));
           

           txtFname.sendKeys('kishor');
           txtLname.sendKeys('sharma');
           txtUname.sendKeys('kysor');
           rbCompany.get(1).click();
           ddRole.sendKeys('Customer');
           txtEmail.sendKeys('test@gmail.com');
           txtPhone.sendKeys('04100');
           btnSave.click().then(function(){
               browser.sleep(5000);
              
           })


           
       })
    })
})