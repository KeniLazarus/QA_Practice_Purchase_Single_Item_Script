//Page for checkout, this is step two of the checkout process;
//Script confirms the existence of the page, then proceeds to the third step of the checkout.

class CheckoutStepTwo {

    get FinishButton () {return $('//button[@id="finish"]')};

async CheckoutPageTwoIdentifier () {
    await expect(this.FinishButton).toBeExisting();}

async ClickOnFinish () {
    await this.FinishButton.click ();}}

export default new CheckoutStepTwo();