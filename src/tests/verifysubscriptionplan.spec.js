import { test } from "@playwright/test"
const {POManager} = require("../../src/pageObjects/POManager")
const testdata=JSON.parse(JSON.stringify(require("../helper/testdata.json")))
let pomanager;
let utils;
let login;
let subscriptionscreen;
let register;

test.describe("test for verify subscription plan", () => {
    test('Test to validate Basic(Monthly) Plan',async ({ page }) => {
        pomanager=new POManager(page);
        utils=pomanager.getUtility();
        login=pomanager.getLoginScreenpage();
        register=pomanager.getRegisterScreenPage();
        subscriptionscreen=pomanager.getSubscriptionScreenPage();
        await utils.gotoUrl('login');
        await login.Login(testdata.username,testdata.password); 
        await subscriptionscreen.verifySubscriptionPlan("Basic")
    });
});
