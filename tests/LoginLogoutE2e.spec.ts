import {test, expect} from "@playwright/test"
import { HomePage } from "../pages/Homepage";
import { testData } from "../testdata.config";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { LogoutPage } from "../pages/LogoutPage";

let homepage: HomePage;
let loginpage: LoginPage;
let myaccountpage : MyAccountPage;
let logoutpage : LogoutPage;

test.beforeEach(async ({ page }) => {
    await page.goto(testData.baseURL);
    await page.waitForLoadState();

    homepage = new HomePage(page)
    loginpage = new LoginPage(page);
    myaccountpage = new MyAccountPage(page);
    //logoutpage = new LogoutPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(1000)
    await page.close();
})

test("Verify login and logout functionality", async ({page})=>{
    expect(await homepage.isProductContentVisible()).toBeTruthy();
    await homepage.gotoLoginPage();

    await expect(await loginpage.isLoginPageExist).toBeTruthy();

    await loginpage.loginAccount(testData.email, testData.password);

    expect(await myaccountpage.isMyAccountHeaderExists()).toBeTruthy();
    logoutpage = await myaccountpage.clickOnLogOut();
    expect(await logoutpage.isExistsLogoutHeader()).toBeTruthy();
    await logoutpage.clickContinueLogoutButton();
    expect(await homepage.isProductContentVisible()).toBeTruthy();

})