import { LoginModel } from './login.model';
import { ValidationPropertyModel } from './../../../../shared/models/validator-property.model';
import { Validator } from './../../../../shared/validator/validator';

export class LoginValidator extends Validator {
    email: ValidationPropertyModel;
    password: ValidationPropertyModel;

    constructor(public model: LoginModel) {
        super();
        this.email = new ValidationPropertyModel();
        this.password = new ValidationPropertyModel();
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

    isFormValid(): boolean {
        this.isEmailValid(null, this.model.email);
        this.isPasswordValid(null, this.model.password);
        return this.email.isValid && this.password.isValid;
    }
}
