
import { faker } from '@faker-js/faker/locale/en';
const testdata=JSON.parse(JSON.stringify(require("../helper/testdata.json")));

class Register{
    constructor(page){
        this.firstname = page.locator("[datatestid='registerpage-FormControlFirstName']");
        this.lastname = page.locator("[datatestid='registerpage-FormControllast']");
        this.email = page.locator("[datatestId='registerpage-FormControl1']");
        this.address = page.locator("[datatestid='registerpage-FormControl4']");
        this.country = page.getByRole("combobox");
        this.countryoption= page.locator('li:has-text("India")')
        this.username = page.locator("[datatestid='registerpage-FormControl5']");
        this.password = page.locator("[datatestid='registerpage-FormControl6']");
        this.confirmpassword = page.locator("[datatestid='registerpage-FormControl7']");
        this.registerbutton = page.locator("[datatestid='registerpage-button']");
    }

    async register() {
        const randomName = faker.person.firstName();
        const randomlastname = faker.person.lastName()
        const randomEmail = faker.internet.email();
        const randomaddress = faker.location.streetAddress();
        const randomusername = faker.internet.userName();
        const randompassword = faker.internet.password();
        const confirmpassword = randompassword;
        await this.firstname.fill(randomName);
        await this.lastname.fill(randomlastname);
        await this.email.fill(randomEmail);
        await this.country.click();
        await this.countryoption.click();
        await this.address.fill(randomaddress);
        await this.username.fill(randomusername);
        await this.password.fill(randompassword);
        await this.confirmpassword.fill(confirmpassword);
        await this.registerbutton.click();
        
    }
}
module.exports={Register};