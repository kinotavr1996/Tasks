import { ActivatedRoute, Router } from "@angular/router";
import { Component, Input, OnInit, Inject } from "@angular/core";
import { BookModel } from "../../../model/book.model";
import { BookHttpService } from "../books-shared/book-http.service";
import { PagerService } from "../../../shared-component/paginator/paginator.component";
import { BookAddModel } from "../../../model/book-add.model";

@Component({
    template: require("./book-add.component.html"),
    styles: [require("./book-add.component.css")]
})
export class BookAddComponent implements OnInit {
    public model: BookAddModel;
    constructor(private _httpService: BookHttpService, private router: Router
    ) { }
    ngOnInit() {
        this.model = new BookAddModel(null, null, null, null);
        this._httpService.getBooks()
            .subscribe(res => {
                this.model = BookAddModel.fromJSON(res);
            });
    }
    getIds(val: number[]) {
        this.model.writerIds = [];
        for (let a of val)
            this.model.writerIds.push(a);
    }
    checker() {
        if (this.model.writerIds != null)
            return this.model.writerIds.length > 0;
        else
            return false;
    }
    onSubmitForm() {
        if (this.model.writerIds != null) {
            if (this.model.writerIds.length > 0) {
                this._httpService.postBook(this.model)
                    .subscribe(res => {
                        this.router.navigateByUrl("/spa/books/list");
                    });
            } else {
                alert("Choose writer`s");
            }
        } else {
            alert("Choose writer`s");
        }
    }
}