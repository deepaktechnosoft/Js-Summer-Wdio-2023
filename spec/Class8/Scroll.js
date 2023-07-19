/**
 * Function to scroll:
 *      scrollIntoView()
 */

// Verify Spontaneous Trips links is enabled on hotels.com
/**
 * 1. Launch hotels.com
 * 2. Verify Spontaneous Trips link is enabled
 */

describe('Scroll Example', () => {

    it('Verify Spontaneous Trips links is enabled on hotels.com', async () => {

        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');

        // 2. Verify Spontaneous Trips link is enabled
        const spontaneousTripsElement = await $('//h3[contains(text(), "Spontaneous Trips")]');
        await spontaneousTripsElement.scrollIntoView();

        await browser.pause(10000);

        const isSpontaneousTripsEnabled = await spontaneousTripsElement.isEnabled();
        console.log(`\n\nisSpontaneousTripsEnabled -> ${isSpontaneousTripsEnabled}\n\n`);


    })


})