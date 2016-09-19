"use strict";
var SpecObjs_1 = require('./SpecObjs');
var ec = protractor.ExpectedConditions;
describe('angularjs homepage', function () {
    var navBar = new SpecObjs_1.NavBar();
    beforeAll(function () {
        browser.get('http://www.angularjs.org');
    });
    afterAll(function () {
        console.log('\nexample-spec complete');
    });
    it('Click the "Home" link in the site\'s header', function () {
        var header = element(by.css('div[class="navbar-inner"]'));
        browser.wait(ec.visibilityOf(header), 10000).then(function () {
            navBar.gotoHome().gotoLearn().gotoDevelop();
            browser.sleep(1000);
        });
    });
});
//# sourceMappingURL=example-spec.js.map