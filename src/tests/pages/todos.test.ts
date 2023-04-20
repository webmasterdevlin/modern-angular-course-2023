import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // mock heroes http request
  await page.route('**/todos', (route: any) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify([
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
      ]),
    });
  });
});

test('Should get list of todos', async ({ page }) => {
  await page.goto('/todos');

  const row1 = page.getByText('delectus aut autem');
  await expect(row1).toBeVisible();

  const row2 = page.getByText('quis ut nam facilis et officia qui');
  await expect(row2).toBeVisible();
});
