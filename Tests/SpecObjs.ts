/// <reference path="../testheader.ts" />

var ec: any = protractor.ExpectedConditions;

var header: any = element(by.css('div[class="navbar-inner"]'));
var home: any = header.element(by.css('li.active > a[href]'));
var learn: any = header.element(by.css('li:nth-child(4) > a[href]'));
var develop: any = header.element(by.css('li:nth-child(6) > a[href]'));

class NavBar{
    // header: any = element(by.css('div[class="navbar-inner"]'));
    // home: any = this.header.element(by.css('li.active > a[href]'));
    // learn: any = this.header.element(by.css('li:nth-child(4) > a[href]'));
    // develop: any = this.header.element(by.css('li:nth-child(6) > a[href]'));

    private goto(selector){
        browser.wait(ec.elementToBeClickable(selector), 2000).then(() => {
            selector.click();
            console.log('\n' + selector + ' clicked');
            browser.sleep(300);
        });
    }

//     public gotoHome(){
//         var navBar: any = new NavBar();
//
//         navBar.goto(this.home);
//         return this;
//     }
//     public gotoLearn(){
//         var navBar: any = new NavBar();
//
//         navBar.goto(this.learn);
//         return this;
//     }
//     public gotoDevelop(){
//         var navBar: any = new NavBar();
//
//         navBar.goto(this.develop);
//         return this;
//     }
// }

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
