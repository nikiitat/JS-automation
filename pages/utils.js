module.exports = function (browser){
    this.openBrowser = function(){
        browser
        .windowMaximize()
        .url('http://localhost/litecart/en/')
        .waitForElementVisible('body', 1000);
        return browser
    };
    this.clickLoginButton = function(){
        browser
        .click('#box-account-login > div > form > table > tbody > tr:nth-child(4) > td > span > button:nth-child(1)')
    };
    this.loginUser = function(){
        browser
        .setValue('#box-account-login > div > form > table > tbody > tr:nth-child(1) > td > input[type="text"]','micoach36@mailinator.com')
        .setValue('#box-account-login > div > form > table > tbody > tr:nth-child(2) > td > input[type="password"]','Magic123')
    };
    this.closeBrowser = function(){
        browser
        .pause(3000)
        .end()
    };
    return this;
}