import { type Locator, type Page, expect } from '@playwright/test';
import messages from '../utils/messages';

export class SignInPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    readonly forgotPasswordLink: Locator;
    readonly createAccountButton: Locator;
    readonly alertMessage: Locator;
    readonly emailErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator("#email");
        this.password = page.locator("#pass");
        this.signInButton = page.locator("#send2")
        this.alertMessage = page.locator(".messages > .message-error");
        this.emailErrorMessage = page.locator("#email-error");
    }
    
    async fillEmail(email: string) {
        await this.email.fill(email);
    }

    async fillPassword(password: string) {
        await this.password.fill(password);
    }

    async doLogin(email: string, password: string){
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.signInButton.click();
    }

    async checkLoggedIn() {
        await expect(this.page).toHaveURL(/.*account/);
        await expect(this.page).toHaveTitle("My Account");
    }

    async checkInvalidLogin() {
        await expect(this.alertMessage).toHaveText(messages.signIn.invalid);
        await expect(this.page).toHaveTitle("Customer Login");
    }

    async checkInvalidEmailMessage() {
        await expect(this.emailErrorMessage).toBeVisible();
        await expect(this.emailErrorMessage).toHaveText(messages.signIn.invalidEmailFormat);
    }
}

export default SignInPage;