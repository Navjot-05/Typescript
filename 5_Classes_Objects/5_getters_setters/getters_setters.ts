// class User{
//     constructor(public name:string, public age:number){

//     }
//     getName(){
//         return this.name;
//     }

//     setName(value:string){
//         this.name=value;
//     }
// }
// let u1 = new User("Navjot Singh",21);



class User{
    constructor(public _name:string, public _age:number){}
    //getter
    get name(){//u1.name// to know the user 1 name
        return this._name;
    }
    set newName(value:string){//u1.newName="Thind" //for setting new name 
        this._name=value;
    }
}

let u1 = new User("Navjot Thind",21);