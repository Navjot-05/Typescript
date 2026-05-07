//TypeGuards and Typescript Utility Types
//typeGuards = Typenarrowing (not sure which of the datatype is it of)

// 1.
// function abcd(arg:string | number){
//     // arg.//this will only have functions that are common in number and string

//     //to get suggestions according to the type of it's datatype use below method
//     if(typeof arg === "number"){}
//     else if(typeof arg === "string"){}
//     else{}
// }

// abcd(12);

// abcd("hello");



//Using typeof and instance of 


//Partial, Required , Readonly

//2. using Typeof 
class TvRemote{
    switchTvOff(){
        console.log("Switching off TV");
    }
}

class carRemote{
    switchCarOff(){
        console.log("Switching off Car");
    }
}

const tv = new TvRemote();
const car = new carRemote();

function switchingOff(device:TvRemote | carRemote){
    if(device instanceof TvRemote){
        device.switchTvOff();
    }else if(device instanceof carRemote){
        device.switchCarOff();
    }
}

switchingOff(car);