const { element } = require("protractor");

var BasePage = function(){
    this.goToShino = async function(){
        await browser.get(browser.params.baseUrl);
    }
};
module.exports = new BasePage();