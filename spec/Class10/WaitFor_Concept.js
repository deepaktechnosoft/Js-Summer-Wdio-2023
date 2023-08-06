
/**
 * waitForDisplayed()
 *      to wait until the webElement is displayed
 * 
 * waitForEnabled()
 *      to wait until the webElement is enabled
 * 
 * waitForExist()
 *      to wait until the webElement is in the DOM
 * 
 * waitForClickable()
 *      to wait until the webElement is clickable
 * 
 *      timeout: to mention user-defined timeout (max time to wait)
 *      timeoutMsg: to mention user defined msg in case waitFor* is failed
 *      reverse: true (if reverse: true is present the condition will work in reverse)
 * 
 * 
 * waitUntil()
 *      to wait for any condition
 *      input:
 *          1. async function must return a boolean value
 *      keep executing the given async function, until the async function returns true
 *              
 * 
 * 
 * 
 */

describe('waitFor condition', () => {

    it('waitForDisplayed - example', async () => {

        await browser.url('/');

        const element = await $('#gmail').waitForDisplayed({ timeout: 5000, timeoutMsg: "Element with id-gmail is not displayed" });

        // code

    })

    it('waitForEnabled() - example', async () => {

        await browser.url('/');

        await $('#email').waitForEnabled({ timeout: 5000, timeoutMsg: "login email firled is not enabled even after 5-seconds" })

        await $('#email').setValue('helloUser@gmail.com');

    });

    it('waitUntil() - example', async () => {
        await browser.url('/');

        await browser.waitUntil(async () => {
            const title = await browser.getTitle();
            return title === 'Fecabook';
        });

        // code
    });

    it('waitUntil() - Autosuggestion example', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');


        // 2. Search for "new"
        await $('//button[@data-stid="destination_form_field-menu-trigger"]').click()
        await $('#destination_form_field').setValue('new');

        // await browser.pause(5000);
        await browser.waitUntil(async() => {
            const suggestions = await $$('//button[@data-stid="destination_form_field-result-item-button"]');
            return suggestions.length > 0
        }, { timeout: 3000 , timeoutMsg: 'Autosuggestions are not displayed within 3-seconds' });

        // 3. Select "Newport" from autosuggestion

        const allSuggestions = await $$('//button[@data-stid="destination_form_field-result-item-button"]');
        for (const suggestion of allSuggestions) {
            const suggestionData = await suggestion.getAttribute('aria-label');
            if (suggestionData.startsWith('Newport Rhode Island')) {
                await suggestion.click();
                break;
            }
        }

        await browser.pause(10000);

    })







})