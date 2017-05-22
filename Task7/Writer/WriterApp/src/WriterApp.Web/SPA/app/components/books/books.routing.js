"use strict";
var book_add_component_1 = require('./books-add/book-add.component');
var book_list_component_1 = require('./books-list/book-list.component');
var book_edit_component_1 = require('./book-edit/book-edit.component');
var book_component_1 = require('./book.component');
var router_1 = require('@angular/router');
exports.booksRoutes = [{
        path: 'spa/books',
        component: book_component_1.BooksComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: book_list_component_1.BookListComponent },
            { path: ':id/edit', component: book_edit_component_1.BookEditComponent },
            { path: 'add', component: book_add_component_1.BookAddComponent }
        ]
    }];
exports.appRoutingProviders = [];
exports.booksRouting = router_1.RouterModule.forChild(exports.booksRoutes);
//# sourceMappingURL=books.routing.js.map