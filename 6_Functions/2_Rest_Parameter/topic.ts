function abcd(...args:number[]){
//keeping all of the variables in one variable parameter using rest operator
console.log(args);
}


abcd(1,2,3,4,5,6,7,8,9,10,11,12);

// ...args is rest and spread operator 

var arr = [1,2,3,4,5,66];
var arr2 = [...arr];// here ... means  spread operator