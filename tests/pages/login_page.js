const BasePage = require('./base_page');
require('dotenv').config();

class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.env == process.env.TEST_ENV || 'local';

        //Selectors for local environment
        this.localSelectors = {
            usernameField: 'role=textbox[name="Username"]',
            passwordField: 'role=textbox[name=Password"]',
            loginButton: 'role=button[name="Login"]',
            welcomeMessage: 'text=Welcome'
        };
        //Selectors for staging environment
        this.stagingSelectors = {
            emailField: 'role=textbox[name="Your email address"]',
            continueButton: 'role=button[name="Continue"]',
            passwordField: 'role=textbox[name="Your password"]',
            signInButton: 'role=button[name="Sign in"]'
        };
    }
    async navigateToLoginPage() {
        if(this.env == 'local') {
            await this.navigate(process.env.LOCAL_URL || 'https://localhost:3000/login')
        }elseif(this.env == 'staging') {
            await this.naviagate(process.env.STAGING_URL || 'https://dev.mindgym.io/diagnostics')
        }
    }
    async enterCredentials() {
        if (this.env === 'local') {
            await this.page.locator(this.localSelectors.usernameField).click();
            await this.page.locator(this.localSelectors.usernameField).fill(process.env.USERNAME);
            await this.page.locator(this.localSelectors.passwordField).click();
            await this.page.locator(this.localSelectors.passwordField).fill(process.env.PASSWORD);
        } else if (this.env === 'staging') {
            await this.page.locator(this.stagingSelectors.emailField).click();
            await this.page.locator(this.stagingSelectors.emailField).fill(process.env.USERNAME || 'nihal@danpheit.com');
            await this.page.locator(this.stagingSelectors.continueButton).click();

            // Wait for password field to be visible
            await this.page.waitForSelector('text=Your password', { timeout: 10000 });

            await this.page.locator(this.stagingSelectors.passwordField).click();
            await this.page.locator(this.stagingSelectors.passwordField).fill(process.env.PASSWORD || 'Olumonize1');
        }
    }
    async completeLogin() {
        if (this.env === 'local') {
            await this.page.locator(this.localSelectors.loginButton).click();
        } else if (this.env === 'staging') {
            await this.page.locator(this.stagingSelectors.signInButton).click();
            await this.page.waitForLoadState('networkidle');
        }
    }
}