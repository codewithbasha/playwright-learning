import{test, expect} from '@playwright/test'

test('Native select', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.selectOption('#native-select','india')

    await expect(page.locator('#native-select')).toHaveValue('india')

})

test('Multi-select', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.selectOption('#native-multi-select',['red','blue'])

    const selected = await page.locator('#native-multi-select option:checked').all()

    expect(selected).toHaveLength(2)

})


test('Custom dropdown', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('#custom-dropdown-trigger').click()

    await page.locator('#custom-dropdown-menu .option:has-text("Tokyo")').click()

    expect(page.locator('#custom-dropdown-selected')).toHaveText('Tokyo')

})


test('Searchable dropdown', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('#searchable-input').fill('Ind')

    await page.locator('#searchable-results .result-item:has-text("India")').click()

    await expect(page.locator('#searchable-input')).toHaveValue('India')

})


test('Chained dropdowns', async({page})=>{

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

   await page.selectOption('#chained-country','usa')

   await expect(page.locator('#chained-state')).not.toBeDisabled()

   await page.selectOption('#chained-state','California')

   await expect(page.locator('#chained-city')).not.toBeDisabled()

   await page.selectOption('#chained-city','Los Angeles')

})

