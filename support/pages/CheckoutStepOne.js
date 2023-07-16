//Page for item checkout, asks for user information. This is step one of the checkout process;
//Scripts confirms the existence of the page, then inputs the requested information before going on to the second checkout page.

class CheckoutStepOne {

    get InputName () {return $('//input[@id="first-name"]')};
    get InputSurname () {return $('//input[@id="last-name"]')};
    get InputZipCode () {return $('//input[@id="postal-code"]')};
    get ContinueButton () {return $('//input[@id="continue"]')};

async CheckoutPageOneIdentifier () {
    await expect(this.InputName).toBeExisting()};

async InputRequestedInformation (name,surname,zipcode) {
    await this.InputName.setValue(name);
    await this.InputSurname.setValue(surname);
    await this.InputZipCode.setValue(zipcode);}

async ClickOnContinueButton () {
    await this.ContinueButton.click();}}
    
export default new CheckoutStepOne();