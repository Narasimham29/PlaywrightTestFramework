import { Page, Locator } from "@playwright/test"
import { MyAccountPage } from "./MyAccountPage";


export class LoginPage {
    readonly page: Page;
    readonly usernameInut: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginfailureMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInut = page.locator("#input-email")
        this.passwordInput = page.locator("#input-password")
        this.loginButton = page.locator("input[type='submit']")
        this.loginfailureMessage = page.locator("div.alert-danger")
    }

    async loginAccount(username: string, password: string) {
        await this.usernameInut.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        return new MyAccountPage(this.page);
    }
    async getLoginFailureMessage() {
        return await this.loginfailureMessage.textContent()
    }
    async isLoginPageExist(){
        return await this.loginButton.isVisible()
    }
}