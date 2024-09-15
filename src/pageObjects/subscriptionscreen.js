class SubscriptionScreen {

    constructor(page) {
        this.page = page;
        this.hamburger = page.getByTestId('MenuIcon');  
        this.subscriptionplan=page.getByText('Plans & Subscriptions');
        this.yesButtonOnModal=page.getByText('Yes');
        this.buynowbutton = page.locator("//button[contains(text(),'Buy Now')]")
        this.companyName = page.locator("//label[contains(text(),'Your Company Name')]/following-sibling::input");
        this.gstnumber = page.locator("//label[contains(text(),'GST Number')]/following-sibling::input");
        this.companyaddress = page.locator("//label[contains(text(),'Company Address')]/following-sibling::input");
        this.makepaymentbutton = page.getByText('Make Payment');
    }

    async verifySubscriptionPlan(plantype){
            await this.hamburger.click();
            await this.subscriptionplan.click();
            await this.buynowbutton.nth(1).click();
            await this.yesButtonOnModal.click();
            await this.companyName.fill("devQAExpert");
            await this.gstnumber.fill("65764456456");
            await this.companyaddress.fill("353 Clerk colony, indore")
            await this.makepaymentbutton.click();
    }
    
}
module.exports = { SubscriptionScreen };