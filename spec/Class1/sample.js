const { expect } = require("chai");

// Test Suite
describe('Sample Test Suite', () => {

    /**
     * browser
     *      variable which connects with the chrome-window (using windowHandle) which is opened by automation code.
     */


    // Test Case
    it('Sample Testcase: Verify correct webpage opened using url()', async () => {
        /**
         * To open/launch a webpage
         * funcion: url()
         */
        const webUrl = 'https://www.amazon.com/';
        await browser.url(webUrl);
        /**
         * To pause the execution
         * function: pause()
         * input: the number of milliseconds (1-sec = 1000-milliseconds) you would like to pause
         */
        await browser.pause(5000);

        // Get the current url from webpage and print it in the console.
        /**
         * To get current url on the webpage
         * function: getUrl()
         * return: String
         */
        const currentUrl = await browser.getUrl();
        
        expect(currentUrl, 'Url is NOT as expected').to.equal('abcd.com');

    });



    it('Verify the page title contains "smile" (ignoring the cases)', async () => {
        /**
         * 1. launch amazon.com
         * 2. Get the current page title
         * 3. Verify the current page title contains "smile" (ignoring cases)
         */
        // 1. launch amazon.com
        await browser.url('https://www.amazon.com/')

        // 2. Get the current page title
        /**
         * To get the page title
         * function: getTitle()
         * returns: String
         */
        const pageTitle = await browser.getTitle();

        // 3. Verify the current page title contains "smile" (ignoring cases)
        // the string-stored in pageTitle-variable contains "smile" or not
        const isContains_smile = pageTitle.toLowerCase().includes('smile');
        expect(isContains_smile, 'Page title does NOT contain "smile"').to.be.true;

    });


    /**
     * 1. Launch amazon.com         ->      url()
     * 2. Launch facebook.com       ->      url()
     * 3. Go back                   ->      back()
     * 4. Launch hotels.com         ->      url()
     * 5. Launch twitter.com        ->      url()
     * 6. Go back                   ->      back()
     * 7. Go back                   ->      back()
     * 8. Go Forward                ->      forward()
     * 9. Refresh the webpage       ->      refresh()
     * 
     */
    it.only('Misc functions in webDriverIO', async () => {
        await browser.url('https://www.amazon.com/')

        await browser.pause(5000);

        await browser.url('https://www.facebook.com/')
        await browser.pause(5000);

        /**
         * To go back in browser
         * function: back()
         */
        await browser.back()
        await browser.pause(5000);

        await browser.url('https://www.hotels.com/')
        await browser.pause(5000);


        await browser.url('https://www.twitter.com/')
        await browser.pause(5000);

        await browser.back()
        await browser.pause(5000);

        await browser.back()
        await browser.pause(5000);

        /**
         * To go forward in browser
         * function: forward()
         */
        await browser.forward()
        await browser.pause(5000);


        /**
         * To refresh the current browser
         * function: refresh()
         */
        await browser.refresh()
        await browser.pause(5000);


    })







})