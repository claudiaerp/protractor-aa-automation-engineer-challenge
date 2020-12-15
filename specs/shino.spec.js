var AfterMePageObject = require("../pages/shino.page");

describe('Shino Page', function() {
    it('should buy a valet parking ticket', function() {
      var mainURL = 'http://www.shino.de/parkcalc/';
      browser.get(mainURL);
      expect(browser.getCurrentUrl()).toBe(mainURL);
    });
});