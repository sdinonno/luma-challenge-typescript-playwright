import { type Locator, type Page, expect } from '@playwright/test';

class HomePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly navigationBarOptions: Locator;
    readonly welcomeMessage: Locator;
    readonly noResultsMessage: Locator;
    readonly listItemsGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator("#search");
        this.navigationBarOptions = page.locator("ul#ui-id-2 > li");
        this.welcomeMessage = page.getByText(/Welcome, [A-Za-z]+$/i);
        this.noResultsMessage = page.getByText(" Your search returned no results. ");
        this.listItemsGrid = page.locator(".products.list.items.product-items");
    }

    async fillSearchInput(keywords: string) {
        await this.searchInput.fill(keywords);
    }

    async search(keywords: string) {
        await this.fillSearchInput(keywords);
        await this.searchInput.press("Enter");
    }

    async checkLoggedIn() {
        await expect(this.welcomeMessage).toBeVisible()
    }

    async checkNoResultMessage() {
        await expect(this.noResultsMessage).toBeVisible()
    }

    async checkResults() {
        await expect(this.listItemsGrid).toBeVisible()
    }
}

export default HomePage;