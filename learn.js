describe('login window', function() {
    it('login successfully', function() {
    
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    
        var username = browser.element(by.id('username'));
        var pwd = browser.element(by.id('password'));
        var uname = browser.element(by.model('model[options.key]'));
        var loginBtn = browser.element(by.className('btn btn-danger'));
    
        username.sendKeys('angular');
        pwd.sendKeys('password');
        uname.sendKeys('angular');
        loginBtn.click().then(function(){
            browser.sleep(5000);
        })

})

}) 
