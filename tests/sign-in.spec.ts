import { expect, test } from '@playwright/test';
import SignInPage from '../pages/sign-in-page';
import pages from '../utils/pagesAttr';
import messages from '../utils/messages';

const userName = process.env.USERNAME!;
const password = process.env.PASSWORD!;
let signInPage: SignInPage;

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ page }) => {
    await page.goto(pages.login.url);
    signInPage = new SignInPage(page);
});

test.describe('Sign In', () => {
    test('Client is able to log in successfully', async ({ page }) => {
        test.step('Given the client is on the sign in page', async () => {
            expect(signInPage.page.url).toContain(/login/);
        })

        test.step('When the client enters valid credentials', async () => {
            await signInPage.doLogin(userName, password);
        })

        test.step('Then the client should be redirected to the home page', async () => {
            expect(page.url).toBe('/');
        })
    })

    test('Client is not able to login with invalid password', async() => {
        test.step('Given the client is on the sign in page', async () => {
            expect(await signInPage.page.url()).toContain('/login/');
        })

        test.step('When the client enters valid username and invalid password', async () => {
            await signInPage.doLogin(userName, 'invalidPassword');
        })

        test.step('Then the client should see an error message', async () => {
            await expect(signInPage.emailErrorMessage).toBeVisible();
            await expect(signInPage.emailErrorMessage).toHaveText(messages.signIn.invalidEmailFormat);
        })
    })
})