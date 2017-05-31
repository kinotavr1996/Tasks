import { BookAddComponent } from "./books-add/book-add.component";
import { BookListComponent } from "./books-list/book-list.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BooksComponent } from "./book.component";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


export const booksRoutes: Routes = [{
    path: "spa/books",
    component: BooksComponent,
    children: [
        { path: "", redirectTo: "list", pathMatch: "full" },
        { path: "list", component: BookListComponent },
        { path: ":id/edit", component: BookEditComponent },
        { path: "add", component: BookAddComponent }

    ]
}];

export const appRoutingProviders: any[] = [];
export const booksRouting: ModuleWithProviders = RouterModule.forChild(booksRoutes);
