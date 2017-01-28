/// <reference path="../testheader.ts" />
import {NavBar} from './SpecObjs';

const EC: any = protractor.ExpectedConditions;

describe('angularjs homepage', () => {
    //classes
    var navBar = new NavBar();

    beforeAll(() => {
        browser.get('http://www.angularjs.org');
        //browser.driver.manage().window().maximize();
    });

    afterAll(() => {
        console.log('\nexample-spec complete');
    });

    it('Click the "Home" link in the site\'s header', () => {
        var header: any = element(by.css('div[class="navbar-inner"]'));
<<<<<<< HEAD
        browser.wait(EC.visibilityOf(header), 10000).then(() => {
          navBar
=======
        browser.wait(ec.visibilityOf(header), 10000).then(() => {
        	navBar
>>>>>>> 55182d76e09a85657ee1329ad334436834a90c15
		    .goto('Learn')
		    .goto('Develop')
		    .goto('Discuss');
        });
    });
});
