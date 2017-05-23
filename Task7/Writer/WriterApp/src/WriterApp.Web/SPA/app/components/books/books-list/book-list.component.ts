import { BookHttpService } from './../books-shared/book-http.service';
import { BookListModel } from './../../../model/book-list.model';
import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from "../../../model/book.model";
import { PagerService } from "../../../shared-component/paginator/paginator.component";

@Component({
    template: require('./book-list.component.html'),
    styles: [require('./book-list.component.css')]
})
export class BookListComponent implements OnInit {
    isAddVisible: boolean = false;
    isEditVisible: boolean = false;
    model: BookListModel;
    editModel: BookModel;
    pager: any = {};
    pagedItems: any[];

    constructor(private _httpService: BookHttpService, private pagerService: PagerService) { }

    ngOnInit() {
        this._httpService.getSortingBooks('caption', 'ASC', 1)
            .subscribe(res => {
                this.model = BookListModel.fromJSON(res);
                this._setPage(1);
            });
    }

    delete(id: number) {
        if (confirm("Are you shure ?")) {
            this._httpService.deleteCustomer(id)
                .subscribe(res => { this.ngOnInit(); });
        }
    }
    sort(columnName: string) {
        if (this.model.direction == 'ASC') {
            this.model.direction = "DESC";
            this.model.column = columnName;
            this._httpService.getSortingBooks(this.model.column, this.model.direction, this.model.page)
                .subscribe(res => {
                    this.model = BookListModel.fromJSON(res);
                });
        }
        else {
            this.model.direction = "ASC";
            this._httpService.getSortingBooks(this.model.column, this.model.direction, this.model.page)
                .subscribe(res => {
                    this.model = BookListModel.fromJSON(res);
                });
        }
    }

    private _setPage(page: number) {
        if (page < 1 || page > this.model.totalPage) {
            return;
        }
        this.model.page = page;
        this.pager = this.pagerService.getPager(this.model.page, this.model.pageSize, this.model.totalPage);
        this._httpService.getSortingBooks(this.model.column, this.model.direction, this.model.page)
            .subscribe(res => {
                this.model = BookListModel.fromJSON(res);
            });
    }
}
