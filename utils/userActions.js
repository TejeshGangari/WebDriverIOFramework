class UserActions{

    doClick(element){
        element.waitForDisplayed();
        element.click();
    }

    setValue(element, value){
        element.waitForDisplayed();
        element.setValue(value);
    }

    getElementText(element){
        element.waitForDisplayed();
        return element.getText();
    }

    isElementDisplayed(element){
        element.waitForDisplayed();
        return element.isDisplayed();
    }
}

module.exports = new UserActions();