import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // mock heroes http request
  await page.route('**/posts', (route: any) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify([
        {
          userId: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        },
      ]),
    });
  });
});

test('Should get list of posts', async ({ page }) => {
  await page.goto('/posts');
  const row1 = page.getByText('Posts Works!');
  await expect(row1).toBeVisible();

  // const titleField = page.locator('#title');
  // const bodyField = page.locator('#body');
  // const submit = page.locator('button', { hasText: 'submit' });
  // await expect(titleField).toBeVisible();
  // await expect(bodyField).toBeVisible();
  // await expect(submit).toBeVisible();

  // await titleField.fill('test title');
  // await bodyField.fill('test body');

  // await Promise.all([page.getByText('test title'), submit.click()]);
});
