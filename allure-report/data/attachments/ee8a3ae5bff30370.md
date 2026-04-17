# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestWithDDT.spec.ts >> Login verification with DDT invalid Login
- Location: tests/LoginTestWithDDT.spec.ts:13:13

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test"
  2  | import { DataProvider } from "../utis/dataProviders"
  3  | import { testData } from "../testdata.config"
  4  | import { HomePage } from "../pages/Homepage"
  5  | import { LoginPage } from "../pages/LoginPage"
  6  | import { MyAccountPage } from "../pages/MyAccountPage"
  7  | 
  8  | 
  9  | 
  10 | const loginData = DataProvider.readDataFromJSON(testData.loginDataPath)
  11 | 
  12 | for(const data of loginData){
  13 |         test(`Login verification with DDT ${data.testName}`, async({page})=>{
  14 | 
  15 |             await page.goto(testData.baseURL);
  16 |             await page.waitForLoadState();
  17 | 
  18 |             const homepage = new HomePage(page);
  19 |             await homepage.gotoLoginPage();
  20 |             const loginpage = new LoginPage(page);
  21 |             await expect(loginpage.loginButton).toBeVisible()
  22 |             await loginpage.loginAccount(data.email, data.password);
  23 |             const myaccount = new MyAccountPage(page);
  24 |             if(data.expected == 'Success'){
  25 |                 expect(await myaccount.isMyAccountHeaderExists()).toBeTruthy()
  26 |             }else{
  27 |                 expect(await loginpage.getLoginFailureMessage()).toContain("No match for E-Mail Address and/or Password.")
  28 |             }
> 29 |             page.waitForTimeout(3000)
     |                  ^ Error: page.waitForTimeout: Test ended.
  30 |         })
  31 | }
  32 | 
```