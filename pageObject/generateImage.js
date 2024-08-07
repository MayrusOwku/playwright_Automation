class generateImage {

   constructor(page)
   {
       this.page = page;
 
      // Locate the 'generate Image in Nav bar' button locator

      this.generateImageNav = page.locator('//*[@id="app"]/div[4]/nav/ul[1]/li[4]/a/div')
       
      // Locate the 'change Locator' button locator
       this.changeLocator = page.getByRole('button', { name: 'Change' });
       
       // Locate the existing Character Locator
       this.existingCharacterLocator = page.getByRole('button', { name: 'Existing Character' });
   
       // Locate the realistic locator
       this.realisticLocator = page.getByText('Realistic');
       
       // Locate the character Image  locator
       this.characterImageLocator = page.locator('//*[@id="42594464"]');
     
       // Locate the 'select' button locator
       this.selectLocator = page.getByRole('button', { name: 'Select' });

       // Locate cute Pic Filter Locator  
       this.cutePicFilterLocator  = page.getByText('Cute Picture').first()

       // Locate swimming Filter locator 
       this.swimmingFilterLocator = page.getByText('Swimming').first()

       // Locate one Pictur card locator      
       this.onePictureLoactore = page.locator('.flex > .mt-4 > div > div').first()

       // Locate Generate Image with 2 locator 
       this.GenerateImage2Loactore = page.getByRole('button', { name: 'Generate 2 tokens' })

       // Locate Generate Image with 32 locator
       this.GenerateImage32Loactor= page.getByRole('button', { name: 'Generate 32 tokens' })
      
       // locate insufficient Tokens locator
      this.insufficientTokensLoactor = page.getByText('Insufficient Tokens! Oops!')

      // locate 16 pic locator
      this.sixteenPictureLoactore=page.locator('.mt-4 > div > div:nth-child(4)')
   
      // close icon locator
      this.closeIconLoactore = page.locator('#image-generation-modal-container').getByRole('link').first()
    }

 // Action to be performed on the above located elements 

async generateImagePage ()
    {
      await this.generateImageNav.click()
      await this.changeLocator.click();
      await this.existingCharacterLocator.click();
      await this.realisticLocator.click();
      await this.characterImageLocator.click();
      await this.selectLocator.click();
      await this.cutePicFilterLocator.click()
      await this.swimmingFilterLocator.click();
      await this.onePictureLoactore.click();
    }
    async generateImage2tokens ()
    {
      await this.onePictureLoactore.click();
      await this.GenerateImage2Loactore.click()

    }
    async generateImage32tokens ()
    {
      await this.sixteenPictureLoactore.click()
      await this.GenerateImage32Loactor.click()
    }

    async insufficientTokens()
    {
      await this.insufficientTokensLoactor.click()
      await this.closeIconLoactore.click()
    }
    async closeIcon()
    {
      await this.closeIconLoactore.click()
    }

  };
   
 module.exports={generateImage}