import { test, expect } from '@playwright/test';
const { loginpage } = require ('../pageObject/login')
const {generateImage} = require ('../pageObject/generateImage')
// login and generate the Image 
test.skip('Generate the Image', async ({ page }) => {
  // Navigate to the Candy AI homepage
  const username ="suryamowku4@gmail.com"
  const Password ="Goofy*0802"
  const loginPageHome = new loginpage(page);
  await loginPageHome.goTo();
  await loginPageHome.loginHomePage(username,Password);
  const generateImagePage1 = new generateImage(page);
  await generateImagePage1.generateImagePage();
  await generateImagePage1.generateImage2tokens();
  await page.screenshot({ path: '/Users/suryamowku/playwright_Automation/screenshots/GenerateImage.png', fullPage: true });

});

test('capture the Insufficient token error message', async ({ page }) => {
 


 // Navigate to the Candy AI homepage
 const username ="suryamowku4@gmail.com"
 const Password ="Goofy*0802"
 const loginPageHome = new loginpage(page);
 await loginPageHome.goTo();
 await loginPageHome.loginHomePage(username,Password);
 const generateImagePage2 = new generateImage(page);
 await generateImagePage2.generateImagePage();
 await generateImagePage2.generateImage32tokens();
 await generateImagePage2.insufficientTokens();
 await page.screenshot({ path: '/Users/suryamowku/playwright_Automation/screenshots/ErrorGenerateImage.png', fullPage: true });
 await generateImagePage2.closeIcon();


});
