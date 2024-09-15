import {expect} from '@playwright/test';

class Login{
    constructor(page){
        this.page=page;
        this.username = page.locator("//input[@datatestid='loginpage-formcontrol']");
        this.password = page.locator("//input[@datatestid='loginpage-formcontrol1']");
        this.signin_button = page.locator("[datatestid='loginpage-button']");
        this.dashboardHeading = page.locator(".title_heading");
        this.erroMessageOnLogin = page.locator(".flash-container.text-danger.text-center");
    }

    async verifyLoggedInScreen() {
        await expect(this.dashboardHeading.nth(0)).toHaveText('Test Cases Summary'); 
    }

    async Login(user, pwd) {
        await this.username.fill(user);
        await this.password.fill(pwd);
        await this.signin_button.click();
    }

    async verifyErrorMessage(errorMessage) {
        await expect(this.erroMessageOnLogin).toHaveText(errorMessage);
    }
    
}
module.exports={Login};