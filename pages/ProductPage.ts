import {Page,Locator} from "@playwright/test"

export class ProductPage{
    readonly page : Page;
    readonly addToCartButton : Locator;
    readonly productHeader : Locator;
    readonly inputQuantity : Locator;
    readonly cartAlertMessage : Locator;
    readonly gotocartButton : Locator;
    readonly viewCart : Locator;

    constructor(page : Page){
        this.page = page;
        this.productHeader = page.locator("#content .row h1");
        this.addToCartButton = page.locator("#button-cart:first-of-type");
        this.inputQuantity = page.locator("#input-quantity");
        this.cartAlertMessage = page.locator("#div.alert-success");
        this.gotocartButton = page.locator("#cart");
        this.viewCart = page.locator(".text-right .fa-shopping-cart");
     }

     async isProductPageAvailable(){
        await this.page.waitForLoadState()
        return await this.addToCartButton.waitFor({ state: 'visible', timeout: 5000 });;
     }

     async verifytheProduct(productname : string){
        const text = (await this.productHeader.textContent())?.trim().toLocaleLowerCase();
        if(text ==productname.toLocaleLowerCase()){
            return true;
        }else{
            return false;
        }
     }

}