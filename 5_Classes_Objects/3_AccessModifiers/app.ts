class BottleMaker{
    constructor(private name:string,
        protected email:string
    )
        {

        }
}

class MetalBottleMaker extends BottleMaker{
    // constructor(email:string){
        //we can access email here too if we had extended that class but can't be accessed outside
    // }
    getValue(){
        // console.log(this.name);//this throws error but can be compiled by typescript
        // console.log(this.halua);//this throws error but can be compiled by typescript
    }
}
// let b1 = new MetalBottleMaker("chilton");
// b1.getValue();