 import {Page} from '@playwright/test'
 
export class LogoutPage{
 
    private page: Page
 
    constructor(page: Page){
        this.page = page
     }
     
    async logout(){

        const menu = this.page.locator('#react-burger-menu-btn');

        if (await menu.count() === 0) {
            throw new Error('Menu button not found')
        }

        await menu.click()

        const logout = this.page.locator('#logout_sidebar_link');

        if (await logout.count() === 0) {
            throw new Error('Logout link not found')
        }

        await logout.click()
    }
    

}