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

test('Should be able to send a post request', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('button', { name: 'posts 0' }).click();
  await page.locator('#title').click();
  await page.locator('#title').fill('test title');
  await page.locator('#title').press('Tab');
  await page.locator('#body').fill('test body');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByTestId('post-title')).toHaveCount(3);
});
