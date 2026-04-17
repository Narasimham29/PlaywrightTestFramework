import {Locator,Page} from "@playwright/test"


export class LogoutPage{
    readonly page : Page;
    readonly accountLogoutHeader : Locator;
    readonly continueLogoutButton : Locator


    constructor(page : Page){
        this.page = page;
        this.accountLogoutHeader = page.locator("#content h1");
        this.continueLogoutButton = page.locator("a.btn.btn-primary");
    }

    async isExistsLogoutHeader(){
        return await this.accountLogoutHeader.isVisible();
    }

    async clickContinueLogoutButton(){
        try{
            await this.continueLogoutButton.click();
        }catch(error){
            console.log(`Error occured while clicking on logout button  : ${error}`)
        }
    }
}