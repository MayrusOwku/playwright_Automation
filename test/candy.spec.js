import { test, expect } from '@playwright/test';
const { loginpage } = require ('../pageObject/login')
const {generateImage} = require ('../pageObject/generateImage')
// login and generate the Image 
test('Generate the Image', async ({ page }) => {
  // Navigate to the Candy AI homepage
  const username ="suryamowku4@gmail.com"
  const Password ="Goofy*0802"
  const loginPageHome = new loginpage(page);
  await loginPageHome.goTo();
  await loginPageHome.loginHomePage(username,Password);
  
  const generateImagePage1 = new generateImage(page);
  // // Navigate to the image generation page
   await generateImagePage1.goToGenerateImage();
   await generateImagePage1.generateImagePage();
   await generateImagePage1.generateImage2tokens();

});

test('capture the Insufficient token error message', async ({ page }) => {
 

 // Navigate to the Candy AI homepage
 const username ="suryamowku4@gmail.com"
 const Password ="Goofy*0802"
 const loginPageHome = new loginpage(page);
 await loginPageHome.goTo();
 await loginPageHome.loginHomePage(username,Password);
 const generateImagePage2 = new generateImage(page);
 // // Navigate to the image generation page
 await generateImagePage2.goToGenerateImage();
 await generateImagePage2.generateImagePage();
 await generateImagePage2.generateImage32tokens();
 await generateImagePage2.insufficientTokens();


 

 // // Navigate to


});
