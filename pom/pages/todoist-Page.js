
class todoistPage {
    constructor(){
        this.buttonGoLogin = page.locator('a >> Log in')
   
    }
    
    async tapOnTheLoginButton(){
        await t.click(this.buttonGoLogin)

    }
}

export default new todoistPage