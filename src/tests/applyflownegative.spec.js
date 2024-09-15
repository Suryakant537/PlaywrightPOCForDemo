import { test } from '@playwright/test'
const {POManager} = require("../../src/pageObjects/POManager")
const testdata=JSON.parse(JSON.stringify(require("../helper/testdata.json")))
let pomanager;
let utils;
let login;
let page;

test.describe("test for validation negative scenarios", () => {
    test.beforeAll(async({browser})=>{
        page=await browser.newPage();
        pomanager=new POManager(page);
        utils=pomanager.getUtility();
        login=pomanager.getLoginScreenpage();
    })
    test('Test to validate login with blank username and blank password',async () => {
        await utils.gotoUrl('login');
        await login.Login("",""); 
        await login.verifyErrorMessage("Username/Email and password are required.");
    });
    test('Test to validate login with username and no password',async () => {
        await utils.gotoUrl('login');
        await login.Login(testdata.username,""); 
        await login.verifyErrorMessage("Username/Email and password are required.");
    });
    test('Test to validate login with no username and with password',async () => {
        await utils.gotoUrl('login');
        await login.Login("",testdata.password); 
        await login.verifyErrorMessage("Username/Email and password are required.");
    });
    test('Test to validate login with wrong username and with password',async () => {
        await utils.gotoUrl('login');
        await login.Login("abc@gmail.com",testdata.password); 
        await login.verifyErrorMessage("Incorrect username/email or password.");
    });
    test('Test to validate login with username and with wrong password',async () => {
        await utils.gotoUrl('login');
        await login.Login(testdata.username,"12341245"); 
        await login.verifyErrorMessage("Incorrect username/email or password.");
    });
})