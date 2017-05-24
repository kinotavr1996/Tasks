"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_model_1 = require("./book.model");
var WriterModel = (function () {
    function WriterModel(id, fullName, dateOfBirth, biography, Book) {
        this.id = id;
        this.fullName = fullName;
        this.dateOfBirth = dateOfBirth;
        this.biography = biography;
        this.Book = Book;
    }
    WriterModel.fromJSON = function (object) {
        return new WriterModel(object['id'], object['fullName'], object['dateOfBirth'], object['biography'], book_model_1.BookModel.fromJSONArray(object['books']));
    };
    WriterModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return WriterModel.fromJSON(obj); });
    };
    return WriterModel;
}());
exports.WriterModel = WriterModel;
//# sourceMappingURL=writer.model.js.map