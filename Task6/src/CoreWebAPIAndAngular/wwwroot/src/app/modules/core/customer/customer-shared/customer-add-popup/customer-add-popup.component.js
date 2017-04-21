"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var customer_add_popup_validator_1 = require('./customer-add-popup-shared/customer-add-popup.validator');
var customer_add_popup_model_1 = require('./customer-add-popup-shared/customer-add-popup.model');
var core_1 = require('@angular/core');
var CustomerAddPopupComponent = (function () {
    function CustomerAddPopupComponent() {
        this.visabilityChange = new core_1.EventEmitter();
        this.submit = new core_1.EventEmitter();
        this.model = new customer_add_popup_model_1.CustomerAddPopupModel();
        this.validator = new customer_add_popup_validator_1.AddCustomerPopupValidatior(this.model);
    }
    CustomerAddPopupComponent.prototype.ngOnInit = function () {
    };
    CustomerAddPopupComponent.prototype.onClose = function () {
        this._close();
    };
    CustomerAddPopupComponent.prototype.onSubmit = function () {
        this.validator.submit();
        if (!this.validator.isFormValid()) {
            return;
        }
        this.submit.emit(this.model);
        this._close();
    };
    CustomerAddPopupComponent.prototype._close = function () {
        this.visability = false;
        this.visabilityChange.emit(this.visability);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CustomerAddPopupComponent.prototype, "visability", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CustomerAddPopupComponent.prototype, "visabilityChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CustomerAddPopupComponent.prototype, "submit", void 0);
    CustomerAddPopupComponent = __decorate([
        core_1.Component({
            selector: 'app-customer-add-popup',
            templateUrl: './customer-add-popup.component.html',
            styleUrls: ['./customer-add-popup.component.less'],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerAddPopupComponent);
    return CustomerAddPopupComponent;
}());
exports.CustomerAddPopupComponent = CustomerAddPopupComponent;
//# sourceMappingURL=customer-add-popup.component.js.map