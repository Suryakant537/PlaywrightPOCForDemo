import { test } from "@playwright/test"
const {POManager} = require("../../src/pageObjects/POManager")
let pomanager;
let utils;
let login;
let register;

test.describe("test for validation register page", () => {
    test('Test to validate register page',async ({ page }) => {
        pomanager=new POManager(page);
        utils=pomanager.getUtility();
        login=pomanager.getLoginScreenpage();
        register=pomanager.getRegisterScreenPage();
        await utils.gotoUrl("register");
        await register.register(); 
    });
});
