import {test} from '@playwright/test'

test('Async and Await', async ( { page }) => {

    await page.goto('https://www.google.com/')

    await page.fill('#search', 'Playwright')

    await page.locator('').click()

})