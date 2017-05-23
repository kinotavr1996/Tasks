"use strict";
var select_list_item_model_1 = require('./select-list-item.model');
var BookAddModel = (function () {
    function BookAddModel(caption, publishedDate, writers) {
        this.caption = caption;
        this.publishedDate = publishedDate;
        this.writers = writers;
    }
    BookAddModel.fromJSON = function (object) {
        return new BookAddModel(object['caption'], object['publishDate'], select_list_item_model_1.SelectListItem.fromJSONArray(object['writers']));
    };
    BookAddModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return BookAddModel.fromJSON(obj); });
    };
    return BookAddModel;
}());
exports.BookAddModel = BookAddModel;
//# sourceMappingURL=book-add.model.js.map