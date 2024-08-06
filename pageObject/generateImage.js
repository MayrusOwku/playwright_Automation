class generateImage {

   constructor(page)
   {
       this.page = page;
 
       // Locate the 'Anime' button (second instance of the button)
       this.openUserMenu =  page.getByRole('button', { name: 'Open user menu' });
       
       // Locate the 'Login' button
       this.changeLocator = page.getByRole('button', { name: 'Change' });
       
       // Locate the email textbox to focus on it
       this.existingCharacterLocator = page.getByRole('button', { name: 'Existing Character' });
   
       // Locate the password
       this.realisticLocator = page.getByText('Realistic');
       
       // Locate the 'Sign in' button
       this.characterImageLocator = page.locator('//*[@id="42594464"]');
     
       // Locate the 'Sign in' button
       this.selectLocator = page.getByRole('button', { name: 'Select' });

       //
       this.cutePicFilterLocatorutePicFilterLocator = page.getByText('Cute Picture').first()

       //
       this.swimmingFilterLocator = page.getByText('Swimming').first()

       //
       this.onePictureLoactore = page.locator('.flex > .mt-4 > div > div').first()

       //
       this.GenerateImage2Loactore = page.getByRole('button', { name: 'Generate 2 tokens' })

       //
       this.GenerateImage32Loactor= page.getByRole('button', { name: 'Generate 32 tokens' })
      
       //
      this.insufficientTokensLoactor = page.getByText('Insufficient Tokens! Oops!')

      //
      this.sixteenPictureLoactore=page.locator('.mt-4 > div > div:nth-child(4)')
   
      //
      this.closeIconLoactore = page.locator('#image-generation-modal-container').getByRole('link').first()
    }

   // this is take use to generate image page 
   async goToGenerateImage()
   {
     await this.page.goto('https://candy.ai/generate-image');
   }


 // Action to be performed on the above located elements 

async generateImagePage ()
    {
      await this.openUserMenu.click();
      await this.changeLocator.click();
      await this.existingCharacterLocator.click();
      await this.realisticLocator.click();
      await this.characterImageLocator.click();
      //await element.scrollIntoViewIfNeeded().click();
      await this.cutePicFilterLocatorutePicFilterLocator.click()
      await this.swimmingFilterLocator.click();
      await this.onePictureLoactore.click();
    }
    async generateImage2tokens ()
    {
      await this.onePictureLoactore.click();
      await this.GenerateImage2Loactore.click()
      await page.screenshot({ path: '/Users/suryamowku/playwright_Automation/SuccessScreenshots.png', fullPage: true });

    }
    async generateImage32tokens ()
    {
      await this.sixteenPictureLoactore.click()
      await this.GenerateImage32Loactor.click()
    }

    async insufficientTokens()
    {
      await this.insufficientTokensLoactor.click()
      await page.screenshot({ path: '/Users/suryamowku/playwright_Automation/ErrorScreenshots.png', fullPage: true });
      await this.closeIconLoactore.click()
    }
    


  };
   
 module.exports={generateImage}