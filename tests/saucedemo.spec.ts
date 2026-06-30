import {test, expect} from '@playwright/test'

test.only('Sauce demo Practice', async ({page}) =>{

    await page.goto('https://www.saucedemo.com/')

    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()


    await expect(page).toHaveURL(/inventory/);

//     const product = page.locator('.inventory_item')
//   .filter({ hasText: 'Sauce Labs Backpack' });

    const product = page.locator('.inventory_item', {
    has: page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' })
    });

    await product.locator('button').click();

    // await expect(page.locator('.shopping_cart_badge')).toHaveCount(1);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); 

    await page.locator('.shopping_cart_link').click()

    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('#remove-sauce-labs-backpack')).toHaveText('Remove');

    await expect(page.locator('.inventory_item_name')).toBeVisible(); // Ensures order summary is correct

    await page.locator('#checkout').click()

    await expect(page).toHaveURL(/checkout-step-one/); // This is important for debugging failures early

    await page.locator('#first-name').fill('Hassain')

    await page.locator('#last-name').fill('Basha')

    await page.locator('#postal-code').fill('600117')

    await page.locator('#continue').click()

    await expect(page).toHaveURL(/checkout-step-two/); 

    await page.locator('#finish').click()

    await expect(page).toHaveURL(/checkout-complete/);

    await expect(page.locator('.complete-header'))
            .toHaveText('Thank you for your order!', { timeout: 5000 })

    await page.locator('#react-burger-menu-btn').click()

    await page.locator('#logout_sidebar_link').click()

    await expect(page.locator('#login-button')).toBeVisible()
    
    await expect(page).toHaveURL(/saucedemo/);  // to avoid environmental issues



})