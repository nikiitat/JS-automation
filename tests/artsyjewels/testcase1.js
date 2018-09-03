module.exports = {
    'tags': ['testcase1'],
    'Open Homepage and click on header':  function(browser){
        browser
        .url('http://artsyjewelry.com/')
        .waitForElementVisible('body', 1000)
        .assert.title('Artsy Jewelry | Just another WordPress site')
        .end();
    }
}