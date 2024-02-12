import { LightningElement, wire, track } from 'lwc';
import getConsumerElectronics from '@salesforce/apex/GoodDealController.getConsumerElectronics';



import { NavigationMixin} from 'lightning/navigation';
export default class GoodDealApp extends NavigationMixin(LightningElement) {
    @track selectedItems = [];
    @track itemOptions = [];
 

    @wire(getConsumerElectronics)
    wiredConsumerElectronics({ data, error }) {
        if (data) {
            this.itemOptions = data.map(item => ({ label: item.Name, value: item.Id }));
        } else if (error) {
            console.error('Error retrieving Consumer Electronics: ', error);
        }
    }

    handleSelection(event) {
        this.selectedItems = event.target.value;
        
    }
    
   
    redirectToCheckout() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__checkoutPage1Path'
            },
            state: {
                selectedItem: this.selectedItems
            }
        });
    }
        
      
       }
