"use strict";
// enums=enumerations objects like
Object.defineProperty(exports, "__esModule", { value: true });
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOTFOUND; //accessing enums
//# sourceMappingURL=enums.js.map