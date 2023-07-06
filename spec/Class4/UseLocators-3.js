const { expect } = require("chai");

describe('Advanced xpath locator strategy', () => {
    
    /**
     * TC: Verify no gender is select on facebook sign up
     * 1. Launch facebook.com
     * 2. Click "Create new account" button
     * 3. Verify female button is not selected
     * 4. Verify male button is not selected
     * 5. Verify custom button is not selected
     */
    it('Verify no gender is select on facebook sign up', async () => {
        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click "Create new account" button
        const createNewAccount = await $('=Create new account');
        await createNewAccount.click()

        // 3. Verify female button is not selected
        const femaleButton = await $('//label[text()="Female"]/following-sibling::input');
        const isFemaleSelected = await femaleButton.isSelected();
        expect(isFemaleSelected, 'Female gender is selected').to.be.false

        // 4. Verify male button is not selected
        const maleButton = await $('//label[text()="Male"]/following-sibling::input');
        const isMaleSelected = await maleButton.isSelected();
        expect(isMaleSelected, 'Male gender is selected').to.be.false 

        // 5. Verify custom button is not selected
        const customButton = await $('//label[text()="Custom"]/following-sibling::input');
        const isCustomSelected = await customButton.isSelected();
        expect(isCustomSelected, 'Custom gender is selected').to.be.false

    });

    /**
     * TC: Verify the default state of facebook login fields
     * 1. Launch faccebook.com
     * 2. Verify login email field is enabled
     * 3. Verify login email field has default text as "Email or phone number"  (getAttribute())
     * 4. Verify login password field is enabled
     * 5. Verify login password field has default text as "Password"            (getAttribute())
     * 6. Verify login button is enabled
     * 7. Verify login button has default text as "Log In"                      (getText())
     */

    /**
     * Page Object Model
     * Framework (Cucumber / Gherkin)
     */

})