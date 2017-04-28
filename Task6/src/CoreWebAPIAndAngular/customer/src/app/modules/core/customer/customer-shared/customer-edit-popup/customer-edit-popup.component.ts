import { AddCustomerPopupValidatior } from '../customer-add-popup/customer-add-popup-shared/customer-add-popup.validator';
import { CustomerAddPopupModel } from '../customer-add-popup/customer-add-popup-shared/customer-add-popup.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from "app/shared/services/http.service";
import { CustomerHttpService } from "app/modules/core/customer/customer-shared/customer-http.service";

@Component({
    selector: 'app-customer-edit-popup',
    templateUrl: './customer-edit-popup.component.html',
    styleUrls: ['./customer-edit-popup.component.less'],
    providers: []
})
export class CustomerAddPopupComponent implements OnInit {
    @Input() visability: boolean;
    @Output() visabilityChange = new EventEmitter();
    @Output() submit = new EventEmitter();
    public model: CustomerAddPopupModel;
    public validator: AddCustomerPopupValidatior;

    constructor() {
        this.model = new CustomerAddPopupModel();
        this.validator = new AddCustomerPopupValidatior(this.model);
    }

    ngOnInit() {
    }

    onClose() {
        this._close();
    }

    onSubmit() {
        this.validator.submit();
        if (!this.validator.isFormValid()) { return; }
        this.submit.emit(this.model);
        this._close();
    }

    private _close() {
        this.visability = false;
        this.visabilityChange.emit(this.visability);
    }
}
