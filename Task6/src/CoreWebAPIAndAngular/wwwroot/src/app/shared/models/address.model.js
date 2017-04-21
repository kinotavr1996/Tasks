"use strict";
var AddressModel = (function () {
    function AddressModel(id, city, state, zip) {
        this.id = id;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    AddressModel.fromJSON = function (object) {
        return new AddressModel(object['id'], object['city'], object['state'], object['zip']);
    };
    AddressModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return AddressModel.fromJSON(obj); });
    };
    return AddressModel;
}());
exports.AddressModel = AddressModel;
//# sourceMappingURL=address.model.js.map