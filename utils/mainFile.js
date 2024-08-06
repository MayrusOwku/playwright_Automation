
import { login } from '../pages/login';

async function loginAction() {
    try {
        // select anime
        await login.signInAnime()
        await login.login()
        await login.emailClick()
        await login.emailFill()
        await login.passwordClick()
        await login.passwordFill()
        await login.signIn()
        } 

         catch (error)
        {
        console.error("Error connecting to Login:", error.message);
        }
}

// Call the function to connect to the database
export default loginAction;
