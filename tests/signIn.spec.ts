import { test } from '@playwright/test';
import SignInPage from '../pages/sign-in-page';
import hooks from '../utils/hooks';
import pages from '../utils/pagesUrl';
import HomePage from '../pages/home-page';

let signInPage: SignInPage;

test.use({ storageState: { cookies: [], origins: [] } });
test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page }) => {
    await page.goto(pages.signIn);
    signInPage = new SignInPage(page);

});

test.describe('LUMA Website - Sign In', () => {
    test('successfull login', async () => {
        await signInPage.doLogin('ontopcontract@gmail.com', '123456J.');
        await signInPage.checkLoggedIn();
    });
});

test.describe('Get latest attire', () => {
    test('Get latest attire', async ({page}) => {
        await signInPage.doLogin('ontopcontract@gmail.com', '123456J.');
        await signInPage.checkLoggedIn();
        await page.goto('https://magento.softwaretestingboard.com/what-is-new.html')
        let homePage = new HomePage(page);
        await homePage.getLatestAttire();
    });
});