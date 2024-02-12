import { LightningElement, api } from 'lwc';
import createMyOrder from '@salesforce/apex/CheckOutController.createMyOrder';
import { NavigationMixin } from 'lightning/navigation';
export default class CheckoutPage extends NavigationMixin(LightningElement) {
    @api selectedItems;

    handleConfirmPurchase() {
        if (this.selectedItems && this.selectedItems.length > 0) {
            createMyOrder({ selectedItems: this.selectedItems })
                .then(result => {
                    this[NavigationMixin.Navigate]({
                        type: 'standard__component',
                        attributes: {
                            componentName: 'goodDealApp'
                        }
                   
                })})
                .catch(error => {
                    console.error('Error creating My Order: ', error);
                });
        }
        

    }
}
