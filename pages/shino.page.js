const { element, browser } = require("protractor");

var ShinoPage = function(){
    var EC = protractor.ExpectedConditions;
    this.estimatedCostlbl = "estimated Parking costs";
    this.parkLotCmbx = element(by.id('ParkingLot'));
    this.entryDateTxt = element(by.id('StartingDate'));
    this.entryTimeTxt = element(by.id('StartingTime'));
    
    this.entryRd = element(by.name('StartingTimeAMPM'));
    this.entryAMRd = element(by.css("input[name=StartingTimeAMPM][value=AM]"));
    this.entryPMRd = element(by.css("input[name=StartingTimeAMPM][value=PM]"));

    this.leaveDateTxt = element(by.id('LeavingDate'));
    this.leaveTimeTxt = element(by.id('LeavingTime'));
    this.leavePRd = element(by.name('LeavingTimeAMPM'));
    this.leaveAMPRd = element(by.css("input[name=LeavingTimeAMPM][value=AM]"));
    this.leavePMPRd = element(by.css("input[name=LeavingTimeAMPM][value=PM]"));

    this.parkCostLbl  = element(by.cssContainingText('.SubHead', this.estimatedCostlbl));
    this.parkCostPrnt =  this.parkCostLbl.element(by.xpath('ancestor::td'));
    this.parkCostPrntSblng = this.parkCostPrnt.element(by.xpath('following-sibling::td'));
    this.parkCost$Lbl = this.parkCostPrntSblng.element(by.css('span.SubHead'));
    this.parkCostDtl = this.parkCostPrntSblng.element(by.css('span.BodyCopy'));

    this.calcBtn = element(by.name('Submit'));

    this.fillInputs = async function(data){    
        try {
            //this.clearInputs();    
            
            await this.parkLotCmbx.click(); 
            await this.parkLotCmbx.sendKeys(data.parkingLot, protractor.Key.TAB);
            await this.entryDateTxt.sendKeys(data.entryDate);
            await this.entryTimeTxt.sendKeys(data.entryTime);
            
            if (data.entryDayPeriod == 'AM') {
                await this.entryAMRd.click();
            } else {
                await this.entryPMRd.click();
            }

            await this.leaveDateTxt.sendKeys(data.leaveDate);  
            await this.leaveTimeTxt.sendKeys(data.leaveTime);
            if (data.leaveDayPeriod == 'AM') {
                await this.leaveAMPRd.click();
            } else {
                await this.leavePMPRd.click();
            }

            await this.calcBtn.click();  
        } catch (error) {
            
        }
        
    };

    this.clearInputs = async function(){
        await this.entryDateTxt.clear();
        await this.entryTimeTxt.clear();
        await this.leaveDateTxt.clear();
        await this.leaveTimeTxt.clear();
    };

    this.awaitStalenessOf = async function(){
        try {
            await browser.wait(EC.stalenessOf(this.parkLotCmbx), 50000);
            await browser.wait(EC.stalenessOf(this.entryDateTxt), 5000); 
            await browser.wait(EC.stalenessOf(this.entryTimeTxt), 5000); 
            await browser.wait(EC.stalenessOf(this.entryAMRd), 5000); 
            await browser.wait(EC.stalenessOf(this.entryPMRd), 5000); 

            await browser.wait(EC.stalenessOf(this.leaveDateTxt), 5000); 
            await browser.wait(EC.stalenessOf(this.leaveTimeTxt), 5000); 
            await browser.wait(EC.stalenessOf(this.leaveAMPRd), 5000); 
            await browser.wait(EC.stalenessOf(this.leavePMPRd), 5000); 

            await browser.wait(EC.stalenessOf(this.parkCostLbl), 5000); 
            await browser.wait(EC.stalenessOf(this.parkCostPrnt), 5000); 
            await browser.wait(EC.stalenessOf(this.parkCostPrntSblng), 5000); 
            await browser.wait(EC.stalenessOf(this.parkCost$Lbl), 5000);
            await browser.wait(EC.stalenessOf(this.parkCostDtl), 5000);
        } catch (error) {
            
        }
    };

    this.awaitPresenceOfInputs = async function(){
        try {
            await browser.wait(EC.presenceOf(this.parkLotCmbx), 5000); 
            await browser.wait(EC.presenceOf(this.entryDateTxt), 5000); 
            await browser.wait(EC.presenceOf(this.entryTimeTxt), 5000); 
            await browser.wait(EC.presenceOf(this.entryAMRd), 5000); 
            await browser.wait(EC.presenceOf(this.entryPMRd), 5000); 
        
            await browser.wait(EC.presenceOf(this.leaveDateTxt), 5000); 
            await browser.wait(EC.presenceOf(this.leaveTimeTxt), 5000); 
            await browser.wait(EC.presenceOf(this.leaveAMPRd), 5000); 
            await browser.wait(EC.presenceOf(this.leavePMPRd), 5000); 
        
            await browser.wait(EC.presenceOf(this.parkCostLbl), 5000); 
            await browser.wait(EC.presenceOf(this.parkCostPrnt), 5000); 
            await browser.wait(EC.presenceOf(this.parkCostPrntSblng), 5000); 
            await browser.wait(EC.presenceOf(this.parkCost$Lbl), 5000);
            await browser.wait(EC.presenceOf(this.parkCostDtl), 5000);
        } catch (error) {
            
        }
    };
    
}; 
module.exports = new ShinoPage();