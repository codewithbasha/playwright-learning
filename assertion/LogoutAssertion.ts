import {expect, Page}  from '@playwright/test'

export class LogoutAssertion {

    private page;

    constructor(page: Page) {
        this.page = page
    }

    async onLoginPage(){
        await expect(this.page.getByRole('button', {name:'Login'})).toHaveText('Login')

}
}