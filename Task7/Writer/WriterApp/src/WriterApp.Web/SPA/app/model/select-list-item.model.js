"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectListItem = (function () {
    function SelectListItem(value, text) {
        this.value = value;
        this.text = text;
    }
    SelectListItem.fromJSON = function (object) {
        return new SelectListItem(+object['value'], object['text']);
    };
    SelectListItem.fromJSONArray = function (array) {
        return array.map(function (obj) { return SelectListItem.fromJSON(obj); });
    };
    return SelectListItem;
}());
exports.SelectListItem = SelectListItem;
//# sourceMappingURL=select-list-item.model.js.map