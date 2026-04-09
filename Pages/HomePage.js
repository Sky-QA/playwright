class HomePage {
    constructor(page){
        this.page = page;
        this.cancelServiceButton = page.locator("#ctl00_ContentPlaceHolder1_btnCancel_Account");
    }
    async CancelService(){
        await this.cancelServiceButton.click();
    }
}

module.exports = HomePage;