
const {SubscriptionScreen} = require("./subscriptionscreen");
const {Login} = require("./Login");
const {Register} =  require("./Register");
const {Utils} = require("../helper/utils");


class POManager{
    constructor(page){
        this.page=page;
        this.subscriptionScreen=new SubscriptionScreen(this.page);
        this.loginScreen=new Login(this.page);
        this.registerScreen=new Register(this.page);
        this.utils = new Utils(this.page);
    }
    
    getUtility(){
        return this.utils;
    }

    getLoginScreenpage(){
        return this.loginScreen;
    }
    getRegisterScreenPage(){
        return this.registerScreen;
    }

    getSubscriptionScreenPage(){
        return this.subscriptionScreen;
    }

}
module.exports={POManager};