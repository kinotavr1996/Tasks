import { AdminAddPopupModel } from './../admin-shared/admin-add-popup/admin-add-popup-shared/admin-add-popup.model';
import { Component, Input, OnInit } from '@angular/core';
import { AdminsHttpService } from "app/modules/core/admins/admin-shared/admins-http.service";
import { UserModel } from "app/shared/models/user.model";
import { PagerService } from 'app/shared/components/controls/paginator/paginator.component'
import { AdminListOperationService } from "app/modules/core/admins/admin-list/admin-list-shared/admin-list-operation.service";
import { UserAddPopupModel } from "app/modules/core/admins/admin-list/admin-list-shared/admin-user-poput.model";

@Component({
    templateUrl: './admin-list.component.html',
    styleUrls: ['./admin-list.component.less'],
    providers: [AdminListOperationService]
})
export class AdminListComponent implements OnInit {
    isAddVisible: boolean = false;
    customers: UserModel[] = [];
    currentPageOffset: number;
    sortColumn: string;
    sortOrder: string = 'ASC';
    totalResults: number = 20;
    elementsPerPage: number = 5;
    pager: any = {};
    pagedItems: any[];

    constructor(private _httpService: AdminsHttpService, private pagerService: PagerService) { }

    ngOnInit() {
        this.currentPageOffset = 1;

        this.sortColumn = 'firstName';
        this._setPage(1);
    }
    getCustomers() {
        this._httpService.getCustomers()
            .subscribe(customers => {
                this.customers = UserModel.fromJSONArray(customers);
                this.totalResults = this.customers.length;
                this.customers = this.customers.slice(this.pager.startIndex, this.pager.endIndex + 1);
            });
    }
    onAddAdmin() {
        this.isAddVisible = true;
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
            this._httpService.getSortingCustomers(columnName, this.sortOrder)
                .subscribe(customers => {
                    this.customers = UserModel.fromJSONArray(customers);
                    this.customers = this.customers.slice(this.pager.startIndex, this.pager.endIndex + 1);
                });
            console.log(this.customers);
        }
        else {
            this.sortOrder = "ASC";
            this._httpService.getSortingCustomers(columnName, this.sortOrder)
                .subscribe(customers => {
                    this.customers = UserModel.fromJSONArray(customers);
                    this.customers = this.customers.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
        this.getCustomers();
    }
}
