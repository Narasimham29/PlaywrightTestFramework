# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sampletest.spec.ts >> Logintest
- Location: tests/sampletest.spec.ts:6:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { testData } from '../testdata.config';
  3  | import { HomePage } from '../pages/Homepage';
  4  | import { LoginPage } from '../pages/LoginPage';
  5  | 
  6  | test('Logintest', async ({ page }) => {
  7  |   await page.goto(testData.baseURL);
  8  |  const homepage = new HomePage(page);
  9  |  homepage.gotoLoginPage();
  10 |  const loginpage = new LoginPage(page);
  11 |  loginpage.loginAccount(testData.email, testData.password)
> 12 |  page.waitForTimeout(3000)
     |       ^ Error: page.waitForTimeout: Test ended.
  13 | });
```