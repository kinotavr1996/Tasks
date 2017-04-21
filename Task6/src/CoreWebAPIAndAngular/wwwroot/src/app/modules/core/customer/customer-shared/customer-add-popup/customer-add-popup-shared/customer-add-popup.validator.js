"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var validator_1 = require('./../../../../../../shared/validator/validator');
var validator_property_model_1 = require('./../../../../../../shared/models/validator-property.model');
var AddCustomerPopupValidatior = (function (_super) {
    __extends(AddCustomerPopupValidatior, _super);
    function AddCustomerPopupValidatior(model) {
        _super.call(this);
        this.model = model;
        this.email = new validator_property_model_1.ValidationPropertyModel();
        this.firstName = new validator_property_model_1.ValidationPropertyModel();
        this.lastName = new validator_property_model_1.ValidationPropertyModel();
    }
    AddCustomerPopupValidatior.prototype.isEmailValid = function (control, modelProperty) {
        this._setValid(this.email);
        var value = this._getValue(control, modelProperty);
        if (this._validate(this.email, control, modelProperty)) {
            if (!this._isNotEmptyOrWhitespace(value)) {
                this.email.isValid = false;
                this.email.message = 'add_admin_popup__required_email';
            }
            else if (!this._isEmailValid(value)) {
                this.email.isValid = false;
                this.email.message = 'add_admin_popup__invalid_email';
            }
        }
        return this.email;
    };
    AddCustomerPopupValidatior.prototype.isFirstnameValid = function (control, modelProperty) {
        this._setValid(this.firstName);
        var value = this._getValue(control, modelProperty);
        if (this._validate(this.firstName, control, modelProperty)) {
            if (!this._isNotEmptyOrWhitespace(value)) {
                this.firstName.isValid = false;
                this.firstName.message = 'add_admin_popup__required_firstname';
            }
        }
        return this.firstName;
    };
    AddCustomerPopupValidatior.prototype.isLastnameValid = function (control, modelProperty) {
        this._setValid(this.lastName);
        var value = this._getValue(control, modelProperty);
        if (this._validate(this.lastName, control, modelProperty)) {
            if (!this._isNotEmptyOrWhitespace(value)) {
                this.lastName.isValid = false;
                this.lastName.message = 'add_admin_popup__required_lastname';
            }
        }
        return this.lastName;
    };
    AddCustomerPopupValidatior.prototype.isFormValid = function () {
        this.isEmailValid(null, this.model.email);
        this.isFirstnameValid(null, this.model.firstName);
        this.isLastnameValid(null, this.model.lastName);
        return this.email.isValid && this.firstName.isValid && this.lastName.isValid;
    };
    return AddCustomerPopupValidatior;
}(validator_1.Validator));
exports.AddCustomerPopupValidatior = AddCustomerPopupValidatior;
//# sourceMappingURL=customer-add-popup.validator.js.map