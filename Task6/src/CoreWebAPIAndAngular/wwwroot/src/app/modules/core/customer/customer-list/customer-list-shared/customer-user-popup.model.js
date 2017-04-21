"use strict";
var address_model_1 = require("app/shared/models/address.model");
var UserAddPopupModel = (function () {
    function UserAddPopupModel() {
        this.address = new address_model_1.AddressModel(9999, 'Khotin', 'Ukraine', '60000');
        this.email = '';
        this.firstName = '';
        this.lastName = '';
    }
    return UserAddPopupModel;
}());
exports.UserAddPopupModel = UserAddPopupModel;
//# sourceMappingURL=customer-user-popup.model.js.map