/*global describe, it, before, beforeEach, after, afterEach */
//http://chaijs.com/

//https://github.com/domenic/chai-as-promised/
expect = require('chai').use(require('chai-as-promised')).expect;

module.exports = function() {


    var ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;
    //browser.resize(1280, 1024);
    browser.driver.manage().window().setSize(1280, 1024);
    browser.manage().timeouts().pageLoadTimeout(400000);
    browser.manage().timeouts().implicitlyWait(250000);


    this.Given(/^I am on the login page$/, function (callback) {

        ptor.get('http://www.ncryptedcloud.com/login');
        callback()
    });

    this.Then(/^the title should equal "([^"]*)"$/, function (arg1, callback) {
        expect(browser.getTitle()).to.eventually.equal(arg1).and.notify(callback);
    });

    this.Then(/^I input my email "([^"]*)" and password "([^"]*)"$/, function (username, password, callback) {
        element(by.id("id_login")).sendKeys(username);
        element(by.id("id_password")).sendKeys(password);
        element(by.css("button.btn.btn-login.text-uppercase")).click();
        //browser.element(by.id('button')).click();
        callback();
    });

    this.Then(/^I am logged in the portal and my current URL is "([^"]*)"$/, function (arg1, callback) {
        expect(ptor.getCurrentUrl()).to.eventually.equal(arg1).and.notify(callback);
    });

    this.When(/^I click "([^"]*)" near Dropbox image$/, function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        expect(element(by.css("div.well.well-sm.well-blue")).getText()).to.eventually.equal("Click below to Connect your cloud storage service to begin using all of nCryptedCloud's great features!");
        var connect_btn = $('.cloud-storage-providers .cloud-storage-dropbox .cloud-storage-caption-link');
        connect_btn.click();
        callback();
    });

    this.Then(/^I am redirected to Dropbox authorization page$/, function (callback) {
        var drop_name = $('.text-input-wrapper .autofocus');
        drop_name.sendKeys("ruslanius2014@gmail.com");
        var drop_pass = $('.login-password');
        drop_pass.sendKeys("Pa$$worD");
        var submit = element(by.css('button.login-button.button-primary'));
        submit.click();
        callback();
    });

    this.When(/^I authorize my Dropbox account$/, function (callback) {
        var submit = element(by.css('button.auth-button.button-primary'));
        submit.click();
        callback();
    });

    this.When(/^Dropbox icon with my credentials would appear in dropdown\.$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        ptor.ignoreSynchronization = false;
        element.all(by.css('.obj-name .ng-binding')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Public';
            });
        }).then(function(filteredElements) {
            filteredElements[0].click();
        });
        callback();
    });

    this.Then(/^I would see files and folder listing$/, function (callback) {
        ptor.ignoreSynchronization = false;
        element.all(by.css('.obj-name .obj-name-link')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'DSC01217.jpg';
            });
        }).then(function(filteredElements) {
            filteredElements[0].click();
        });
        callback();
    });

    this.Then(/^I open image file$/, function (callback) {

        ptor.ignoreSynchronization = true;

        setTimeout(function () {
            expect(element(by.id("fullResImage")).isDisplayed()).to.eventually.equal(true);
        }, 100000);

        callback();
    });

    this.Then(/Close file$/, function (callback) {
        var closing = $('.pp_content_container .pp_close');
        closing.click();
        callback();
    });

}
