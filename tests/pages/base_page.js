class BasePage {
    constructor(page){
        this.page = page;
    }
    async navigate(url){
        await this.page.goto(url)
        await this.page.waitForLoadState('networkidle');
    }
    async waitForElement(selector, options = {}) {
        await this.page.waitForSelector(selector, options);
    }
}

module.exports = BasePage;

