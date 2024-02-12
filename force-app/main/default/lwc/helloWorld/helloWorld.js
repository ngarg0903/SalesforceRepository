import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    A = "Nidhi"
    B = "Beautiful"
    n1 = 9
    n2 = 6
    myTeam = ["Reshu","Anusha","Chera","Leo"]
    ceoList = [
        {id : 1,
         Cname : "Google",
         ceo : "Sundar Pichai"},
         {
            id : 2,
            Cname : "Facebook",
            ceo : "Mark Zukerberg"
         },
         {
            id  : 3,
            Cname : "Apple",
            ceo : "Steve Jobs"
         }
    ]
    isVisible = false
    method1(event){
        this.B = event.target.value
    }
    number1(event){
        this.n1 = event.target.value
    }
    number2(event){
        this.n2 = event.target.value
    }
    get sum(){
        return this.n1*this.n2
    }
    handleClick(){
        this.isVisible = true
    }

}