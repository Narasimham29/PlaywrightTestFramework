import { test, expect } from "@playwright/test"
import { testData } from "../testdata.config"
import { HomePage } from "../pages/Homepage";

let homepage : HomePage;

test.beforeEach("", async ({ page }) => {

    await page.goto(testData.baseURL);
    await page.waitForLoadState();
    homepage = new HomePage(page);

})
test("verify the functionality of search products", async ({ page }) => {
    await page.goto(testData.baseURL);
    await page.waitForLoadState();
    let searhResultspage = await homepage.searchProduct(testData.productName)
    let resultstatus = await searhResultspage.isSearchPageExists();
    if(resultstatus){
    expect(resultstatus ).toBeTruthy()
    searhResultspage.getSearchResults(testData.productName)
    }else{
        console.log(`Search item not found : ${testData.productName}`)
    }
    await page.waitForTimeout(3000)
})