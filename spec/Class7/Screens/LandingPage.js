class LandingPage {


    // locators for the webElement on LandingPage
    messengerLinkLocator = '=Messenger'
    loginEmailLocator = '#email'
    loginPwdLocator = '#pass'
    loginBtnLocator = '<button>'
    
    
    
    // functions to interact with webElements on the LandingPage
    async clickMessenger() {
        await $(this.messengerLinkLocator).click()
    }

    async isLoginUsernameEnabled() {
        return await $(this.loginEmailLocator).isEnabled()
    }

    async isLoginPasswordEnabled() {
        return await $(this.loginPwdLocator).isEnabled()
    }

    async isLoginButtonEnabled() {
        return await $(this.loginBtnLocator).isEnabled()
    }

    async getLoginEmailAttributeValue(attrName) {
        return await $(this.loginEmailLocator).getAttribute(attrName);
    }


    async getLoginPwdAttributeValue(attrName) {
        return await $(this.loginPwdLocator).getAttribute(attrName);
    }

    async getLoginBtnText() {
        return await $(this.loginBtnLocator).getText();
    }


}
module.exports = LandingPage;