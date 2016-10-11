/// <reference path="../testheader.ts" />

var ec: any = protractor.ExpectedConditions;

// (//div[@class="navbar-inner"]//@href)[1]
var header: any = element(by.css('div[class="navbar-inner"]'));
var home: any = header.element(by.css('li.active > a[href]'));
var learn: any = header.element(by.css('li:nth-child(4) > a[href]'));
var develop: any = header.element(by.css('li:nth-child(6) > a[href]'));

class NavBar{
    private goto(selector){
        browser.wait(ec.elementToBeClickable(selector), 2000).then(() => {
            selector.click();
            // console.log('\n' + selector + ' clicked');
            browser.sleep(300);
        });
    }
    public gotoHome(){
        var navBar: any = new NavBar();

        navBar.goto(home);
        return this;
    }
    public gotoLearn(){
        var navBar: any = new NavBar();

        navBar.goto(learn);
        return this;
    }
    public gotoDevelop(){
        var navBar: any = new NavBar();

        navBar.goto(develop);
        return this;
    }
}

export{NavBar};
