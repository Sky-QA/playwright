class LoginPage {
    constructor(page){
        this.page = page;
        this.emailField = page.locator("#login_email");
        this.pwdField = page.locator("#password");
        this.loginButton = page.locator("loginformsubmit");
    }

    async login(email, password){
        await this.emailField.fill(email);
        await this.pwdField.fill(password);
        await this.loginButton.click();
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.freeconferencecall.com/login');
    }


}

module.exports = LoginPage;