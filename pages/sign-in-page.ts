import { type Locator, type Page, expect } from '@playwright/test';

class SignInPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    readonly forgotPasswordLink: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator("#email");
        this.password = page.locator("#pass");
        this.signInButton = page.locator("#send2")
    }
    
    async fillEmail(email: string) {
        this.email.fill(email);
    }

    async fillPassword(password: string) {
        this.password.fill(password);
    }

    async doLogin(email: string, password: string){
        this.fillEmail(email);
        this.fillPassword(password);
        this.signInButton.click();
    }

    async checkLoggedIn() {
        await expect(this.page).toHaveURL(/.*account/);
        await expect(this.page).toHaveTitle("My Account");
    }
}

export default SignInPage;