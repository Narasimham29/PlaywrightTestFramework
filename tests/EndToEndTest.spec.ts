import {test, expect} from "@playwright/test"
import {testData} from "../testdata.config"
import { HomePage } from "../pages/Homepage"
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import {SearchResults} from "../pages/SearchResults"
import {ProductPage} from "../pages/ProductPage"

let homepage : HomePage;
let loginpage : LoginPage;
let myaccountpage : MyAccountPage;
let searchResults : SearchResults;
let productpage :ProductPage;

test.beforeEach("initialization ", async({page})=>{
    test.slow(); 
    await page.goto(testData.baseURL);
    await page.waitForLoadState()
    homepage = new HomePage(page);
})

test("Verify the end to end test till add product to cart @master", async ({page})=>{
    test.slow(); 
    expect(await homepage.isHomePageExists()).toBeTruthy()
    loginpage = await homepage.gotoLoginPage();
    await page.waitForTimeout(2000)

    expect(await loginpage.isLoginPageExist()).toBeTruthy();
    myaccountpage = await loginpage.loginAccount(testData.email, testData.password);

    expect(await myaccountpage.isSearchBarExists()).toBeTruthy();
    searchResults = await myaccountpage.searchProduct(testData.productName)

    expect(await searchResults.isSearchPageExists()).toBeTruthy();
    expect(await searchResults.isSearchItemExist(testData.productName)).toBeTruthy()

    productpage = await searchResults.selectSearchItem(testData.productName);
    expect (await productpage.addToCartButton).toBeVisible();

    expect(await productpage.verifytheProduct(testData.productName)).toBeTruthy()
})

test.afterEach("",async({page})=>{
    await page.waitForTimeout(3000)
})