import {test} from '../fixture/test'

// import testData from '../data/testData.json'
import testData from '../data/testData.json' with {type: 'json'};

import { CreateUser } from '../utils/FakerData'

test('end to end flow using POM and Fixtures', async({

    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
    confirmationPage,
    logoutPage,

    loginAssert,
    inventoryAssert,
    cartAssert,
    checkoutAssert,
    confirmationAssert,
    logoutAssert
})=>{


    try {
    await loginPage.goto(testData.url.prod)
    await loginPage.login(testData.user[3].username, testData.user[3].password)
    await loginAssert.onInventoryPage()

    await inventoryPage.addProduct(testData.product.productName)
    await inventoryAssert.verfiyCartCount(1)
    await inventoryPage.openCart()

    await cartAssert.onCartPage()
    await cartPage.checkOut()

    await checkoutAssert.stepOne()
    await checkoutPage.fillForm(CreateUser.firstName, CreateUser.lastName, CreateUser.zipcode)
    await checkoutPage.continue()
    await checkoutAssert.stepTwo()
    await checkoutPage.finish()

    await confirmationAssert.onComplete()
    await confirmationAssert.successMessage()

    await logoutPage.logout()
    await logoutAssert.onLoginPage()
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

})