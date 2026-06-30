import { Page, expect } from '@playwright/test'

export class CartPage {

    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    async checkOut() {

        const checkout = this.page.locator('#checkout');

        if (await checkout.count() === 0) {
            throw new Error('Checkout button not found')
        }

        await checkout.click()
    }

}

