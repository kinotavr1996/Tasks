import { Component, OnInit } from "@angular/core";
import { CustomerHttpService } from "app/modules/core/customer/customer-shared/customer-http.service";
import { UserModel } from "app/shared/models/user.model";

@Component({
    templateUrl: './customer-edit.component.html',
    // styleUrls: ['./customer-list.component.less'],
})
export class CustomerEditComponent implements OnInit {
    customers: UserModel;
    constructor(
        private _httpService: CustomerHttpService
    ) { }

    ngOnInit() {
    }
}
