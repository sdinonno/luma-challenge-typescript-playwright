import { type Locator, type Page, expect } from '@playwright/test';

class HomePage {
    readonly page: Page;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator("#search");
    }

    async fillSearchInput(keywords: string) {
        this.searchInput.fill(keywords);
    }

    async search(keywords: string) {
        this.fillSearchInput(keywords);
        this.searchInput.press("Enter");
    }
}

export default HomePage;