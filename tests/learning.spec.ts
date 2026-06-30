import {test, expect} from '@playwright/test'
import { ExcelReader } from '../utils/ExcelReader';



test('pressSequentially', async ({page}) =>{

    await page.goto('https://www.saucedemo.com/')

    // await page.locator('#user-name').fill('standard_user')
    await page.locator('#user-name').pressSequentially('standard_user', {
  delay: 100
});

await page.locator('#password').pressSequentially('secret_sauce', {
  delay: 100
});
    // await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
})

test.only('Login using Excel Data', async ({ page }) => {

    interface User {
    username: string;
    password: string;
    // add other fields as needed
}

    const users : any = ExcelReader.getData('Sheet1') as User[]

    console.log(users);

    // Loop through users and test each one
    for (const user  of users) {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill(user.Username);

    await page.locator('#password').fill(user.Password)
    await page.locator('#login-button').click()

    }
})