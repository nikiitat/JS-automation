var utils = require('../../../pages/utils');

module.exports = {
    '@tags': ['addToCart'],

    before: function (browser){
        utils(browser).openBrowser();
    },
    'Click on duck': function (browser){
        utils(browser).clickOnDuck();
    },
    'Add duck to cart': function (browser){
        utils(browser).addDucktoCart();
    },
    after: function (browser){
        utils(browser).closeBrowser();
    }
};