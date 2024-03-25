import { test } from '@playwright/test';
import HomePage from '../pages/home-page';
import pages from '../utils/pagesAttr';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    homePage = new HomePage(page);
});

/*test.describe('Home - Stored Auth', () => {
    test('Check logged in', async () => {
        await homePage.checkLoggedIn();
    });
})*/

test.describe('Home - Search product', () => {
    test('Valid Search', async () => {
        await homePage.search("short");
        await homePage.checkResults();
    })

    test('Invalid Search', async () => {
        await homePage.search("qwe");
        await homePage.checkNoResultMessage();
    })
})