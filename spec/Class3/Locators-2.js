// Locators
/**
 * Locators: way to reach/find webElement(s).
 * 
 */

// Chropath extension
/**
 * Link:
 *      https://chrome.google.com/webstore/detail/chropath/ljngjbnaijcbncmcnjfhigebomdlkcjo?sid=4D3acd&hl=fil
 * 
 * helps us to write locators and also helps to verify custom locators
 * 
 */

// Steps to interact with WebElement
/**
 *  1. Find the unique way to find the line in the dome which relates with the webElement
 *      (we use, tag, attribute, text from the DOM)
 *  2. based on the locator strategy, use corresponding code to find the webElement
 *  3. once we have the webElement, then use correct function to perform the interaction.
 */

// Function to find a WebElement
/**
 * function: $
 */

// Function to interact with WebElement:
/**
 * 1. type
 *      function: setValue()
 *      input: String-input which is the text we want to type in the WebElement
 * 
 * 2. click
 *      function: click()
 * 
 * 3. To get if webElement is displayed
 *      function: isDisplayed()
 *      if the webElement is displayed
 *          function returns true
 *      otherwise
 *          function returns false
 * 
 *  --->    ...continued from spec/Class2/Locators.js
 * 
 * 4. To get the text value fof a webElement
 *      function: getText()
 *      returns the text-value as a String
 * 
 *      
 */

// Locator Strategies
/**
 * 1. using id-attribute and it's value
 *      id-attribute's value is ALWAYS going to be unique for the webpahe (in the DOM)
 *      To check if id-value is unique; In chropath -> //*[@id="id-value"]
 * 
 *      const webElement = $('#id-value')
 * 
 * 2. using any other attribute's value instead id-attribute
 *      To check if attribute-value is unique; In chropath -> //tagName[@attr="attr value"]
 *      NOTE: Attribute value CANNOT have spaces for this locator strategy.  
 * 
 *      const webElement = $('tagName[attrName=attrValue]') 
 * 
 * 3. using text value
 *      To check if text of webElement is unique to find it, In Chropath -> //tagName[text()="Text Value"]
 * 
 *      const webElement = $('tagName=Text value')
 * 
 * 4. using partial text value
 *      To check if partial-text of webElement is unique to find it, In Chropath -> //tagName[contains(text(),"partial text-value")]
 * 
 *      const webElement = $('tagName*=Partial Text value')
 *  
 *  --->    ...continued from spec/Class2/Locators.js
 * 
 *  using xpath
 *      Types:
 *          1. Absolute Xpath
 *              a) tells the route to reach to a particular webElment from html-tag (or root-tag)
 *              b) starts with single slash (/)
 *              c) not reliable, any changes in the dom can break the absolute xpath
 * 
 *          eg:
 *              /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/input[1]
 * 
 *          2. Relative Xpath
 *              a) starts with double slash (//)
 *              b) reliable bcz we use tagName, attribute-value or text-value in combination to find the line in the dom (or to find the webElement)
 * 
 *          --> Direct xpath (Simple xpath)
 *          --> Indirect xpath (Advanced xpath)
 * 
 */
// Direct xpath (Simple xpath)
/**
 * 1. using attribute's value
 *      //tagName[@attrName = "attr value"]
 *      Find the tag(tagName) in dom where attribute(attrName) has value equals to "attr value"
 *      eg: //input[@data-testid = "royal_email"]
 * 
 *      const webElement = await $('//tagName[@attrName = "attr value"]');
 * 
 * 2. using text value
 *      //tagName[text() = "text value"]
 *      Find the tag(tagName) in dom where text-value is equals to "text value"
 *      eg: //button[text() = "Log In"]
 *  
 *      const webElement = await $('//tagName[text() = "text value"]');
 *
 * 3. using partial value of attribute
 *      //tagName[contains(@attrName , "partial attr value")]
 *      Find the tag(tagName) in dom where attribute(attrName) contains "partial attr value"
 *      eg: //input[contains(@class, "arch")]
 * 
 *      const webElement = await $('//tagName[contains(@attrName , "partial attr value")]');
 * 
 * 4. using partial text value
 *      //tagName[contains(text() , "partial text value")]
 *      Find the tag(tagName) in the dom where text-value contains "partial text value"
 *      eg: //div[contains(text() , "cent")]
 * 
 *      const webElement = await $('//tagName[contains(text() , "partial text value")]');
 * 
 * 5. using starting value of attribute
 *      //tagName[starts-with(@attrName , "starting attr value")]
 *      Find the tag(tagName) in dom where attribute(attrName)'s value starts with "starting attr value"
 *      eg: //input[starts-with(@class, "sea")]
 * 
 *      const webElement = await $('//tagName[starts-with(@attrName , "starting attr value")]');
 * 
 * 6. using starting portion of text value
 *      //tagName[starts-with(text() , "starting text value")]
 *      Find the tag(tagName) in the dom where text-value starts with "starting text value"
 *      eg: //div[contains(text() , "cent")]
 * 
 *      const webElement = await $('//tagName[starts-with(text() , "starting text value")]');
 * 
 * 7. not-operator
 *      //tagName[not(@attrName = "attr value")]
 *      Find the tag(tagName) in the dom where @attrName-attribute is NOT equals to "attr value"
 * 
 *      //tagName[not(contains(text() , "partial text value"))]
 *      Find the tag(tagName) in the dom where text-value does NOT contains "partial text value"
 * 
 *      //tagName[not(text() = "text value")]
 *      Find the tag(tagName) in dom where text-value is NOT equals to "text value"
 * 
 * 8. and/or operator
 *      //tagName[@attrName = "attr value" and text() = "text value"]
 *      Find the tag(tagName) in the dom where attribute(attrName) has value equals to "attr value" AND has text-value equals to "text value"
 * 
 *      //tagName[starts-with(text() , "starting text value") or contains(@attrName , "partial attr value")]
 *      Find the tag(tagName) in the dom where either text-value starts with "starting text value" OR attribute(attrName)-value contains "partial attr value"
 * 
 */