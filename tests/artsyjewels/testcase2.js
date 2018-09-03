module.exports = {
    tags: ['testcase2'],
    'Search functionality should be working': function (browser) {
        browser
        .url('http://artsyjewelry.com/')
        .waitForElementVisible('body', 1000)
        .setValue('#s',['silver', browser.Keys.ENTER])
        .pause(5000)
        .end();
    }
}