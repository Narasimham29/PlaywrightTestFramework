# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginLogoutE2e.spec.ts >> Verify login and logout functionality
- Location: tests/LoginLogoutE2e.spec.ts:28:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test"
  2  | import { HomePage } from "../pages/Homepage";
  3  | import { testData } from "../testdata.config";
  4  | import { LoginPage } from "../pages/LoginPage";
  5  | import { MyAccountPage } from "../pages/MyAccountPage";
  6  | import { LogoutPage } from "../pages/LogoutPage";
  7  | 
  8  | let homepage: HomePage;
  9  | let loginpage: LoginPage;
  10 | let myaccountpage : MyAccountPage;
  11 | let logoutpage : LogoutPage;
  12 | 
  13 | test.beforeEach(async ({ page }) => {
  14 |     await page.goto(testData.baseURL);
  15 |     await page.waitForLoadState();
  16 | 
  17 |     homepage = new HomePage(page)
  18 |     loginpage = new LoginPage(page);
  19 |     myaccountpage = new MyAccountPage(page);
  20 |     logoutpage = new LogoutPage(page);
  21 | })
  22 | 
  23 | test.afterEach(async ({ page }) => {
  24 |     await page.waitForTimeout(4000)
  25 |     await page.close();
  26 | })
  27 | 
  28 | test("Verify login and logout functionality", async ({page})=>{
  29 |     expect(await homepage.isProductContentVisible()).toBeTruthy();
  30 |     await homepage.gotoLoginPage();
  31 |     
  32 |     await expect(await loginpage.isLoginPageExist).toBeTruthy();
  33 | 
  34 |     await loginpage.loginAccount(testData.email, testData.password);
  35 | 
  36 |     expect(await myaccountpage.isMyAccountHeaderExists()).toBeTruthy();
  37 |     await myaccountpage.clickOnLogOut();
  38 |     expect(await logoutpage.isExistsLogoutHeader()).toBeTruthy();
  39 |     await logoutpage.clickContinueLogoutButton();
> 40 |     expect(await myaccountpage.isMyAccountHeaderExists()).toBeTruthy();
     |                                                           ^ Error: expect(received).toBeTruthy()
  41 | 
  42 | })
```