import{test, expect} from '@playwright/test'

test('Table row selection', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('#basic-table tbody tr:has-text("John Doe") .row-checkbox ').check()

    await page.waitForTimeout(2000)

    await expect(page.locator('#selected-count')).toHaveText('1')

})

test('Table delete row', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    const row = page.locator('#basic-table tbody tr:has-text("John Doe")')
    
    await row.locator('.delete-btn').click()

    page.once('dialog', dialog => dialog.accept())


    // await expect(page.locator('#selected-count')).toHaveText('1')

})


test('Expandable row', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('.expandable-row:has-text("#1001") .expand-icon').click()

    await expect(page.locator('.expandable-details[data-order="1001"]')).toBeVisible()

})

test('Pagination', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await expect(page.locator('#paginated-body tr')).toHaveCount(3)

    await page.locator('#next-page').click()

    await expect(page.locator('#page-info')).toHaveText('Page 2 of 4')

})

test('Inline edit', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    const row = page.locator('#editable-table tbody tr').first()

    await row.locator('.inline-edit').click()

    await row.locator('.editable-field input').first().fill('New Task Name')

    await row.locator('.inline-save').click()

    await expect(row.locator('.editable-field').first()).toHaveText('New Task Name');

})
