import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
 
  await page.goto('https://candy.ai/');
  await page.getByRole('button', { name: 'Anime' }).nth(1).click();
  await page.getByText('Login').click();
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('suryamowku4@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Goofy*0802');
  await page.getByRole('button', { name: 'Sign in' }).click();
 // await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Open user menu' }).click();
  await page.goto('https://candy.ai/generate-image');
});


