type value= number|string|null;//creating new datatype


let a :value;


type User={
    name:string,
    email:string
}

type Admin=User&{
    getDetails(User:string):void
}


// type of same name can't be merged as we saw in interface