import {test as base} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { ConfirmationPage } from '../pages/ConfirmationPage'
import { LogoutPage } from '../pages/LogoutPage'

import { LoginAssertion } from '../assertion/LoginAssertion'
import { InventoryAssertion } from '../assertion/InventoryAssertion'
import { CartAssertion } from '../assertion/CartAssertion'
import { CheckoutAssertion } from '../assertion/CheckoutAssertion'
import { ConfirmationAssertion } from '../assertion/ConfirmationAssertion'
import { LogoutAssertion } from '../assertion/LogoutAssertion'

type MyFixtures = {
    loginPage : LoginPage,
    inventoryPage : InventoryPage,
    cartPage : CartPage,
    checkoutPage : CheckoutPage,
    confirmationPage : ConfirmationPage,
    logoutPage : LogoutPage,

    loginAssert : LoginAssertion,
    inventoryAssert : InventoryAssertion,
    cartAssert : CartAssertion,
    checkoutAssert: CheckoutAssertion,
    confirmationAssert : ConfirmationAssertion,
    logoutAssert : LogoutAssertion
}

export const test = base.extend<MyFixtures>({

    loginPage : async({page}, use)=>{
        await use(new LoginPage(page))
    }, 

    inventoryPage : async({page}, use)=>{
        await use(new InventoryPage(page))
    }, 


    cartPage : async({page}, use)=>{
        await use(new CartPage(page))
    }, 


    checkoutPage : async({page}, use)=>{
        await use(new CheckoutPage(page))
    }, 


    confirmationPage : async({page}, use)=>{
        await use(new ConfirmationPage(page))
    }, 


    logoutPage : async({page}, use)=>{
        await use(new LogoutPage(page))
    }, 

    loginAssert : async({page}, use) => {
        await use(new LoginAssertion(page))
    },

    inventoryAssert : async({page}, use) => {
        await use(new InventoryAssertion(page))
    },

    cartAssert : async({page}, use) => {
        await use(new CartAssertion(page))
    },

    checkoutAssert : async({page}, use) => {
        await use(new CheckoutAssertion(page))
    },

    confirmationAssert : async({page}, use) => {
        await use(new ConfirmationAssertion(page))
    },

    logoutAssert : async({page}, use) => {
        await use(new LogoutAssertion(page))
    }




})

