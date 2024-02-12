import Name from '@salesforce/schema/Account.Name';
import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {}
    questions = [
        { id: "Ques1",
         name: "What is your Favorite Food?",
         options: {a: "Chicken",
                   b: "Kababa",
                   c: "Egg Curry"},
         answer: "c"},
         { id: "Ques2",
         name: "What is your Favorite Place?",
         options: {a: "Pune",
                   b: "Bangalore",
                   c: "Hyderabad"},
         answer: "a"},
         { id: "Ques3",
         name: "What is your Favorite season?",
         options: {a: "Summer",
                   b: "Rainy Season",
                   c: "Winter"},
         answer: "c"}] 
         
         handlerchange(event){
            console.log("name",event.target.name)
            console.log("value",event.target.value)
            const name1 = event.target.name
            const value1 = event.target.value
            this.selected = {...this.selected, [name1]:value1}
        }
        handleclick1(event) {}
        handleclick2(event) {}


         }
        