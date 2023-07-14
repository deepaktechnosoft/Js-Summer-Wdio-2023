const { expect } = require("chai");

describe('Mouse hover discussion', () => {

    it('Yahoo: Verify notifications is displayed when user move mouse on bell-Icon', async () => {
        /**
         * 1. Launch yahoo.com
         * 2. Move mouse on bell-icon
         * 3. Verify notifications are displayed
         * 
         */
        await browser.url('https://www.yahoo.com/');


        // 2. Move mouse on bell-icon
        const bellIconElement = await $('#ybarNotificationMenu');
        await bellIconElement.moveTo();

        // await browser.pause(2000);


        // 3. Verify notifications are displayed
        const isNotificationsDisplayed = await $("//span[text() = 'Notifications']").isDisplayed();

        expect(isNotificationsDisplayed, 'Notifications are NOT displayed').to.be.true

        await browser.pause(10000);



    })



})