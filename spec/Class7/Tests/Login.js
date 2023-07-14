const { expect } = require("chai");
const LandingPage = require("../Screens/LandingPage");

describe('Testcases belong to Login feature', () => {

    /**
     * TC: Verify login fields are enabled by default
     * 1. Launch facebook.com
     * 2. Verify login email field is enabled
     * 3. Verify login password is enabled
     * 4. Verify login button is enabled
     */
    it('Verify login fields are enabled by default', async () => {
        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Verify login email field is enabled
        const landingPage = new LandingPage
        const isLoginEmailEnabled = await landingPage.isLoginUsernameEnabled();
        expect(isLoginEmailEnabled, 'Login username field is NOT enabled').to.be.true

        // 3. Verify login password is enabled
        const isLoginPwdEnabled = await landingPage.isLoginPasswordEnabled();
        expect(isLoginPwdEnabled, 'Login password field is NOT enabled').to.be.true

        // 4. Verify login button is enabled
        const isLoginBtnEnabled = await landingPage.isLoginButtonEnabled();
        expect(isLoginBtnEnabled, 'Login button is NOT enabled').to.be.true
    

    })


    it.only('Verify empty fields of signup form', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify empty username field has copy "Email or phone number"
         * 3. Verify empty password field has copy "Password"
         * 4. Verify login button has copy "Log In"
         */

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Verify empty username field has copy "Email or phone number"
        /*
            find the webElement
            get the value of placeholder attribute
            verify value of placeholder attribute equals to "Email or phone number"
        */
        const landingPage = new LandingPage();
        const loginEmailPlaceHolder = await landingPage.getLoginEmailAttributeValue('placeholder');
        expect(loginEmailPlaceHolder, 'Empty login username field value is NOT as expected').to.equal('Email or phone number')

        // 3. Verify empty password field has copy "Password"
        const loginPwdPlaceHolder = await landingPage.getLoginPwdAttributeValue('placeholder');
        expect(loginPwdPlaceHolder, 'Empty login password field value is NOT as expected').to.equal('Password')

        // 4. Verify login button has copy "Log In"
        const loginBtnText = await landingPage.getLoginBtnText();
        expect(loginBtnText, 'Login button text is NOT as expected').to.equal('Log In');


    })


})