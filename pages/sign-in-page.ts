import { type Locator, type Page, expect } from '@playwright/test';

class SignInPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    readonly forgotPasswordLink: Locator;
    readonly createAccountButton: Locator;
    
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
}