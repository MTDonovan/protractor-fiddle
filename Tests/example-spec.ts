/// <reference path="../testheader.ts" />
import {NavBar} from './SpecObjs';

var ec: any = protractor.ExpectedConditions;

describe('angularjs homepage', () => {
    //classes
    var navBar = new NavBar();

    beforeAll(() => {
        browser.get('http://www.angularjs.org');
        // browser.driver.manage().window().maximize();
    });

    afterAll(() => {
        console.log('\nexample-spec complete');
    });

    it('Click the "Home" link in the site\'s header', () => {
        var header: any = element(by.css('div[class="navbar-inner"]'));
        browser.wait(ec.visibilityOf(header), 10000).then(() => {
            navBar
		.gotoHome()
		.gotoLearn()
		.gotoDevelop();
            //make sure that the click worked
            browser.sleep(1000);
        });
    });
});
