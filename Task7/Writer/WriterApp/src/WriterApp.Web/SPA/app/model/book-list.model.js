"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_model_1 = require("./book.model");
var BookListModel = (function () {
    function BookListModel(filter, column, direction, hasNextPage, hasPrePage, pageSize, totalPage, page, bookModel) {
        this.filter = filter;
        this.column = column;
        this.direction = direction;
        this.hasNextPage = hasNextPage;
        this.hasPrePage = hasPrePage;
        this.pageSize = pageSize;
        this.totalPage = totalPage;
        this.page = page;
        this.bookModel = bookModel;
    }
    BookListModel.fromJSON = function (object) {
        return new BookListModel(object['filter'], object['order']['column'], object['order']['direction'], object['hasNextPage'], object['hasPreviousPage'], object['pageSize'], object['totalPages'], object['page'], book_model_1.BookModel.fromJSONArray(object['items']));
    };
    BookListModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return BookListModel.fromJSON(obj); });
    };
    return BookListModel;
}());
exports.BookListModel = BookListModel;
//# sourceMappingURL=book-list.model.js.map