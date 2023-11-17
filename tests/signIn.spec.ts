import { test } from '@playwright/test';
import SignInPage from '../pages/sign-in-page';
import hooks from '../utils/hooks';
import pages from '../utils/pagesUrl';

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
    })
})