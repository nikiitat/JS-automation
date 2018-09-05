module.exports = {
    tags: ['testcase2'],
    'Search functionality should be working': function (browser) {
        browser
        .url('http://localhost/litecart/en/')
        .waitForElementVisible('body', 1000)
        .setValue('#box-search > div > form > div > input[type="search"]',['blue duck', browser.Keys.ENTER])
        .pause(5000)
        browser.saveScreenshot('./screenshots/testcase2.jpg')
        .end();
    }
}