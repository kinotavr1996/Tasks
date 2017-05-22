import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { BookModel } from "../../../model/book.model";
import { BookHttpService } from "../books-shared/book-http.service";
import { PagerService } from "../../../shared-component/paginator/paginator.component";
import { BookAddModel } from "../../../model/book-add.model";

@Component({
    template: require('./book-add.component.html'),
    styles: [require('./book-add.component.css')]
})
export class BookAddComponent implements OnInit {
    model: BookAddModel;
    constructor(private _httpService: BookHttpService, private router: Router
    ) { }
    ngOnInit() {
        this.model = new BookAddModel(null, null, null);
        this._httpService.getBooks()
            .subscribe(res => {
                console.log(res);
                this.model = BookAddModel.fromJSON(res);
            });
    }
    onSubmitForm() {
        this._httpService.postCustomer(this.model)
            .subscribe(res => {
                this.router.navigateByUrl("/spa/books/list");
            });
    }
}