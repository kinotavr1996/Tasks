"use strict";
var CustomerAddPopupModel = (function () {
    function CustomerAddPopupModel(email, firstName, lastName) {
        if (email === void 0) { email = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return CustomerAddPopupModel;
}());
exports.CustomerAddPopupModel = CustomerAddPopupModel;
//# sourceMappingURL=customer-add-popup.model.js.map