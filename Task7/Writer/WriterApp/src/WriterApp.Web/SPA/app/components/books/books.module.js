"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var autocomplete_component_1 = require("./../../shared-component/autocomplete/autocomplete.component");
var book_http_service_1 = require("./books-shared/book-http.service");
var book_add_component_1 = require("./books-add/book-add.component");
var book_edit_component_1 = require("./book-edit/book-edit.component");
var book_list_component_1 = require("./books-list/book-list.component");
var book_component_1 = require("./book.component");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var paginator_component_1 = require("../../shared-component/paginator/paginator.component");
var BooksModule = (function () {
    function BooksModule() {
    }
    return BooksModule;
}());
BooksModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule
        ],
        declarations: [
            book_component_1.BooksComponent,
            book_list_component_1.BookListComponent,
            book_edit_component_1.BookEditComponent,
            book_add_component_1.BookAddComponent,
            autocomplete_component_1.AutocompleteComponent
        ],
        providers: [
            book_http_service_1.BookHttpService,
            paginator_component_1.PagerService
        ]
    })
], BooksModule);
exports.BooksModule = BooksModule;
//# sourceMappingURL=books.module.js.map