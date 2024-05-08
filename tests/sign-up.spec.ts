import { test } from '@playwright/test';
import SignUpPage from '../pages/sign-up-page';
import pages from '../utils/pagesAttr';
import DataGeneratorClass from '../utils/data-generator';

let signUpPage: SignUpPage;
let dataGenerator: DataGeneratorClass;

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({ page }) => {
    await page.goto(pages.signUp.url);
    signUpPage = new SignUpPage(page);
    dataGenerator = new DataGeneratorClass();
});

test.describe('LUMA Website - Sign Up', () => {
    test('successfull sign up', async () => {
        const password = dataGenerator.generatePassword()

        await signUpPage.fillAccountForm(dataGenerator.generateName(),
            dataGenerator.generateLastName(),
            dataGenerator.generateEmail(),
            password,
            password);
        await signUpPage.checkSucessfullRegistration();
    })
})

