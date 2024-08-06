exports.login = class login {

    constructor(page) 
    {
        this.page = page;
  
        // Locate the 'Anime' button (second instance of the button)
        this.signInAnimeLocator = page?.getByRole('button', { name: 'Anime' }).nth(1);
        
        // Locate the 'Login' button
        this.loginLocator = page?.getByText('Login');
        
        // Locate the email textbox to focus on it
        this.emailLocator = page?.getByRole('textbox', { name: 'E-mail' });
    
        // Locate the password
        this.passwordLocator = page?.getByRole('textbox', { name: 'Password' });
        
        // Locate the 'Sign in' button
        this.signInLocator = page?.getByRole('button', { name: 'Sign in' }).click();
      
    }


  // Action to be performed on the above located elements 

    async signInAnime() {
       await this.signInAnimeLocator.click();
    }

     async login() {
        await this.loginLocator.click();
     }
     async emailClick() {
        await this.emailLocator.click();
     }
     async emailFill() {
        await this.emailLocator.fill('suryamowku4@gmail.com');
     }
     async passwordClick() {
        await this.passwordLocator.click();
     }

     async passwordFill() {
        await this.passwordLocator.fill('Goofy*0802');
     }

     async signIn() {
        await this.signInLocator.click();
     }
  };
  