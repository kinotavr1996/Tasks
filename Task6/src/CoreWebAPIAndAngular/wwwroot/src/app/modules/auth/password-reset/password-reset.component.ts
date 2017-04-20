import { PasswordResetValidator } from './password-reset-shared/password-reset.validator';
import { PasswordResetModel } from './password-reset-shared/password-reset.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-password-reset',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./password-reset.component.less']
})
export class PasswordResetComponent implements OnInit {
    model: PasswordResetModel;
    validator: PasswordResetValidator;

    constructor() {
        this.model = new PasswordResetModel();
        this.validator = new PasswordResetValidator(this.model);
    }

    ngOnInit() {
    }

    onSubmit() {
        this.validator.submit();
        if (!this.validator.isFormValid()) { return; }
    }
}
