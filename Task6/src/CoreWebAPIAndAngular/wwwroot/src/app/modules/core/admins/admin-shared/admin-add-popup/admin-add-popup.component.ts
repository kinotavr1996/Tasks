import { AddAdminPopupValidatior } from './admin-add-popup-shared/admin-add-popup.validator';
import { AdminAddPopupModel } from './admin-add-popup-shared/admin-add-popup.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from "app/shared/services/http.service";
import { AdminsHttpService } from "app/modules/core/admins/admin-shared/admins-http.service";

@Component({
    selector: 'app-admin-add-popup',
    templateUrl: './admin-add-popup.component.html',
    styleUrls: ['./admin-add-popup.component.less'],
    providers: []
})
export class AdminAddPopupComponent implements OnInit {
    @Input() visability: boolean;
    @Output() visabilityChange = new EventEmitter();
    @Output() submit = new EventEmitter();
    public model: AdminAddPopupModel;
    public validator: AddAdminPopupValidatior;

    constructor() {
        this.model = new AdminAddPopupModel();
        this.validator = new AddAdminPopupValidatior(this.model);
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
