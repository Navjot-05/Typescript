// function abcd(a:number, b:string){
//     //will show functions that will occur on that specific data type
// }

interface User{
    name:string,
    email:string,
    password:string,
    gender?:string,// this became optional 
}

function abcd(obj:User)//obj:User means obj will have the structure that is present in the user
{
    console.log(obj.name, obj.password,obj.email);
}

abcd({
    email:"navthind0903@gmail.com",
    name:"Navjot Singh",
    password:"Navjot335027@"});