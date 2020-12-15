const { element } = require("protractor");

var ShinoPage = function(){
    
    this.parkLotCmbx = element(by.id('ParkingLot'));
    this.entryDateTxt = element(by.id('StartingDate'));
    this.entryTimeTxt = element(by.id('StartingTime'));
    this.entryAMPRd = element(by.name('StartingTimeAMPM'));
    this.entryPMPRd = element(by.name('StartingTimeAMPM'));

    this.entryDateTxt = element(by.id('LeavingDate'));
    this.leaveTimeTxt = element(by.id('LeavingTime'));
    this.leaveAMPRd = element(by.name('LeavingTimeAMPM'));
    this.leavePMPRd = element(by.name('LeavingTimeAMPM'));

    //this.parkCostB  = 
    this.calcBtn = element(by.name('Submit'));

    this.fillInputs = function(data){
        this.parkLotCmbx.click();
        this.parkLotCmbx.sendKeys(data.parkingLot, protractor.Key.TAB);

    };

    this.clearInputs = function(){
        this.parkLotCmbx.clear();
        this.entryDateTxt.clear();
        this.entryTimeTxt.clear();
        this.entryAMPRd.clear();
        this.entryPMPRd.clear();
        this.entryDateTxt.clear();
        this.leaveTimeTxt.clear();
        this.leaveAMPRd.clear();
        this.leavePMPRd.clear();
    };
    
}; 
module.exports = new ShinoPage();