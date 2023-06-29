const { expect } = require("chai")


describe('Sample Test suite', () => {

    it('Sample TestCase', async () => {

        //launch facbook
        await browser.url('https://www.facebook.com/');
        await browser.pause(5000);

        //Getting the url
        const getFacebookUrl = await browser.getUrl();
        //check .facbook includes in url 
        expect(getFacebookUrl.includes('.faceboo'), '.facebook not match').to.be.true;

        //launch amazon
        await browser.url('https://www.amazon.com/');
        // getting title
        const getTitleAmazon = await browser.getTitle();
        //check title
        expect(getTitleAmazon.toLowerCase().includes('smile'),'Title not found').to.be.true;
        //Maximixze Window
        await browser.maximizeWindow();
        await browser.pause(5000);

        //launch weather.com
        await browser.url('https://www.weather.com/')
         // geting window handle   
        const windowHandle= await browser.getWindowHandle() ;

        //check windowHandle

        expect(windowHandle.length>0,'Window Handle Note greter than 0').to.be.true;

        //await browser.pause(5000);

        await browser.back();
        await browser.forward();
        await browser.refresh();


    });

})