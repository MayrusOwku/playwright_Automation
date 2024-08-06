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
  
  const generateImage2 = new generateImage(page);

  // // Navigate to the image generation page
   await generateImage2.goToGenerateImage();
   await generateImage2.generateImagePage();
   await generateImage2.generateImage2tokens();

});

test('capture the Insufficient token error message', async ({ page }) => {
 

 // Navigate to the Candy AI homepage
 const username ="suryamowku4@gmail.com"
 const Password ="Goofy*0802"
 const loginPageHome = new loginpage(page);
 await loginPageHome.goTo();
 await loginPageHome.loginHomePage(username,Password);
 
 const generateImage2 = new generateImage(page);
 // // Navigate to the image generation page
 await generateImage2.goToGenerateImage();
 await generateImage2.generateImagePage();
 await generateImage2.generateImage32tokens();
 await generateImage2.insufficientTokens();


 

 // // Navigate to


});
