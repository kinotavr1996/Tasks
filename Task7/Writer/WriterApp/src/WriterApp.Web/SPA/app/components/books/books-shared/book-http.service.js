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
var core_1 = require("@angular/core");
var config_1 = require("../../../config/config");
var http_service_1 = require("../../../shared-component/services/http.service");
require("rxjs/Rx");
var BookHttpService = (function () {
    function BookHttpService(_httpService) {
        this._httpService = _httpService;
    }
    BookHttpService.prototype.getBookById = function (id) {
        return this._httpService.get(config_1.AppConfig.urls.books + "/" + id)
            .map(function (res) { return res.json(); });
    };
    BookHttpService.prototype.getSortingBooks = function (sortBy, orderBy, pageNumber) {
        return this._httpService.get(config_1.AppConfig.urls.getAllBook
            + "?sortOrder=" + sortBy + "&direction=" + orderBy + "&page=" + pageNumber)
            .map(function (res) { return res.json(); });
    };
    BookHttpService.prototype.getBooks = function () {
        return this._httpService.get(config_1.AppConfig.urls.createBook)
            .map(function (res) { return res.json(); });
    };
    BookHttpService.prototype.postBook = function (data) {
        return this._httpService.post(config_1.AppConfig.urls.books, data)
            .map(function (res) { return res; });
    };
    BookHttpService.prototype.putBook = function (id, data) {
        return this._httpService.put(config_1.AppConfig.urls.books + "/" + id, data)
            .map(function (res) { return res; });
    };
    BookHttpService.prototype.deleteBook = function (id) {
        return this._httpService.delete(config_1.AppConfig.urls.books + "/" + id)
            .map(function (res) { return res; });
    };
    return BookHttpService;
}());
BookHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], BookHttpService);
exports.BookHttpService = BookHttpService;
//# sourceMappingURL=book-http.service.js.map