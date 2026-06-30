/*
import {Page} from '@playwright/test'

export class LoginPage{

    private page: Page

    constructor(page: Page){
        this.page = page
    }
    
    async goto() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async login() {
        await this.page.locator('#user-name').fill('standard_user')
        await this.page.locator('#password').fill('secret_sauce')
        await this.page.locator('#login-button').click()
    }

    
}

*/



import {Page} from '@playwright/test'

export class LoginPage{

    private page : Page
    readonly username;
    readonly password;
    readonly loginBtn;  // Instance Variables

    constructor(page : Page){
        this.page = page
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button'); 
    }

    async goto(url: string){

        console.log(url)
        console.log(typeof url)

        if(!url){
            throw new Error("URL is empty")
        }
        await this.page.goto(url)
    }

    async login(user: any, pass: any){

        console.log(typeof user)

        // if (user.trim() === null)

        if (!user?.trim())                       // Optional Chaining
        {
            throw new Error("Username cannot be empty")
        }

        // if (pass.trim() === null)
        if (!pass?.trim())                       // Optional Chaining
        {
            throw new Error("Password cannot be empty")
        }
        await this.username.fill(user);
        await this.page.waitForTimeout(2000)
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

}
