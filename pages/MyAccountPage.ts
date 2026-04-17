import {Page,Locator} from "@playwright/test"
import { LogoutPage } from "./LogoutPage";
import { SearchResults } from "./SearchResults";
import Promise from "@playwright/test"


export class MyAccountPage{
    readonly page : Page;
    readonly myAccountHeader : Locator;
    readonly logoutButton : Locator;
    readonly searchbutton : Locator;
    readonly searchText : Locator;

    constructor(page : Page){
        this.page = page;
        this.myAccountHeader = page.locator("#content h2").first();
        this.logoutButton = page.locator("//a[text()='Logout']").nth(1)
        this.searchbutton = page.locator(".input-group-btn");
        this.searchText = page.locator("div#search input");
    }

    async isMyAccountHeaderExists(){
        return await this.myAccountHeader.isVisible()
    }
    async clickOnLogOut() : Promise<LogoutPage> {
        try{
            await this.logoutButton.click();
            return new LogoutPage(this.page);
        }catch(error){
            console.log(`Error occured while clicking logout button : ${error}`)
            throw error;
        }
        
    }
    async searchProduct(desiredProduct:string):Promise<SearchResults>{
        await this.searchText.fill(desiredProduct);
        try{
            await this.searchbutton.click();
            return new SearchResults(this.page);
        }catch(error){
            console.log(`Error occured while clicking search button : ${error}`)
            throw error;
        }
    }

    async isSearchBarExists(){
        return await this.searchText.isVisible()
    }
}