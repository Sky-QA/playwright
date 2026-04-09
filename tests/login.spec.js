const {test, expect} = require('@playwright/test');

const {LoginPage} = require('../Pages/LoginPage');



test('Login Test', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('tianao_zhu@hotmail.com', '25125419zhu');
    await expect(page).toHaveTitle(/.*Free Conference Call International/);
});

