const {test, expect} = require('@playwright/test');

const {HomePage} = require('../Pages/HomePage');

const {LoginPage} = require('../Pages/LoginPage');

test ('Acount Cancellation Popup', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('tianao_zhu@hotmail.com', '25125419zhu');
    const homePage = new HomePage(page);
    await homePage.CancelService();
    //const popupTitle = page.locator('#ui-id-1').textContent();
    await expect(page.getByText('Account Cancellation')).toBeVisible();

})