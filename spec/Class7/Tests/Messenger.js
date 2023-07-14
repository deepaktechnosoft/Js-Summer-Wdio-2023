const { expect } = require("chai");
const LandingPage = require("../Screens/LandingPage");
const MessengerLandingPage = require("../Screens/MessengerLandingPage");
const MessengerLoginPage = require("../Screens/MessengerLoginPage");

describe('Testcases belong to Messenger feature', () => {

    /**
     * TC: Verify user gets error for empty login flow
     * 1. Launch facebook.com
     * 2. Click Messenger link
     * 3. Click "Log in" button
     * 4. Verify error message (Incorrect email or phone number) is displayed
     */
    it('Verify user gets error for empty login flow', async () => {
        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click Messenger link
        const landingPage = new LandingPage();
        await landingPage.clickMessenger();

        // 3. Click "Log in" button
        const messengerLandingPage = new MessengerLandingPage();
        await messengerLandingPage.clickLogInButton();

        // 4. Verify error message (Incorrect email or phone number) is displayed
        const messengerLoginPage = new MessengerLoginPage();
        const isErrDisplayed = await messengerLoginPage.isIncorrectLoginErrorDisplayed();
        expect(isErrDisplayed, 'Incorrect login error is NOT displayed').to.be.true;

    })

})