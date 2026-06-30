import { test, expect } from '@playwright/test'

test('Native date', async ({ page }) => {

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('#native-date').fill('2026-06-29')

    await expect(page.locator('#native-date')).toHaveValue('2026-06-29')

})

test('Native time', async ({ page }) => {

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('#native-time').fill('18:45')

    await expect(page.locator('#native-time')).toHaveValue('18:45')

})

test('Custom calendar', async ({ page }) => {

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('#custom-calendar-input').click()

    await page.locator('#cal-grid .day:not(.disabled):has-text("29")').click()

    await expect(page.locator('#custom-calendar-input')).toHaveValue('2026-06-29')

})


test('Disabled dates', async ({ page }) => {

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('#disabled-dates-cal').fill('2026-06-28')  // Sunday

    await expect(page.locator('#disabled-dates-message')).toContainText('Weekends')

})

test('Loading spinner', async ({ page }) => {

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('#load-data-btn').click()

    await expect(page.locator('#loading-spinner')).toBeVisible()

    await expect(page.locator('#loading-spinner')).not.toBeVisible({ timeout: 3000 })

    await expect(page.locator('#load-result')).toContainText('Loaded')

})


test('Keyboard navigation', async ({ page }) => {

    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html')

    await page.locator('#keyboard-input').fill('Hello World')

    await page.locator('#keyboard-input').press('Enter')

    await expect(page.locator('#keyboard-display')).toContainText('submitted with: Hello World')

})