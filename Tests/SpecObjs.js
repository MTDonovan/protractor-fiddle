"use strict";
var ec = protractor.ExpectedConditions;
var NavBar = (function () {
    function NavBar() {
    }
    NavBar.prototype.goto = function (selector) {
        var header_selector = element(by.xpath('//a[@href][@class="dropdown-toggle"][text()=" ' + selector + ' "]'));
        function gotoSelector() {
            browser.wait(ec.elementToBeClickable(header_selector), 5000).then(function () {
                header_selector.click();
            });
        }
        gotoSelector();
        return this;
    };
    return NavBar;
}());
exports.NavBar = NavBar;
//# sourceMappingURL=SpecObjs.js.map