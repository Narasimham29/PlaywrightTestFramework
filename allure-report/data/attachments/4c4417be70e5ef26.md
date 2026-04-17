# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.ts >> Logintest with static credentials
- Location: tests/loginTest.spec.ts:44:6

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#input-email')

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { testData } from '../testdata.config';
  3  | import { HomePage } from '../pages/Homepage';
  4  | import { LoginPage } from '../pages/LoginPage';
  5  | import { DataProvider } from '../utis/dataProviders';
  6  | import { MyAccountPage } from '../pages/MyAccountPage'
  7  | 
  8  | 
  9  | /*
  10 | test('Logintest with static credentials', async ({ page }) => {
  11 |   await page.goto(testData.baseURL);
  12 |  const homepage = new HomePage(page);
  13 |  homepage.gotoLoginPage();
  14 |  const loginpage = new LoginPage(page);
  15 |  loginpage.loginAccount(testData.email, testData.password)
  16 |  await page.waitForTimeout(5000)
  17 | }); 
  18 | */
  19 | 
  20 | let homepage: HomePage;
  21 | let loginpage: LoginPage;
  22 | let myAccountpage: MyAccountPage;
  23 | 
  24 | test.beforeEach(async ({ page }) => {
  25 |   await page.goto(testData.baseURL);
  26 |   await page.waitForLoadState();
  27 | 
  28 |   homepage = new HomePage(page);
  29 |   loginpage = new LoginPage(page);
  30 |   myAccountpage = new MyAccountPage(page);
  31 | })
  32 | 
  33 | test.afterEach(async ({ page }) => {
> 34 |   await page.waitForTimeout(4000)
     |              ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  35 |   await page.close();
  36 | })
  37 | //test.describe
  38 | test("Verify login with data provider", async ({ page }) => {
  39 |   await homepage.gotoLoginPage();
  40 |   let logData = DataProvider.readDataFromJSON(testData.loginDataPath)
  41 |   await loginpage.loginAccount(logData.username, logData.password)
  42 | })
  43 | 
  44 | test.only('Logintest with static credentials', async ({ page }) => {
  45 |   await homepage.gotoLoginPage();
  46 |   await loginpage.loginAccount(testData.email, testData.password)
  47 |   await page.waitForLoadState()
  48 |   expect(await myAccountpage.isMyAccountHeaderExists()).toBeTruthy()
  49 | }); 
```