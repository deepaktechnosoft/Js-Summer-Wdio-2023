const { expect } = require("chai");

describe('Basic xpath locator strategy', () => {
    
    /**
     * 1. Launch https://www.accuweather.com/
     * 2. Verify the current temp is greater than feelsLikeTemp
     */
    it('Verify current temp is greater than feelsLike temp', async () => {
        // 1. Launch https://www.accuweather.com/
        await browser.url('https://www.accuweather.com/');

        // 2. Verify the current temp is greater than feelsLikeTemp
        /*
            Get the webElement related to current-temp
            Get the text from current-temp-webElement
        */
       const currentTempElement = await $('//span[@class = "recent-location-temp"]');
       let currentTempString = await currentTempElement.getText();
       // let currentTemp = Number(currentTempString.trim().replace('° F', ''))
            // " 78° " -> "78°" 
            // "78°" -> "78" 
            // "78" -> 78

            // " 78° F" -> "78° F" -> starting from index-0 right before the index of °sign
        let degIndex = currentTempString.indexOf('°');
        let currentTemp = Number(currentTempString.substring(0, degIndex));

        /*
            Get the webElement related to feels-like-temp
            Get the text from feels-like-temp-webElement
        */
        // const feelsLikeTempElement = await $('//span[@class = "recent-location-real-feel-value"]');
        const feelsLikeTempElement = await $('//span[contains(@class , "feel-value")]');
        let feelsLikeTempString = await feelsLikeTempElement.getText();
        // let feelsLikeTemp = Number(feelsLikeTempString.trim().replace('°', ''))

        degIndex = feelsLikeTempString.indexOf('°');
        let feelsLikeTemp = Number(feelsLikeTempString.substring(0, degIndex));

        expect(currentTemp > feelsLikeTemp, 'Cuurent temp is NOT greater than FeelsLike temp').to.be.true;

        await browser.pause(10000);


    })


})