import { test, expect } from '@playwright/test';
import { testData } from '../testdata.config';
import { HomePage } from '../pages/Homepage';
import { LoginPage } from '../pages/LoginPage';
import { DataProvider } from '../utis/dataProviders';
import { MyAccountPage } from '../pages/MyAccountPage'


/*
test('Logintest with static credentials', async ({ page }) => {
  await page.goto(testData.baseURL);
 const homepage = new HomePage(page);
 homepage.gotoLoginPage();
 const loginpage = new LoginPage(page);
 loginpage.loginAccount(testData.email, testData.password)
 await page.waitForTimeout(5000)
}); 
*/

let homepage: HomePage;
let loginpage: LoginPage;
let myAccountpage: MyAccountPage;

test.beforeEach(async ({ page }) => {
  await page.goto(testData.baseURL);
  await page.waitForLoadState();

  homepage = new HomePage(page);
  loginpage = new LoginPage(page);
  myAccountpage = new MyAccountPage(page);
})

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(4000)
  await page.close();
})
//test.describe
test("Verify login with data provider", async ({ page }) => {
  await homepage.gotoLoginPage();
  let logData = DataProvider.readDataFromJSON(testData.loginDataPath)
  await loginpage.loginAccount(logData.username, logData.password)
})

test.only('Logintest with static credentials', async ({ page }) => {
  await homepage.gotoLoginPage();
  await loginpage.loginAccount(testData.email, testData.password)
  await page.waitForLoadState()
  expect(await myAccountpage.isMyAccountHeaderExists()).toBeTruthy()
}); 