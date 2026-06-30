import {test, login} from '../fixture/fixtures'

// Without Fixtures

// test('Login Test', async ({page})=>{

//     await page.goto('')
//     await page.fill('#user-name','')
//     await page.fill('#password','')
//     await page.click('')

// })

// test('Search Test', async ({page})=>{

//     await page.goto('')
//     await page.fill('#user-name','')
//     await page.fill('#password','')
//     await page.click('')


// })

// test('Cart Test', async ({page})=>{

//     await page.goto('')
//     await page.fill('#user-name','')
//     await page.fill('#password','')
//     await page.click('')


// })

// With Fixtures

test('Search Test', async ({loggedInPage})=>{

    // await login(page)

    await loggedInPage.click('#add-to-cart')

})