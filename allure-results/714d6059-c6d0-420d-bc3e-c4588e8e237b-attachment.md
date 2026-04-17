# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.ts >> Logintest with static credentials
- Location: tests/loginTest.spec.ts:44:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#input-email')
    - waiting for" https://tutorialsninja.com/demo/" navigation to finish...
    - navigated to "https://tutorialsninja.com/demo/"

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test"
  2  | import { MyAccountPage } from "./MyAccountPage";
  3  | 
  4  | 
  5  | export class LoginPage {
  6  |     readonly page: Page;
  7  |     readonly usernameInut: Locator;
  8  |     readonly passwordInput: Locator;
  9  |     readonly loginButton: Locator;
  10 |     readonly loginfailureMessage: Locator;
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 |         this.usernameInut = page.locator("#input-email")
  15 |         this.passwordInput = page.locator("#input-password")
  16 |         this.loginButton = page.locator("input[type='submit']")
  17 |         this.loginfailureMessage = page.locator("div.alert-danger")
  18 |     }
  19 | 
  20 |     async loginAccount(username: string, password: string) {
> 21 |         await this.usernameInut.fill(username);
     |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  22 |         await this.passwordInput.fill(password);
  23 |         await this.loginButton.click();
  24 |         return new MyAccountPage(this.page);
  25 |     }
  26 |     async getLoginFailureMessage() {
  27 |         return await this.loginfailureMessage.textContent()
  28 |     }
  29 |     async isLoginPageExist(){
  30 |         return await this.loginButton.isVisible()
  31 |     }
  32 | }
```