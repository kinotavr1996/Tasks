import { Component, Input, OnInit } from '@angular/core';
import { WriterModel } from "../../../shared/models/writer.model";
import { WriterHttpService } from "../writers-shared/writer-http.service";
import { PagerService } from "../../../shared/Components/paginator/paginator.component";

@Component({
    template: require('./writer-list.component.html'),
    styles: [require('./writer-list.component.css')]
})
export class WriterListComponent implements OnInit {
    isAddVisible: boolean = false;
    isEditVisible: boolean = false;
    customers: WriterModel[] = [];
    editModel: WriterModel;
    currentPageOffset: number;
    sortColumn: string;
    sortOrder: string = 'ASC';
    totalResults: number = 20;
    elementsPerPage: number = 5;
    pager: any = {};
    pagedItems: any[];

    constructor(private _httpService: WriterHttpService, private pagerService: PagerService) { }

    ngOnInit() {
        this.currentPageOffset = 1;
        this.sortColumn = 'fullName';
        this._setPage(1);
    }

    onAddcustomer() {
        this.isAddVisible = true;
    }
    Edit(id: number) {
        this.isEditVisible = true;
        this.isAddVisible = true;
        this.editModel = this.customers[id];
    }
    Sort(columnName: string) {
        if (this.sortOrder == 'ASC') {
            this.sortOrder = "DESC";
            this.sortColumn = columnName;
            this._httpService.getSortingCustomers(columnName, this.sortOrder, this.currentPageOffset)
                .subscribe(customers => {
                    this.customers = WriterModel.fromJSONArray(customers);
                });
            console.log(this.customers);
        }
        else {
            this.sortOrder = "ASC";
            this._httpService.getSortingCustomers(columnName, this.sortOrder, this.currentPageOffset)
                .subscribe(customers => {
                    this.customers = WriterModel.fromJSONArray(customers);
                });
            console.log(this.customers);
        }

    }

    private _setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.currentPageOffset = page;
        this.pager = this.pagerService.getPager(this.totalResults, page, this.elementsPerPage);
        this._httpService.getSortingCustomers(this.sortColumn, this.sortOrder, page)
            .subscribe(customers => {
                console.log(customers);
                this.customers = WriterModel.fromJSONArray(customers);
            });
    }
}
