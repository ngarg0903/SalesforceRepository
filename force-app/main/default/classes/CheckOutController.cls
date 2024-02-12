public with sharing class CheckOutController {
    @AuraEnabled
    public static void createMyOrder(List<Consumer_Electronics__c> selectedItems) {
        My_Order__c myOrder = new My_Order__c();
        insert myOrder;
        List<Order_Item__c> orderItems = new List<Order_Item__c>();
        for (Consumer_Electronics__c item : selectedItems) {
            Order_Item__c orderItem = new Order_Item__c();
            orderItem.Name = item.Name;
            orderItem.My_Order__c = myOrder.Id;
            orderItems.add(orderItem);
        }
       try {
        insert orderItems;
        } catch (Exception e) {
            // Handle any exceptions that occur during the record creation
            System.debug('Error creating My Order record: ' + e.getMessage());
            throw new AuraHandledException('Error creating My Order record.');
        }
    }

}