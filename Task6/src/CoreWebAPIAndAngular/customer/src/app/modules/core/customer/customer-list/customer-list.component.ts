import { CustomerAddPopupModel } from './../customer-shared/customer-add-popup/customer-add-popup-shared/customer-add-popup.model';
import { Component, Input, OnInit } from '@angular/core';
import { CustomerHttpService } from "app/modules/core/customer/customer-shared/customer-http.service";
import { UserModel } from "app/shared/models/user.model";
import { PagerService } from 'app/shared/components/controls/paginator/paginator.component'

import { UserAddPopupModel } from "app/modules/core/customer/customer-list/customer-list-shared/customer-user-popup.model";

@Component({
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.less']
})
export class CustomerListComponent implements OnInit {
    isAddVisible: boolean = false;
    isEditVisible: boolean = false;
    customers: UserModel[] = [];
    editModel: UserModel;
    currentPageOffset: number;
    sortColumn: string;
    sortOrder: string = 'ASC';
    totalResults: number = 20;
    elementsPerPage: number = 5;
    pager: any = {};
    pagedItems: any[];

    constructor(private _httpService: CustomerHttpService, private pagerService: PagerService) { }

    ngOnInit() {
        this.currentPageOffset = 1;
        this.sortColumn = 'firstName';
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

    handlerSubmit(user: UserAddPopupModel) {
        this._httpService.postCustomer(user)
            .subscribe(res => {
                console.log(res);
            });
    }
    Sort(columnName: string) {
        if (this.sortOrder == 'ASC') {
            this.sortOrder = "DESC";
            this.sortColumn = columnName;
            this._httpService.getSortingCustomers(columnName, this.sortOrder, this.elementsPerPage, this.currentPageOffset)
                .subscribe(customers => {
                    this.customers = UserModel.fromJSONArray(customers);
                });
            console.log(this.customers);
        }
        else {
            this.sortOrder = "ASC";
            this._httpService.getSortingCustomers(columnName, this.sortOrder, this.elementsPerPage, this.currentPageOffset)
                .subscribe(customers => {
                    this.customers = UserModel.fromJSONArray(customers);
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
        this._httpService.getSortingCustomers(this.sortColumn, this.sortOrder, this.elementsPerPage, page)
            .subscribe(customers => {
                this.customers = UserModel.fromJSONArray(customers);
            });
    }
}
