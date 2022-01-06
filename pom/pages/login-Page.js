
class loginPage {
    constructor(){
        this.pageLogin = page.locator('h1 >> Log in')
        this.usernameInput = page.locator('id=email', 'value')
        this.passwordInput = page.locator('id=password', 'value') 
        this.buttonLogin = page.locator('button')
        this.errorMessagesContent = page.locator('.error_msg')
    }

    async submitLoginForm(username, password){
        await page.typeText(this.usernameInput,username)
        await page.typeText(this.passwordInput,password)
        await this.buttonLogin.click()
    }

    async submitLoginFormEmpty(username, password){
        if(!username && !password){
            await this.buttonLogin.click()
        }    
    }
}

export default loginPage