/**
 * 1. Analyse the autoSuggestion to find if autoSuggestions-values which user can see, present as text-value or an-attribute-value in dom
 * 2. Create a locator which can be used to find ALL autoSuggestion-Elements
 * 3. use $$-function to find/get all autoSuggestion-Elements in an array
 * 4. use loop(for-of)
 *      pick an autoSuggestion-Element from the array
 *      apply getText() or getAttribute() on autoSuggestion-Element (based on step-1)
 *      if (above-value is equals to suggestion-user-wants-to-click)
 *          click autoSuggestion-Element
 *          stop the loop
 * 
 */

/**
 * 1. Launch hotels.com
 * 2. Search for "new"
 * 3. Select "Newport" from autosuggestion
 * 
 */

describe('Handle Auto-Suggestion in automation', () => {
    it('', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');


        // 2. Search for "new"
        await $('//button[@data-stid="destination_form_field-menu-trigger"]').click()

        await $('#destination_form_field').setValue('new');

        await browser.pause(5000);

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