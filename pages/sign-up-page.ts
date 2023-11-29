import { type Locator, type Page, expect } from '@playwright/test';
import exp from 'constants';

class SignUpPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator("#firstname");
        this.lastName = page.locator("#lastname");
        this.email = page.locator("#email_address");
        this.password = page.locator("#password");
        this.confirmPassword = page.locator("#password-confirmation");
        this.createAccountButton = page.getByTitle("Create an Account");
    }

    async fillFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }

    async fillEmail(email: string) {
        await this.email.fill(email);
    }

    async fillPassword(password: string) {
        await this.password.fill(password);
    }

    async fillConfirmPassword(password: string) {
        await this.confirmPassword.fill(password);
    }

    async fillAccountForm(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.fillConfirmPassword(confirmPassword);
        await this.createAccountButton.click();
    }

    async checkSucessfullRegistration(){
        this.page.waitForLoadState('domcontentloaded');
        await expect.soft(this.page).toHaveURL(/.*account/);
        await expect.soft(this.page).toHaveTitle("My Account");
    }
}

export default SignUpPage;