const { expect } = require("chai");

describe('FindElements scenarios', () => {

    /**
     * TC: Verify correct number of options under 'Banquet Tables'
     * 1. Launch https://classroomessentialsonline.com/
     * 2. Move to 'Banquet Tables' heading
     * 3. Verify 3 options are available under 'Banquet Tables'
     */
    it('Verify correct number of options under "Banquet Tables"', async () => {

        await browser.url('https://classroomessentialsonline.com/');

        // 2. Move to 'Banquet Tables' heading
        const banquetTablesElement = await $('//a[@href="/banquet-tables/"]');
        await banquetTablesElement.moveTo();

        // 3. Verify 3 options are available under 'Banquet Tables'
        const banquestTablesOptions = await $$('//a[@href="/banquet-tables/"]/following-sibling::div//a');
        expect(banquestTablesOptions.length, 'Number of options in banquet tables are NOT as expected').to.equal(3);

    });



})