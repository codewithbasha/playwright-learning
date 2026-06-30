import {expect, Page}  from '@playwright/test'

export class ConfirmationAssertion {

    private page;

    constructor(page: Page) {
        this.page = page
    }

    async onComplete(){
        await expect(this.page).toHaveURL(/checkout-complete/)
    }

    async successMessage(){


        const msg = this.page.locator('.complete-header');

        if (await msg.count() === 0) {
            throw new Error('Order Confirmation message not displayed')
        }

        
        await expect(msg)
            .toHaveText('Thank you for your order!', { timeout: 5000 })
    }

}