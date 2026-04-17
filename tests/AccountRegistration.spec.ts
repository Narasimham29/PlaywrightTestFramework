/**
 * TestCase : Account registration
 * Tags : @master @Sanity @Smoke
 * 
 * Test Steps :
 * navigate to Base URL
 * click on my account
 * click on registration button and navigate to registration page
 * fill the registration columns with random data
 * click on privacy statement
 * click on continue button
 * Verify the success message 
 */

import { test, expect } from "@playwright/test"
import { testData } from "../testdata.config"
import { HomePage } from "../pages/Homepage";
import { RegistrationPage } from "../pages/RegestrationPage";
import { RandomDataGenerator } from "../utis/RandomDataGenerator";

let homepage: HomePage;
let regPage: RegistrationPage;

test.beforeEach(async ({ page }) => {
    await page.goto(testData.baseURL);
    await page.waitForLoadState();

    homepage = new HomePage(page);
    regPage = new RegistrationPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(4000)
    await page.close();
})

test("Verify the registration process @master", async ({ page }) => {

    expect(await homepage.isHomePageExists()).toBeTruthy();

    await homepage.gotoRegistrationPage();
    await page.waitForLoadState()
    expect(await regPage.isregistrationFormExists()).toBeTruthy()

    const userdata = {
        firstname: RandomDataGenerator.getFirstName(),
        lastname: RandomDataGenerator.getLastName(),
        email: RandomDataGenerator.getemail(),
        tphone: RandomDataGenerator.getPhoneNUmber(),
        pword: RandomDataGenerator.getPassword()
    }
    await regPage.completeRegistration(userdata)
    await page.waitForLoadState()
    expect(await regPage.getSuccessMessage()).toContain("Your Account Has Been Created!")
    await page.waitForLoadState()
})