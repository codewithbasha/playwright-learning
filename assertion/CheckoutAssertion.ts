import {expect, Page}  from '@playwright/test'

export class CheckoutAssertion {

    private page;

    constructor(page: Page) {
        this.page = page
    }

    async stepOne(){
        await expect(this.page).toHaveURL(/checkout-step-one/)
    }

    async stepTwo(){
        await expect(this.page).toHaveURL(/checkout-step-two/)
    }
    

}