import {Page, expect} from '@playwright/test'

export class InventoryPage{

    private page: Page

    constructor(page: Page){
        this.page = page
    }

    async addProduct(productName: string){
        const product = this.page.locator('.inventory_item', {
    has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    const count = await product.count()

    if (count === 0){
        throw new Error('Sauce Labs Backpack not found')
    }

    await product.locator('button').click();
    }
    

    async openCart() {

        const cart = this.page.locator('.shopping_cart_link');
        await cart.click()
        
    }
    

}