var BasePage = require("../pages/base.page");
var ShinoPage = require("../pages/shino.page");
var NegativeTestData = require("../data/negative.test.data.json");
const { browser } = require("protractor");

describe('Shino Page - Negative Testing', function() {
  beforeAll(async function(){
    await BasePage.goToShino();
    expect(await browser.getCurrentUrl()).toBe(browser.params.baseUrl);
  });
  
  NegativeTestData.forEach(async function(item, index) {
    it("should not buy any tickets for "+ item.parkingLot + " when " + item.description, async function() {
      try {
        ShinoPage.awaitStalenessOf().catch(function(error){});
        ShinoPage.awaitPresenceOfInputs().catch(function(error){});
        ShinoPage.clearInputs().catch(function(error){});
        ShinoPage.fillInputs(item).catch(function(error){});
        ShinoPage.awaitStalenessOf().catch(function(error){});
        ShinoPage.awaitPresenceOfInputs().catch(function(error){});
        
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.urlContains('index.php?'),5000);
  
        expect(await ShinoPage.parkCostLbl.getText()).toEqual(ShinoPage.estimatedCostlbl.toUpperCase());
        expect(await ShinoPage.parkCost$Lbl.getText()).toEqual(item.parkingCost);
        expect(await ShinoPage.parkCostDtl.getText()).toEqual(item.parkingStatement);
        ShinoPage.clearInputs().catch(function(error){});
      } catch (error) {
        
      }
    });
    
  });   
});