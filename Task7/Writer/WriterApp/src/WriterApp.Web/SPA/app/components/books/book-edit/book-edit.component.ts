import { BookEditModel } from './../../../model/book-edit.model';
import { BookHttpService } from "../books-shared/book-http.service";
import { PagerService } from "../../../shared-component/paginator/paginator.component";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    template: require('./book-edit.component.html'),
    styles: [require('./book-edit.component.css')]
})
export class BookEditComponent {
    model: BookEditModel;
    id: number;
    private sub: any;
    constructor(private _httpService: BookHttpService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this._httpService.getBookById(this.id)
            .subscribe(res => {
                this.model = BookEditModel.fromJSON(res);
            });
    }
    getIds(val: number[]) {
        this.model.writerIds = [];
        for (let a of val)
            this.model.writerIds.push(a);
    }
    onSubmitForm() {
        if (this.model.writerIds != null) {
            if (this.model.writerIds.length > 0) {
                this._httpService.putBook(this.id, this.model)
                    .subscribe(res => {
                        this.router.navigateByUrl("/spa/books/list");
                    });
            } else {
                alert('Choose writer`s');
            }
        } else {
            alert('Choose writer`s');
        }
        
    }
}