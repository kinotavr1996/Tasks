import { Validator } from './../../../../../../shared/validator/validator';
import { ValidationPropertyModel } from './../../../../../../shared/models/validator-property.model';
import { CustomerAddPopupModel } from './customer-add-popup.model';

export class AddCustomerPopupValidatior extends Validator {
    email: ValidationPropertyModel;
    firstName: ValidationPropertyModel;
    lastName: ValidationPropertyModel;

    constructor(public model: CustomerAddPopupModel) {
        super();
        this.email = new ValidationPropertyModel();
        this.firstName = new ValidationPropertyModel();
        this.lastName = new ValidationPropertyModel();
    }

    isEmailValid(control, modelProperty?): ValidationPropertyModel {
        this._setValid(this.email);
        const value = this._getValue(control, modelProperty);
        if (this._validate(this.email, control, modelProperty)) {
            if (!this._isNotEmptyOrWhitespace(value)) {
                this.email.isValid = false;
                this.email.message = 'add_admin_popup__required_email';
            } else if (!this._isEmailValid(value)) {
                this.email.isValid = false;
                this.email.message = 'add_admin_popup__invalid_email';
            }
        }
        return this.email;
    }

    isFirstnameValid(control, modelProperty?): ValidationPropertyModel {
        this._setValid(this.firstName);
        const value = this._getValue(control, modelProperty);
        if (this._validate(this.firstName, control, modelProperty)) {
            if (!this._isNotEmptyOrWhitespace(value)) {
                this.firstName.isValid = false;
                this.firstName.message = 'add_admin_popup__required_firstname';
            }
        }
        return this.firstName;
    }

    isLastnameValid(control, modelProperty?): ValidationPropertyModel {
        this._setValid(this.lastName);
        const value = this._getValue(control, modelProperty);
        if (this._validate(this.lastName, control, modelProperty)) {
            if (!this._isNotEmptyOrWhitespace(value)) {
                this.lastName.isValid = false;
                this.lastName.message = 'add_admin_popup__required_lastname';
            }
        }
        return this.lastName;
    }

    isFormValid(): boolean {
        this.isEmailValid(null, this.model.email);
        this.isFirstnameValid(null, this.model.firstName);
        this.isLastnameValid(null, this.model.lastName);
        return this.email.isValid && this.firstName.isValid && this.lastName.isValid;
    }
}
