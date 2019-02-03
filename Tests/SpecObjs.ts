/// <reference path="../testheader.ts" />
const EC: any = protractor.ExpectedConditions;

class NavBar {
    public goto(selector) {
      var header_selector: any = element(by.xpath('//a[@href][@class="dropdown-toggle"][text()=" '+ selector +' "]'));

      function gotoSelector() {
        browser.wait(EC.elementToBeClickable(header_selector), 5000).then(() => {
            header_selector.click();
        });
      }
      gotoSelector();
      return this;
    }
}

export{NavBar};
