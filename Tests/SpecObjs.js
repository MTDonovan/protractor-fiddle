"use strict";
var ec = protractor.ExpectedConditions;
var header = element(by.css('div[class="navbar-inner"]'));
var home = header.element(by.css('li.active > a[href]'));
var learn = header.element(by.css('li:nth-child(4) > a[href]'));
var develop = header.element(by.css('li:nth-child(6) > a[href]'));
var NavBar = (function () {
    function NavBar() {
    }
    NavBar.prototype.goto = function (selector) {
        browser.wait(ec.elementToBeClickable(selector), 2000).then(function () {
            selector.click();
            console.log('\n' + selector + ' clicked');
            browser.sleep(300);
        });
    };
    NavBar.prototype.gotoHome = function () {
        var navBar = new NavBar();
        navBar.goto(home);
        return this;
    };
    NavBar.prototype.gotoLearn = function () {
        var navBar = new NavBar();
        navBar.goto(learn);
        return this;
    };
    NavBar.prototype.gotoDevelop = function () {
        var navBar = new NavBar();
        navBar.goto(develop);
        return this;
    };
    return NavBar;
}());
exports.NavBar = NavBar;
//# sourceMappingURL=SpecObjs.js.map