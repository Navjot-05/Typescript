"use strict";
// class User{
//     constructor(public name:string, public age:number){
Object.defineProperty(exports, "__esModule", { value: true });
//     }
//     getName(){
//         return this.name;
//     }
//     setName(value:string){
//         this.name=value;
//     }
// }
// let u1 = new User("Navjot Singh",21);
class User {
    _name;
    _age;
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    //getter
    get name() {
        return this._name;
    }
    set newName(value) {
        this._name = value;
    }
}
let u1 = new User("Navjot Thind", 21);
//# sourceMappingURL=getters_setters.js.map