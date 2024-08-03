import { test, expect } from '@playwright/test';
// login and generate the Image 
test('Generate the Image', async ({ page }) => {
  // Navigate to the Candy AI homepage
  await page.goto('https://candy.ai/');
  
  // Click the 'Anime' button (second instance of the button)
  await page.getByRole('button', { name: 'Anime' }).nth(1).click();
  
  // Click the 'Login' button
  await page.getByText('Login').click();
  
  // Click the email textbox to focus on it
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  
  // Fill in the email address
  await page.getByRole('textbox', { name: 'E-mail' }).fill('suryamowku4@gmail.com');
  
  // Fill in the password
  await page.getByRole('textbox', { name: 'Password' }).fill('Goofy*0802');
  
  // Click the 'Sign in' button
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  // Open the user menu
  await page.getByRole('button', { name: 'Open user menu' }).click();
  
  // Navigate to the image generation page
  await page.goto('https://candy.ai/generate-image');
  
  // Open the user menu again
  await page.getByRole('button', { name: 'Open user menu' }).click();
  
  // Click the 'Change' button
  await page.getByRole('button', { name: 'Change' }).click();
  
  // Click the 'Existing Character' button
  await page.getByRole('button', { name: 'Existing Character' }).click();
  
  // Select a character with a specific ID
  await page.locator('//*[@id="18835477"]').click();
  
  // Click the 'Select' button
  await page.getByRole('button', { name: 'Select' }).click();
  
  // Click the 'Cute Picture' option
  await page.getByText('Cute Picture').first().click();
  
  // Click the 'Swimming' option
  await page.getByText('Swimming').first().click();

  // Click 1 image option
  await page.locator('.flex > .mt-4 > div > div').first().click();
  
  // Click the 'Generate 2 tokens' button
  await page.getByRole('button', { name: 'Generate 2 tokens' }).click();
});

test('capture the Insufficient token error message', async ({ page }) => {
  // Navigate to the Candy AI homepage
  await page.goto('https://candy.ai/');
  
  // Click the 'Anime' button (second instance of the button)
  await page.getByRole('button', { name: 'Anime' }).nth(1).click();
  
  // Click the 'Login' button
  await page.getByText('Login').click();
  
  // Click the email textbox to focus on it
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  
  // Fill in the email address
  await page.getByRole('textbox', { name: 'E-mail' }).fill('suryamowku4@gmail.com');
  
  // Fill in the password
  await page.getByRole('textbox', { name: 'Password' }).fill('Goofy*0802');
  
  // Click the 'Sign in' button
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  // Open the user menu
  await page.getByRole('button', { name: 'Open user menu' }).click();
  
  // Navigate to the image generation page
  await page.goto('https://candy.ai/generate-image');
  
  // Open the user menu again
  await page.getByRole('button', { name: 'Open user menu' }).click();
  
  // Click the 'Change' button
  await page.getByRole('button', { name: 'Change' }).click();
  
  // Click the 'Existing Character' button
  await page.getByRole('button', { name: 'Existing Character' }).click();
  
  // click on Anime
  await page.getByText('Anime').click();

  // Select a character with a specific ID
  await page.locator('//*[@id="17766444"]').click();
  
  // Click the 'Select' button
  await page.getByRole('button', { name: 'Select' }).click();
  
  // Click the 'Walking on the beach' option
  await page.getByText('Walking on the beach').first().click();
  
  // Click the 'Lying down' option
  await page.getByText('Lying down').first().click();

  // Click 16 image option
  await page.locator('.mt-4 > div > div:nth-child(4)').click();
  
  // Click the 'Generate Image' button
  await page.getByRole('button', { name: 'Generate 32 tokens' }).click();

  // Insufficient Tokens! popup validation
  await page.getByText('Insufficient Tokens! Oops!').click();

  // it will take the screenshot of the Insufficient Tokens! popup
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  // click on close 
  await page.locator('#image-generation-modal-container').getByRole('link').first().click();
});
