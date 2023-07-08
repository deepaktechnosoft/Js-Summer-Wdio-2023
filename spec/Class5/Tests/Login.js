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



})