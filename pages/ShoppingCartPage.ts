import {Page, Locator} from "@playwright/test"

export class ShoppingCartPage{
    readonly page : Page;
    readonly shoppingcartHeader : Locator;
    readonly checkOutButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.shoppingcartHeader = page.locator("");
        this.checkOutButton = page.locator(".buttons .btn-primary");
        this.shoppingcartHeader = page.locator("#content h1");
    }
}