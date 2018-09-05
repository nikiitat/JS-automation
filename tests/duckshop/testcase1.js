module.exports = {
    'tags': ['testcase1'],
    'Open Homepage and click on header':  function(browser){
        browser
        .url('http://localhost/litecart/en/')
        .waitForElementVisible('body', 1000)
        .assert.title('Online Store | My Store')
        .click('#site-menu > ul > li.category-1 > a')
        .pause(5000)
        .end();
    }
}