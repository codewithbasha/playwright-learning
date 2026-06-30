import {Page, expect} from '@playwright/test'
 
 export class ConfirmationPage{
 
    private page: Page
 
    constructor(page: Page){
        this.page = page
     }
     
//     async successMessage(){


//         const msg = this.page.locator('.complete-header');

//         if (await msg.count() === 0) {
//             throw new Error('Order Confirmation message not displayed')
//         }

        
//         await expect(msg)
//             .toHaveText('Thank you for your order!', { timeout: 5000 })
//     }
} 