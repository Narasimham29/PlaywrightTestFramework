# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.ts >> Logintest with static credentials
- Location: tests/loginTest.spec.ts:44:6

# Error details

```
Error: locator.isVisible: Error: strict mode violation: locator('#content h2') resolved to 4 elements:
    1) <h2>My Account</h2> aka locator('#content').getByRole('heading', { name: 'My Account' })
    2) <h2>My Orders</h2> aka getByRole('heading', { name: 'My Orders' })
    3) <h2>My Affiliate Account</h2> aka getByRole('heading', { name: 'My Affiliate Account' })
    4) <h2>Newsletter</h2> aka getByRole('heading', { name: 'Newsletter' })

Call log:
    - checking visibility of locator('#content h2')

```

# Test source

```ts
  1  | import {Page,Locator} from "@playwright/test"
  2  | 
  3  | export class MyAccountPage{
  4  |     readonly page : Page;
  5  |     readonly myAccountHeader : Locator;
  6  | 
  7  |     constructor(page : Page){
  8  |         this.page = page;
  9  |         this.myAccountHeader = page.locator("#content h2");
  10 |     }
  11 | 
  12 |     async isMyAccountHeaderExists(){
> 13 |         return await this.myAccountHeader.isVisible()
     |                                           ^ Error: locator.isVisible: Error: strict mode violation: locator('#content h2') resolved to 4 elements:
  14 |     }
  15 | }
```