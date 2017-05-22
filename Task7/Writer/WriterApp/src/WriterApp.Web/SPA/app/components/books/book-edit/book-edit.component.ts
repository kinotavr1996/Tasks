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
                console.log(res);
                this.model = BookEditModel.fromJSON(res);
            });
    }

    onSubmitForm() {
        this._httpService.putCustomer(this.id, this.model)
            .subscribe(res => {
                this.model = BookEditModel.fromJSON(res);
                this.router.navigateByUrl("/spa/books/list");
            });
    }
}