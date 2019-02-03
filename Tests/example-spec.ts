/// <reference path="../testheader.ts" />
import {NavBar} from './SpecObjs';

const EC: any = protractor.ExpectedConditions;

describe('angularjs homepage', () => {
    //classes
    var navBar = new NavBar();

    beforeAll(() => {
        browser.get('http://www.angularjs.org');
        browser.driver.manage().window().maximize();
    });

    afterAll(() => {
        console.log('\nexample-spec complete');
    });

    it('Click the "Home" link in the site\'s header', () => {
        var header: any = element(by.css('div[class="navbar-inner"]'));
        browser.wait(EC.visibilityOf(header), 10000).then(() => {
          navBar
	    .goto('Learn')
	    .goto('Develop')
	    .goto('Discuss');
        });
    });
});
