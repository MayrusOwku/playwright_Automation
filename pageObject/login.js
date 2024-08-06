class loginpage {

    constructor(page)
    {
        this.page = page;
  
        // Locate the 'Anime' button (second instance of the button)
        this.signInAnimeLocator = page.getByRole('button', { name: 'Anime' }).nth(1);
        
        // Locate the 'Login' button
        this.loginLocator = page.getByText('Login');
        
        // Locate the email textbox to focus on it
        this.emailLocator = page.getByRole('textbox', { name: 'E-mail' });
    
        // Locate the password
        this.passwordLocator = page.getByRole('textbox', { name: 'Password' });
        
        // Locate the 'Sign in' button
        this.signInLocator = page.getByRole('button', { name: 'Sign in' });
        
        //this.openUserMenu =  page.getByRole('button', { name: 'Open user menu' });
      
    }

async goTo()
{
  await this.page.goto('https://candy.ai/');
}
  // Action to be performed on the above located elements 

 async loginHomePage (username,password)
     {
       await this.signInAnimeLocator.click();
       await this.loginLocator.click();
       await this.emailLocator.type(username);
       await this.passwordLocator.type(password); 
       await this.signInLocator.click();
       //await this.openUserMenu.click();
     }
   };
    
  module.exports={loginpage}