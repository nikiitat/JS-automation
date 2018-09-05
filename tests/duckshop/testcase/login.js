var utils = require('../../../pages/utils');

module.exports = {
    '@tags': ['login'],

    before: function(browser){
        utils(browser).openBrowser();
    },
    'Provide user email and pass': function(browser){
        utils(browser).loginUser();
    },
    'Click login button': function(browser){
        utils(browser).clickLoginButton();
    },
    after: function(browser){
        utils(browser).closeBrowser();
    }
};