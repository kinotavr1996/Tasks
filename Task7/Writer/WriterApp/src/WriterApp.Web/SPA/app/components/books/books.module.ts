import { BookHttpService } from './books-shared/book-http.service';
import { BookAddComponent } from './books-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './books-list/book-list.component';
import { BooksComponent } from './book.component';
import { HttpService } from './../../shared-component/services/http.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { booksRoutes } from './books.routing';
import { PagerService } from "../../shared-component/paginator/paginator.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        BooksComponent,
        BookListComponent,
        BookEditComponent,
        BookAddComponent
    ],
    providers: [
        BookHttpService,
        PagerService
    ]
})
export class BooksModule { }
