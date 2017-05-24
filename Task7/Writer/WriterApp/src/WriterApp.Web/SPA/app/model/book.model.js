"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var writer_model_1 = require("./writer.model");
var BookModel = (function () {
    function BookModel(id, caption, publishDate, writerModel) {
        this.id = id;
        this.caption = caption;
        this.publishDate = publishDate;
        this.writerModel = writerModel;
    }
    BookModel.fromJSON = function (object) {
        return new BookModel(object['id'], object['caption'], object['publishedDate'], writer_model_1.WriterModel.fromJSONArray(object['writers']));
    };
    BookModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return BookModel.fromJSON(obj); });
    };
    return BookModel;
}());
exports.BookModel = BookModel;
//# sourceMappingURL=book.model.js.map