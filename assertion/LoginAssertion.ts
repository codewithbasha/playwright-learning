import {expect, Page}  from '@playwright/test'

export class LoginAssertion {

    private page;

    constructor(page: Page) {
        this.page = page
    }

    async onInventoryPage(){
        await expect(this.page).toHaveURL(/inventory/)
    }

}