"use strict";
// function abcd(a:number){};
// function abcd(){};
// this is function overloading bcz they both have same signature
Object.defineProperty(exports, "__esModule", { value: true });
function abcd(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("something is wrong");
}
abcd("hey");
abcd("hey", 12);
//# sourceMappingURL=topis.js.map