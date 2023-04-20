import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // mock heroes http request
  await page.route('**/users', (route: any) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
      ]),
    });
  });
});

test('Should get list of users', async ({ page }) => {
  await page.goto('/users');
  const locator = page.getByRole('heading', { name: 'Users Works!' });
  await expect(locator).toBeVisible();
  // const row1 = page.getByText('Users Works!');
  // await expect(row1).toBeVisible();

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
