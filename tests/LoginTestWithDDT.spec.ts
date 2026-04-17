import {test, expect} from "@playwright/test"
import { DataProvider } from "../utis/dataProviders"
import { testData } from "../testdata.config"
import { HomePage } from "../pages/Homepage"
import { LoginPage } from "../pages/LoginPage"
import { MyAccountPage } from "../pages/MyAccountPage"



const loginData = DataProvider.readDataFromJSON(testData.loginDataPath)

for(const data of loginData){
        test(`Login verification with DDT ${data.testName} @master`, async({page})=>{

            await page.goto(testData.baseURL);
            await page.waitForLoadState();

            const homepage = new HomePage(page);
            await homepage.gotoLoginPage();
            const loginpage = new LoginPage(page);
            await expect(loginpage.loginButton).toBeVisible()
            await loginpage.loginAccount(data.email, data.password);
            const myaccount = new MyAccountPage(page);
            if(data.expected == 'success'){
                expect(await myaccount.isMyAccountHeaderExists()).toBeTruthy()
            }else{
                expect(await loginpage.getLoginFailureMessage()).toContain("No match for E-Mail Address and/or Password.")
            }
            await page.waitForTimeout(2000)
        })
}
