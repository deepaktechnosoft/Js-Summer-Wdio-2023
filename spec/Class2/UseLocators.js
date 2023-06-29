const { expect } = require("chai");

describe('Interacting with WebElements using Locators', () => {
    /**
     * TC : Verify invalid login on facebook
     *      Launch facebook.com
     *      Enter "abcd@txt.com" in username
     *      Enter "incorrecrtPwd" in password
     *      Click Login button
     *      Verify error message is displayed
     * 
     */
    it('Verify invalid login on facebook', async () => {
        // Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // Enter "abcd@txt.com" in username
        const loginUserName = await $('#email');
        await loginUserName.setValue('abcd@txt.com');

        // Enter "incorrecrtPwd" in password
        const loginPassword = await $('#pass');
        await loginPassword.setValue('incorrecrtPwd');

        // Click Login button
        // const loginButton = $('button[name=login]');
        const loginButton = await $('button=Log In');
        loginButton.click();

        await browser.pause(5000)

        // Verify error message is displayed 
        const errorMessage = $('div*=The email');
        let isErrorDisplayed = await errorMessage.isDisplayed();
        expect(isErrorDisplayed, 'Invalid login error message is NOT displayed').to.be.true;

        await browser.pause(20000)
    })
})