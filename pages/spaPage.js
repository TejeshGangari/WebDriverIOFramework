const userActions = require('../utils/userActions');

class spaPage{

    //Page Locators
    get queryBox(){ return $('#search'); }
    get queryButton(){ return $('//button'); }
    get responseBox(){ return $('//p[@data-testid="result"]'); }

    //Page Methods

    //Field Level Actions
    isQueryBoxDisplayed(){
        return userActions.isElementDisplayed(this.queryBox);
    }

    isQueryButtonDisplayed(){
        return userActions.isElementDisplayed(this.queryButton);
    }

    //Functionality Level Actions
    postQuestion(value){
        userActions.setValue(this.queryBox,value);
    }

    askQuestion(){
        userActions.doClick(this.queryButton);
    }

    readResponse(){
        return userActions.getElementText(this.responseBox);
    }
}

module.exports = new spaPage();