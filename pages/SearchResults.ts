import {Page, Locator} from "@playwright/test"
import {ProductPage} from "../pages/ProductPage"

export class SearchResults{
    readonly page : Page;
    
    readonly searchheader : Locator;
    readonly searchresults : Locator;
    


    constructor(page: Page){
        this.page = page;
        this.searchheader = page.locator("div#content h1");
        
        this.searchresults = page.locator("div.caption a")
        
    }
    async isSearchPageExists(){
        let text = await this.searchheader.textContent()
        if(text?.includes("Search -")){
            return true
        }else{
            return false
        }
    }
    
    async selectSearchItem(searchItem:string) : Promise<ProductPage>{
        let searchItems = await this.searchresults.all()
        for(let item of searchItems){
            const text = (await item.textContent())?.trim().toLocaleLowerCase();
            if (text?.includes(searchItem.toLocaleLowerCase())) {
                await item.click();
                return new ProductPage(this.page)
            }
        }
        throw new Error(`Searched item "${searchItem}" not found in results`);
    }

    async isSearchItemExist(searchItem:string){
        await this.searchresults.first().scrollIntoViewIfNeeded();
        let searchItems = await this.searchresults.all();
        for(let item of searchItems){
            const text = (await item.textContent())?.trim().toLocaleLowerCase();
        if (text?.includes(searchItem.toLocaleLowerCase())) {
                return true;
            }
        }
        return false;
    }
}