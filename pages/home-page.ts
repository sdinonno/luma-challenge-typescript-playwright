import { type Locator, type Page, expect } from '@playwright/test';

class HomePage {

    homePageLocators = {
        latestAttiresItemsDiv:() => this.page.locator("//div[@class='products-grid grid']")
    }


    readonly page: Page;
    readonly searchInput: Locator;
    readonly navigationBarOptions: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator("#search");
        this.navigationBarOptions = page.locator("ul#ui-id-2 > li");
    }

    async fillSearchInput(keywords: string) {
        await this.searchInput.fill(keywords);
    }

    async search(keywords: string) {
        await this.fillSearchInput(keywords);
        await this.searchInput.press("Enter");
    }

    public async getLatestAttire():Promise<void>{
        await expect(this.homePageLocators.latestAttiresItemsDiv()).toBeVisible();
        const latestAttires = await this.page.locator("//div[@class='products-grid grid']//li").count()
        console.log("\n" + "Number of latest attires found -> " + latestAttires)
        for(let i=1;i<=latestAttires;i++){
            const getListOfLatestAttires = this.page.locator("//div[@class='products-grid grid']//li[placeholder]//strong".replace('placeholder', i.toString()));
            const items = await getListOfLatestAttires.textContent();
            const textOutput = [items]
            process.stdout.write((i) + "-> " + `${textOutput}`.trim());
        }
        
    }
}

export default HomePage;