"use strict";
var address_model_1 = require("app/shared/models/address.model");
var UserModel = (function () {
    function UserModel(id, firstName, lastName, address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    UserModel.fromJSON = function (object) {
        return new UserModel(object['id'], object['firstName'], object['lastName'], address_model_1.AddressModel.fromJSON(object['address']));
    };
    UserModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return UserModel.fromJSON(obj); });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map