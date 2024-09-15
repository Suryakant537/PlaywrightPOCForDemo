import { test } from "@playwright/test"
const {POManager} = require("../../src/pageObjects/POManager")
const testdata=JSON.parse(JSON.stringify(require("../helper/testdata.json")))
let pomanager;
let utils;
let login;

test.describe("test for validation login page", () => {
    test('Test to validate valid login',async ({ page }) => {
        pomanager=new POManager(page);
        utils=pomanager.getUtility();
        login=pomanager.getLoginScreenpage();
        await utils.gotoUrl('login');
        await login.Login(testdata.username, testdata.password); 
        await login.verifyLoggedInScreen();
    });
});