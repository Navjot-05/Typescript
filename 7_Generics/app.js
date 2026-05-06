"use strict";
//we'll make a function which prints and accepts any value
// function logger(a:any){
//     // a.//on using this a. we are not getting any intellisense for our code
//     console.log(a);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// logger("hey");
// logger(12);
// logger(true);
//Below is the thing <T> assigned to a:T
//Now whenever the abcd<> changed during instance of it then it gets changed and automatically gets assigned to the 'a'
//Generic Functions
// function abcd <T> (a:T){
// }
// abcd<string>("Navjot");
// abcd<number>(12);
// function log<T>(val:T){
//     console.log(val);
// }
// log("hey");
// log(12);
// if removed <string> from here then typescript automatically recognises
// 2.Generic Interfaces
// interface Halua<T>{
//     name: string;
//     age:number;
//     key:T;
// }
// function abcd(obj:Halua<string>){
//     obj.key;
// }
// abcd({name:"Foo",age:25,key:"asdfghj"})
//3.Generic clsses
class BottleMaker {
    key;
    constructor(key) {
        this.key = key;
    }
}
// let b1 = new BottleMaker<string>("hey");//we can use 
// <string>     to describe the datatype and if we prefer we may not
let b1 = new BottleMaker("hey");
console.log(b1);
// theres a catch
function abcd(a, b) {
    // return a;
    if (typeof a === "string") {
        //to get the intellisense back we must use this if condition
    }
    return b;
    // return "hey";//throws error bcz it's string literal not string
    //we must write this as this to make it work 
    return "hey";
}
abcd("hey", "hello");
//# sourceMappingURL=app.js.map