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
 */