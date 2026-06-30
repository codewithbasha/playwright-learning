import {expect, Page}  from '@playwright/test'

export class CartAssertion {

    private page;

    constructor(page: Page) {
        this.page = page
    }

    async verifyProduct() {

        const removeBtn = this.page.locator('#remove-sauce-labs-backpack');

        if (await removeBtn.count() === 0) {
            throw new Error('Select product not available in cart')
        }

        await expect(removeBtn).toHaveText('Remove');

        await expect(this.page.locator('.inventory_item_name')).toBeVisible(); // Ensures order summary is correct
    }
    
    async onCartPage(){
        await expect(this.page).toHaveURL(/cart/)
    }

}