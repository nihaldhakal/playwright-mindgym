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
}