import { Page, Locator } from "@playwright/test"

export class RegistrationPage {
    readonly page: Page;
    readonly firstname: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly telephone: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    //readonly sunscribeNo : Locator;
    readonly privacyCheckBox: Locator
    readonly continueRegistration: Locator
    readonly messageConfirmation: Locator;
    readonly registrationForm : Locator;


    constructor(page: Page) {
        this.page = page;
        this.firstname = page.locator("#input-firstname")
        this.lastName = page.locator("#input-lastname")
        this.email = page.locator("#input-email")
        this.telephone = page.locator("#input-telephone")

        this.password = page.locator("#input-password")
        this.confirmPassword = page.locator("#input-confirm")

        //this.sunscribeNo = page.locator(".radio-inline input").nth(1);
        this.privacyCheckBox = page.locator("input[type='checkbox']")
        this.continueRegistration = page.locator("input[value='Continue']")
        this.messageConfirmation = page.locator('h1:has-text("Your Account Has Been Created!")')
        this.registrationForm = page.locator("#content")
    }

    async isregistrationFormExists(){
        return await this.registrationForm.isVisible()
    }
    async setFname(fname: string) {
        await this.firstname.fill(fname);
    }
    async setLname(lname: string) {
        await this.lastName.fill(lname);
    }
    async setemail(emailinput: string) {
        await this.email.fill(emailinput);
    }
    async setphone(tphone: string) {
        await this.telephone.fill(tphone);
    }

    async setpassword(pWord: string) {
        await this.password.fill(pWord);
        await this.confirmPassword.fill(pWord)
    }

    async setPrivacyBox() {
        try {
            await this.privacyCheckBox.click();
        } catch (error) {
            console.log(`Exception occured while clicking the privacy ckeck box; ${error}`)
        }
    }

    async clickContinueRegistration() {
        try {
            await this.continueRegistration.click();
        } catch (error) {
            console.log(`Exception occured while clicking the continue registration; ${error}`)
        }
    }
    async getSuccessMessage() {
        return await this.messageConfirmation.textContent();

    }

    async completeRegistration(userdata: {
        firstname: string,
        lastname: string,
        email: string,
        tphone: string,
        pword: string
    }) {
        await this.setFname(userdata.firstname);
        await this.setLname(userdata.firstname);
        await this.setemail(userdata.email);
        await this.setphone(userdata.tphone);
        await this.setpassword(userdata.pword);
        await this.setPrivacyBox()
        await this.clickContinueRegistration();
    }
}