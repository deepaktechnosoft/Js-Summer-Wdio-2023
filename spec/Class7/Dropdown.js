/**
 * <select>     ->      dropdown
 *      <option>    ->      each option-tag represent each value in the dropdown
 *          option-tags are present in the index-wise format
 *          option-tag has value-attribute
 *          option-tag has text-value
 *          text-value of option-tag is getting displayed to the user
 * 
 * Steps to select a value from dropdown:
 *  1. Find the locator for dropdown webElement (or select-tag)
 *  2. Find the webElement using above-locator
 *  3. Use appropriate function to select the desired-value in the dropdown
 *      selectByVisibleText()
 *      selectByAttribute()
 *      selectByIndex()
 * 
 */
describe('Dropdown demo', () => {


    it('Select test data in dropdown', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click on 'Create new account' button
         * 3. Select "Mar" as birth month
         * 4. Select "10" as birth date
         * 5. Select "2000" as birth year
         */
        // 1. Launch facebook.com
        await browser.url('/');


        // 2. Click on 'Create new account' button
        await $('//a[text()="Create new account"]').click();


        // 3. Select "Mar" as birth month
        const monthDropdown = await $('#month')
        await monthDropdown.selectByIndex(2);

        // 4. Select "10" as birth date
        const dateDropdown = await $('#day');
        await dateDropdown.selectByAttribute('value', '10')

        // 5. Select "2000" as birth year
        await $('#year').selectByVisibleText('2000');

        await browser.pause(10000);


    })


})