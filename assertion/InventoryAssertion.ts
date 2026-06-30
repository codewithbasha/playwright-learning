import {expect, Page}  from '@playwright/test'

export class InventoryAssertion {

    private page;

    constructor(page: Page) {
        this.page = page
    }

    async verfiyCartCount(count: number){
            await expect(this.page.locator('.shopping_cart_badge')).toHaveText(String(count)); 
    }
    

}