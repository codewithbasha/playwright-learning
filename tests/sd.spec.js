import { test, expect } from '@playwright/test';

test.describe('Practice Hub Tests', () => {

  test.beforeEach(async ({ page }) => {
    // await page.goto('http://localhost:5500/practice-hub.html'); // Update path
    await page.goto('file:///C:/Users/Admin/Desktop/practice-hub.html'); // Update path

  });

  // === DROPDOWNS ===
  test('Native select', async ({ page }) => {
    await page.selectOption('#native-select', 'india');
    await expect(page.locator('#native-select')).toHaveValue('india');
  });

  test('Multi-select', async ({ page }) => {
    await page.selectOption('#native-multi-select', ['red', 'blue']);
    const selected = await page.locator('#native-multi-select option:checked').all();
    expect(selected).toHaveLength(2);
  });

  test('Custom dropdown', async ({ page }) => {
    await page.locator('#custom-dropdown-trigger').click();
    await page.locator('#custom-dropdown-menu .option:has-text("Tokyo")').click();
    await expect(page.locator('#custom-dropdown-selected')).toHaveText('Tokyo');
  });

  test('Searchable dropdown', async ({ page }) => {
    await page.locator('#searchable-input').fill('Ind');
    await page.locator('#searchable-results .result-item:has-text("India")').click();
    await expect(page.locator('#searchable-input')).toHaveValue('India');
  });

  test('Chained dropdowns', async ({ page }) => {
    await page.selectOption('#chained-country', 'usa');
    await expect(page.locator('#chained-state')).not.toBeDisabled();
    await page.selectOption('#chained-state', 'California');
    await expect(page.locator('#chained-city')).not.toBeDisabled();
    await page.selectOption('#chained-city', 'Los Angeles');
  });

  // === TABLES ===
  test('Table row selection', async ({ page }) => {
    await page.locator('#basic-table tbody tr:has-text("John Doe") .row-checkbox').check();
    await expect(page.locator('#selected-count')).toHaveText('1');
  });

  test('Table delete row', async ({ page }) => {
    const row = page.locator('#basic-table tbody tr:has-text("John Doe")');
    await row.locator('.delete-btn').click();
    await page.once('dialog', dialog => dialog.accept());
    // await expect(row).not.toBeVisible();
  });

  test('Expandable row', async ({ page }) => {
    await page.locator('.expandable-row:has-text("#1001") .expand-icon').click();
    await expect(page.locator('.expandable-details[data-order="1001"]')).toBeVisible();
  });

  test('Pagination', async ({ page }) => {
    await expect(page.locator('#paginated-body tr')).toHaveCount(3);
    await page.locator('#next-page').click();
    await expect(page.locator('#paginated-body tr')).toHaveCount(3);
    await expect(page.locator('#page-info')).toHaveText('Page 2 of 4');
  });

  test('Inline edit', async ({ page }) => {
    const row = page.locator('#editable-table tbody tr').first();
    await row.locator('.inline-edit').click();
    await row.locator('.editable-field input').first().fill('New Task Name');
    await row.locator('.inline-save').click();
    await expect(row.locator('.editable-field').first()).toHaveText('New Task Name');
  });

  // === CALENDARS ===
  test('Native date', async ({ page }) => {
    await page.locator('#native-date').fill('2025-06-15');
    await expect(page.locator('#native-date')).toHaveValue('2025-06-15');
  });

  test('Native time', async ({ page }) => {
    await page.locator('#native-time').fill('14:30');
    await expect(page.locator('#native-time')).toHaveValue('14:30');
  });

  test('Custom calendar', async ({ page }) => {
    await page.locator('#custom-calendar-input').click();
    await page.locator('#cal-grid .day:not(.disabled):has-text("15")').click();
    await expect(page.locator('#custom-calendar-input')).toHaveValue('2026-06-15');
  });

  test('Date range', async ({ page }) => {
    await page.locator('#range-start').fill('2025-06-01');
    await page.locator('#range-end').fill('2025-06-30');
    await expect(page.locator('#range-start')).toHaveValue('2025-06-01');
  });

  test('Disabled dates', async ({ page }) => {
    await page.locator('#disabled-dates-cal').fill('2025-06-07'); // Saturday
    await expect(page.locator('#disabled-dates-message')).toContainText('Weekends');
  });

  // === MISC ===
  test('Loading spinner', async ({ page }) => {
    await page.locator('#load-data-btn').click();
    await expect(page.locator('#loading-spinner')).toBeVisible();
    await expect(page.locator('#loading-spinner')).not.toBeVisible({ timeout: 3000 });
    await expect(page.locator('#load-result')).toContainText('Loaded');
  });

  // test('Drag and drop', async ({ page }) => {
  //   const source = page.locator('#drag-source');
  //   const target = page.locator('#drag-target');
  //   await source.dragTo(target);
  //   await expect(target).toContainText('Dropped');
  // });

  test('Keyboard navigation', async ({ page }) => {
    await page.locator('#keyboard-input').fill('Hello World');
    await page.locator('#keyboard-input').press('Enter');
    await expect(page.locator('#keyboard-display')).toContainText('submitted with: Hello World');
  });

});