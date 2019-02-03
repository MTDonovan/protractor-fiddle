/// <reference path="../testheader.ts" />
const EC: any = protractor.ExpectedConditions;

class NavBar {
    public goto(selector) {
      var headerSelector: any = element(by.xpath('//a[@href][@class="dropdown-toggle"][text()=" '+ selector +' "]'));

      function gotoSelector() {
        browser.wait(EC.elementToBeClickable(headerSelector), 5000).then(() => {
            headerSelector.click();
        });
      }
      gotoSelector();
      return this;
    }
}

export{NavBar};
