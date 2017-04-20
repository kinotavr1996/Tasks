import { PasswordRecoveryValidator } from './password-recovery-shared/password-recovery.validator';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-password-recovery',
    templateUrl: './password-recovery.component.html',
    styleUrls: ['./password-recovery.component.less']
})
export class PasswordRecoveryComponent implements OnInit {
    recoveryEmail: string = '';
    validator: PasswordRecoveryValidator;

    constructor() {
        this.validator = new PasswordRecoveryValidator(this.recoveryEmail);
    }

    ngOnInit() {
    }

    onSubmit() {
        this.validator.submit();
        if (!this.validator.isFormValid()) { return; }
    }
}
