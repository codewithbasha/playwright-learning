 import {Page} from '@playwright/test'
 
 export class CheckoutPage{
 
     private page: Page
 
     constructor(page: Page){
         this.page = page
     }


    async fillForm(fname: string, lname: string, zip: string){
        await this.page.locator('#first-name').fill(fname)

        await this.page.locator('#last-name').fill(lname)

        await this.page.locator('#postal-code').fill(zip)
    }
    

    async continue(){

        const continueBtn = this.page.locator('#continue');

        if (await continueBtn.count() === 0) {
            throw new Error('Continue button not found')
        }

        await continueBtn.click()  
    }
    
    async finish(){
        const finishBtn = this.page.locator('#finish');

        if (await finishBtn.count() === 0) {
            throw new Error('Finish button not found')
        }

        await finishBtn.click()  
    }
    

}