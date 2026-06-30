import {test} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LogoutPage } from '../pages/LogoutPage';

import { InventoryAssertion } from '../assertion/InventoryAssertion';
import { ConfirmationAssertion } from '../assertion/ConfirmationAssertion';

import { CreateUser } from '../utils/FakerData'
// import testData from '../data/testData.json'
import testData from '../data/testData.json' with {type: 'json'};

import { ExcelReader } from '../utils/ExcelReader';
import { ExcelWriter } from '../utils/ExcelWriter';

test('Sauce demo Practice POM', async ({page}) =>{

    const users : any = ExcelReader.getData('Sheet1')

    // for (const cred of users) {

    try {
    
    const loginPage = new LoginPage(page)
    await loginPage.goto(testData.url.prod)
    await page.waitForTimeout(2000)
    await loginPage.login(testData.user[3].username, testData.user[3].password)
    // await loginPage.login(cred.Username, cred.Password)

    const inventoryPage = new InventoryPage(page)
    const inventoryAssert = new InventoryAssertion(page)
    await inventoryPage.addProduct(testData.product.productName)
    await inventoryAssert.verfiyCartCount(1)
    await inventoryPage.openCart()

    const cartPage = new CartPage(page)
    // await cartPage.verifyProduct()
    await cartPage.checkOut()

    const checkoutPage = new CheckoutPage(page)
    await checkoutPage.fillForm(CreateUser.firstName, CreateUser.lastName, CreateUser.zipcode)
    await checkoutPage.continue()
    await checkoutPage.finish()

    const confirmationAssert = new ConfirmationAssertion(page)
    confirmationAssert.onComplete()
    confirmationAssert.successMessage()

    const logoutPage = new LogoutPage(page)
    await logoutPage.logout()
    }
    catch(error: any) {
        console.log(`Test Failed for User: ${testData.user[0].username}`)

        console.log(`Reason: ${error.message}`)

        await page.screenshot(
            {
                path :`Error-${Date.now()}.png`
            }
        )
    }
    }
);



// test('Write Excel', async ()=> {
//     ExcelWriter.writeData()
// })