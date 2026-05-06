"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    amount;
    accountNumber;
    constructor(amount, accountNumber) {
        this.amount = amount;
        this.accountNumber = accountNumber;
    }
    isPaymentValid(amount, accountNumber) {
        return this.amount > 0;
    }
}
class Paytm extends Payment {
}
class Gpay extends Payment {
}
class Phonepe extends Payment {
}
//# sourceMappingURL=topic.js.map