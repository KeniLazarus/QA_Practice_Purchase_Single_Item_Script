//Page with purchase confirmation, this is step three of the checkout process;
//Script confirms the existence of the page, thereby confirming that the purchase item process has been completed.

class CheckoutCompleteConfirmation {

    get PurchaseConfirmationCheckmark () {return $('//img[@alt="Pony Express"]')};

async OrderCompleted () {
    await expect(this.PurchaseConfirmationCheckmark).toBeExisting};}

export default new CheckoutCompleteConfirmation();