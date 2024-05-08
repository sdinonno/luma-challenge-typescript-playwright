import { test } from '@playwright/test';
import SignInPage from '../pages/sign-in-page';
import pages from '../utils/pagesAttr';

const userName = process.env.USERNAME!;
const password = process.env.PASSWORD!;
let signInPage: SignInPage;

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ page }) => {
    await page.goto(pages.login.url);
    signInPage = new SignInPage(page);
});

test.describe('LUMA Website - Sign In', () => {
    test('successfull login', async () => {
        await signInPage.doLogin(userName, password);
        await signInPage.checkLoggedIn();
    })

    test('failed login - invalid password ', async() => {
        await signInPage.doLogin(userName, 'dfisj');
        await signInPage.checkInvalidLogin();
    })
})