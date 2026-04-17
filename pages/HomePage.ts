import { Page, Locator } from "@playwright/test"
import { SearchResults } from "./SearchResults";
import { LoginPage } from "./LoginPage";

export class HomePage {
    readonly page: Page;
    readonly myAccountlink: Locator;
    readonly registerLink : Locator;
    readonly loginLink :Locator;
    readonly inputsearchBox : Locator;
    readonly searchbutton : Locator;
    readonly productContent : Locator;
    readonly searchText : Locator;
    readonly SearchButton :  Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccountlink = page.locator("a[title='My Account']")
        this.registerLink = page.locator("//a[text()='Register']");
        this.loginLink = page.locator("//a[text()='Login']");
        this.inputsearchBox = page.locator("input[name='search']");
        this.searchbutton = page.locator(".input-group-btn");
        this.productContent = page.locator(".swiper-viewport").first()
        this.searchText = page.locator("div#search input");
        this.SearchButton = page.locator(".input-group-btn button")
    }
    async isHomePageExists(){
        let title = await this.page.title();
        if(title){
            return true;
        }
        return false
    }
    async gotoRegistrationPage() {
        await this.myAccountlink.click();
        await this.registerLink.click();
    }

    async clickOnMyAccountPage() {
        try{
        await this.myAccountlink.click();
        }catch(error){
            console.log(`Exception occured while clicking the myaccount page; ${error}`)
        }
       
    }
    async clickOnLoginPage() {
        try{
            await this.loginLink.click();
            }catch(error){
                console.log(`Exception occured while clicking the loginPage page; ${error}`)
            }
    }
    async gotoLoginPage(){
        this.clickOnMyAccountPage();
        this.clickOnLoginPage();
        return new LoginPage(this.page);
    }

    async isProductContentVisible(){
        return await this.productContent.isVisible();
    }

    async searchProduct(searchItem:string){
        await this.searchText.fill(searchItem);
        try{
            await this.SearchButton.click();
            return new SearchResults(this.page);
        }catch(error){
            console.log(`error occured while clicking at search Button : ${error}`);
            throw error;
        }
        
    }
}