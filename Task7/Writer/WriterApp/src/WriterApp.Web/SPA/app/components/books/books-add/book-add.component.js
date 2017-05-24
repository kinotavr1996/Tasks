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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var book_http_service_1 = require("../books-shared/book-http.service");
var book_add_model_1 = require("../../../model/book-add.model");
var BookAddComponent = (function () {
    function BookAddComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
    }
    BookAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new book_add_model_1.BookAddModel(null, null, null, null);
        this._httpService.getBooks()
            .subscribe(function (res) {
            _this.model = book_add_model_1.BookAddModel.fromJSON(res);
        });
    };
    BookAddComponent.prototype.getIds = function (val) {
        this.model.writerIds = [];
        for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
            var a = val_1[_i];
            this.model.writerIds.push(a);
        }
    };
    BookAddComponent.prototype.checker = function () {
        if (this.model.writerIds != null)
            return this.model.writerIds.length > 0;
        else
            return false;
    };
    BookAddComponent.prototype.onSubmitForm = function () {
        var _this = this;
        if (this.model.writerIds != null) {
            if (this.model.writerIds.length > 0) {
                this._httpService.postCustomer(this.model)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl("/spa/books/list");
                });
            }
            else {
                alert('Choose writer`s');
            }
        }
        else {
            alert('Choose writer`s');
        }
    };
    BookAddComponent = __decorate([
        core_1.Component({
            template: require('./book-add.component.html'),
            styles: [require('./book-add.component.css')]
        }), 
        __metadata('design:paramtypes', [book_http_service_1.BookHttpService, router_1.Router])
    ], BookAddComponent);
    return BookAddComponent;
}());
exports.BookAddComponent = BookAddComponent;
//# sourceMappingURL=book-add.component.js.map