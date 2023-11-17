import { type Locator, type Page, expect } from '@playwright/test';

class HomePage {
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
}

export default HomePage;