"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var select_list_item_model_1 = require("./select-list-item.model");
var BookEditModel = (function () {
    function BookEditModel(id, caption, publishedDate, writerIds, writerModel) {
        this.id = id;
        this.caption = caption;
        this.publishedDate = publishedDate;
        this.writerIds = writerIds;
        this.writerModel = writerModel;
    }
    BookEditModel.fromJSON = function (object) {
        return new BookEditModel(object['id'], object['caption'], object['publishedDate'], object['writerIds'], select_list_item_model_1.SelectListItem.fromJSONArray(object['writers']));
    };
    BookEditModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return BookEditModel.fromJSON(obj); });
    };
    return BookEditModel;
}());
exports.BookEditModel = BookEditModel;
//# sourceMappingURL=book-edit.model.js.map