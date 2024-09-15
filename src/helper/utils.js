const testdata=JSON.parse(JSON.stringify(require("./testdata.json")))

class Utils {

    constructor(page) {
        this.page = page;
    }
    
    async gotoUrl(urlname) {
            await this.page.goto(testdata.url+urlname);
    }
}

module.exports ={Utils};