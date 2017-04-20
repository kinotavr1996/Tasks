import { Validator } from './../../../../shared/validator/validator';
import { ValidationPropertyModel } from './../../../../shared/models/validator-property.model';

export class PasswordRecoveryValidator extends Validator {
    email: ValidationPropertyModel;

    constructor(public recoveryEmail: string) {
        super();
        this.email = new ValidationPropertyModel();
    }

    isEmailValid(control, modelProperty?): ValidationPropertyModel {
        this._setValid(this.email);
        const value = this._getValue(control, modelProperty);
        if (this._validate(this.email, control, modelProperty)) {
            if (!this._isNotEmptyOrWhitespace(value)) {
                this.email.isValid = false;
                this.email.message = 'login__form_required_email';
            } else if (!this._isEmailValid(value)) {
                this.email.isValid = false;
                this.email.message = 'login__form_invalid_email';
            }
        }
        return this.email;
    }

    isFormValid(): boolean {
        this.isEmailValid(null, this.recoveryEmail);
        return this.email.isValid;
    }
}
