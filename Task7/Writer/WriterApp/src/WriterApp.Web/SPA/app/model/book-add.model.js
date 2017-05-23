"use strict";
var select_list_item_model_1 = require('./select-list-item.model');
var BookAddModel = (function () {
    function BookAddModel(caption, publishedDate, writerIds, writers) {
        if (writerIds === void 0) { writerIds = []; }
        this.caption = caption;
        this.publishedDate = publishedDate;
        this.writerIds = writerIds;
        this.writers = writers;
    }
    BookAddModel.fromJSON = function (object) {
        return new BookAddModel(object['caption'], object['publishDate'], object['writerIds'], select_list_item_model_1.SelectListItem.fromJSONArray(object['writers']));
    };
    BookAddModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return BookAddModel.fromJSON(obj); });
    };
    return BookAddModel;
}());
exports.BookAddModel = BookAddModel;
//# sourceMappingURL=book-add.model.js.map