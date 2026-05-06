// function abcd(a:number){};
// function abcd(){};
// this is function overloading bcz they both have same signature


function abcd(a:string):void;
function abcd(a:string,b:number):number;

function abcd(a: any,b?: any){
    if(typeof a === "string" && b ===undefined){
        console.log("hey");
    }
    if(typeof a ==="string" && typeof b === "number"){
        return 123;
    }
    else throw new Error("something is wrong");
}
abcd("hey");
abcd("hey",12);