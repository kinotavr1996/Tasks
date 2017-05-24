"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var book_http_service_1 = require("./../books-shared/book-http.service");
var book_list_model_1 = require("./../../../model/book-list.model");
var core_1 = require("@angular/core");
var paginator_component_1 = require("../../../shared-component/paginator/paginator.component");
var BookListComponent = (function () {
    function BookListComponent(_httpService, pagerService) {
        this._httpService = _httpService;
        this.pagerService = pagerService;
        this.isAddVisible = false;
        this.isEditVisible = false;
        this.pager = {};
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getSortingBooks('caption', 'ASC', 1)
            .subscribe(function (res) {
            _this.model = book_list_model_1.BookListModel.fromJSON(res);
            _this._setPage(1);
        });
    };
    BookListComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm("Are you shure ?")) {
            this._httpService.deleteBook(id)
                .subscribe(function (res) { _this.ngOnInit(); });
        }
    };
    BookListComponent.prototype.sort = function (columnName) {
        var _this = this;
        if (this.model.direction == 'ASC') {
            this.model.direction = "DESC";
            this.model.column = columnName;
            this._httpService.getSortingBooks(this.model.column, this.model.direction, this.model.page)
                .subscribe(function (res) {
                _this.model = book_list_model_1.BookListModel.fromJSON(res);
            });
        }
        else {
            this.model.direction = "ASC";
            this._httpService.getSortingBooks(this.model.column, this.model.direction, this.model.page)
                .subscribe(function (res) {
                _this.model = book_list_model_1.BookListModel.fromJSON(res);
            });
        }
    };
    BookListComponent.prototype._setPage = function (page) {
        var _this = this;
        if (page < 1 || page > this.model.totalPage) {
            return;
        }
        this.model.page = page;
        this.pager = this.pagerService.getPager(this.model.page, this.model.pageSize, this.model.totalPage);
        this._httpService.getSortingBooks(this.model.column, this.model.direction, this.model.page)
            .subscribe(function (res) {
            _this.model = book_list_model_1.BookListModel.fromJSON(res);
        });
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    core_1.Component({
        template: require('./book-list.component.html'),
        styles: [require('./book-list.component.css')]
    }),
    __metadata("design:paramtypes", [book_http_service_1.BookHttpService, paginator_component_1.PagerService])
], BookListComponent);
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=book-list.component.js.map