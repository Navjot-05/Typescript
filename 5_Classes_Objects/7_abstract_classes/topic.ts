class Payment{
    constructor(protected amount:number,protected accountNumber:number){}
    isPaymentValid(amount:number,accountNumber:number){
        return this.amount >0;
    }
}

class Paytm extends Payment{}
class Gpay extends Payment{}
class Phonepe extends Payment{}
