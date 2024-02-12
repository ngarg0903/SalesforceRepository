public with sharing class GoodDealController {
    @AuraEnabled(cacheable=true)
    public static List<Consumer_Electronics__c> getConsumerElectronics() {
        return [SELECT Id, Name FROM Consumer_Electronics__c];
    }
    
    
}
