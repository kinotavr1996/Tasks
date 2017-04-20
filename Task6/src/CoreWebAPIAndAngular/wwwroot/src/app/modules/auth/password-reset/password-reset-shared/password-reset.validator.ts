import { ValidationPropertyModel } from './../../../../shared/models/validator-property.model';
import { Validator } from './../../../../shared/validator/validator';
import { PasswordResetModel } from './password-reset.model';

export class PasswordResetValidator extends Validator {
    password: ValidationPropertyModel;
    confirmPassword: ValidationPropertyModel;

    constructor(public model: PasswordResetModel) {
        super();
        this.password = new ValidationPropertyModel();
        this.confirmPassword = new ValidationPropertyModel();
    }

    isPasswordValid(control, modelProperty?): ValidationPropertyModel {
        this._setValid(this.password);
        const value = this._getValue(control, modelProperty);
        if (this._validate(this.password, control, modelProperty)) {
            if (!this._isNotEmptyOrWhitespace(value)) {
                this.password.isValid = false;
                this.password.message = 'login__form_required_password';
            } else if (!this._isMinLengthValid(value)) {
                this.password.isValid = false;
                this.password.message = 'login__form_min6_password';
            }
        }
        return this.password;
    }

    isConfirmPasswordValid(control, modelProperty?): ValidationPropertyModel {
        this._setValid(this.confirmPassword);
        const value = this._getValue(control, modelProperty);
        if (this._validate(this.confirmPassword, control, modelProperty)) {
            if (!this._isNotEmptyOrWhitespace(value)) {
                this.confirmPassword.isValid = false;
                this.confirmPassword.message = 'login__form_required_password';
            } else if (!this._isMinLengthValid(value)) {
                this.confirmPassword.isValid = false;
                this.confirmPassword.message = 'login__form_min6_password';
            } else if (this.model.password !== this.model.confirmPassword) {
                this.confirmPassword.isValid = false;
                this.confirmPassword.message = 'login__form_passwords_match';
            }
        }
        return this.confirmPassword;
    }

    isFormValid(): boolean {
        this.isPasswordValid(null, this.model.password);
        this.isPasswordValid(null, this.model.confirmPassword);
        return this.password.isValid && this.confirmPassword.isValid;
    }
}
