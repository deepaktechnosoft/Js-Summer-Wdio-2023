/**
 * 1. Analyse the date-elements to find if date-value which user sees is present as text-value or an-attribute-value in dom
 * 2. Create a locator which can be used to find ALL enabled date-elements present in a particular month
 * 3. use $$-function to find/get all date-Elements in an array
 * 4. use loop(for-of)
 *      pick an date-Element from the array
 *      apply getText() or getAttribute() on date-Element (based on step-1)
 *      if (above-value is equals to date-user-wants-to-click)
 *          click date-Element
 *          stop the loop
 * 
 */

// [we1, we2, we3, we4, we5, we6, we7, we8, ...]




/**
 * 1. Analyse the date-elements to find if date-value which user sees is present as text-value or an-attribute-value in dom
 *      in hotels.com, date-value which user can see is present as the attribute-value(data-day attribute)
 * 
 * 2. Create a locator which can be used to find ALL enabled date-elements present in a particular month
 *      //button[contains(@aria-label, "Aug") and contains(@aria-label, "2023") and not(@disabled) and @data-day]
 *      //h2[text()="July 2023"]/following-sibling::table//button[not(@disabled)]
 */
/**
 * 1. Launch hotels.com
 * 2. Select Aug 4 as checkin
 * 3. Select Aug-10 as check-out
 * 4. Click Done on Calendar
 */
describe('Handle Calendar in automation', () => {
    it('Select Aug 4 as checkin and Aug-10 as check-out', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');


        await $('#date_form_field-btn').click();

        // 2. Select Aug 4 as checkin
        const allAugDateElements = await $$('//h2[text()="August 2023"]/following-sibling::table//button[not(@disabled)]');

        for (const augDateElement of allAugDateElements) {
            const dateValue = await augDateElement.getAttribute('data-day');
            if (dateValue === '4') {
                await augDateElement.click();
                break;
            }
        }


        // 3. Select Aug-10 as check-out
        for (const augDateElement of allAugDateElements) {
            const dateValue = await augDateElement.getAttribute('data-day');
            if (dateValue === '10') {
                await augDateElement.click();
                break;
            }
        }

        await browser.pause(15000);


        // 4. Click Done on Calendar
        await $('//button[@data-stid="apply-date-picker"]').click();

        await browser.pause(5000);
    })
})