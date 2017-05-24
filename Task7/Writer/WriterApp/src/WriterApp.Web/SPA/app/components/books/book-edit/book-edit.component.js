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
var book_edit_model_1 = require("./../../../model/book-edit.model");
var book_http_service_1 = require("../books-shared/book-http.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var BookEditComponent = (function () {
    function BookEditComponent(_httpService, route, router) {
        this._httpService = _httpService;
        this.route = route;
        this.router = router;
    }
    BookEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this._httpService.getBookById(this.id)
            .subscribe(function (res) {
            _this.model = book_edit_model_1.BookEditModel.fromJSON(res);
        });
    };
    BookEditComponent.prototype.getIds = function (val) {
        this.model.writerIds = [];
        for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
            var a = val_1[_i];
            this.model.writerIds.push(a);
        }
    };
    BookEditComponent.prototype.onSubmitForm = function () {
        var _this = this;
        if (this.model.writerIds != null) {
            if (this.model.writerIds.length > 0) {
                this._httpService.putBook(this.id, this.model)
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
    return BookEditComponent;
}());
BookEditComponent = __decorate([
    core_1.Component({
        template: require('./book-edit.component.html'),
        styles: [require('./book-edit.component.css')]
    }),
    __metadata("design:paramtypes", [book_http_service_1.BookHttpService,
        router_1.ActivatedRoute,
        router_1.Router])
], BookEditComponent);
exports.BookEditComponent = BookEditComponent;
//# sourceMappingURL=book-edit.component.js.map