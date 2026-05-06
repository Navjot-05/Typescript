//Functions Types:
//1.

function abcdef(name:string,age:number,cb: (arg:string) => void,income:string= "not to be disclosed",gender?:string){
    cb("hey");//here gender?: is a optional parameter& income here is a default parameter
}

abcdef("harsh",25,(arg:string) => {
    console.log("abcd");
},"1200")