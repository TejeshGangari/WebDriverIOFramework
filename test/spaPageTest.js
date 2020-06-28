const spaPage = require('../pages/spaPage');
const { assert } = require('chai');
const testData = require('../testData')

//Field Level Validations
describe("To validate page elements",function(){
    it("To check if Query Box is available", function(){
        assert.isNotFalse(spaPage.isQueryBoxDisplayed);
    })

    it("To check if Query Button is available", function(){
        assert.isNotFalse(spaPage.isQueryButtonDisplayed);
    })

});

//Functional Level Validations
describe("To test ask question functionality", function(){
    it("To check valid response is received for a valid question", function(){
        spaPage.postQuestion(testData.question);
        spaPage.askQuestion();
        const response = spaPage.readResponse();
        assert.isNotEmpty(response);
    })

    it("To check ! is displayed when ? is posted as question", function(){
        spaPage.postQuestion(testData.question);
        spaPage.askQuestion();
        const response = spaPage.readResponse();
        assert.equal(response,"!","Expected response not received");
    })
});