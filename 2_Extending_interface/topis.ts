interface User{
    name:string;
    email:string;
    password:string;
}
interface Admin extends User{
    admin:boolean;
}

// function abcd(obj:Admin){
//     obj.admin;//this got in it bcz we extended obj to Admin
// }









// two interfaces of the same name merges into one and shows both of their properties example
// interface example{
//     name:String;
// }

// interface example{
//     email:string;
// }

// function abcd(obj:example){
//     obj.email;
//     obj.name;
// }


















