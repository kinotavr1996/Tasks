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
var core_1 = require('@angular/core');
var popups_service_1 = require('../popups-shared/popups.service');
var success_popup_model_1 = require('./success-popup-shared/success-popup.model');
var SuccessPopupComponent = (function () {
    function SuccessPopupComponent(_service) {
        this._service = _service;
        this.fading = false;
    }
    SuccessPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.fading = true;
            setTimeout(function () { return _this.closePopup(); }, 500);
        }, 1500);
    };
    SuccessPopupComponent.prototype.closePopup = function () {
        this._service.close(this.model);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', success_popup_model_1.SuccessPopupModel)
    ], SuccessPopupComponent.prototype, "model", void 0);
    SuccessPopupComponent = __decorate([
        core_1.Component({
            selector: 'success-popup',
            templateUrl: './success-popup.component.html',
            styleUrls: ['./success-popup.component.less']
        }), 
        __metadata('design:paramtypes', [popups_service_1.PopupsService])
    ], SuccessPopupComponent);
    return SuccessPopupComponent;
}());
exports.SuccessPopupComponent = SuccessPopupComponent;
//# sourceMappingURL=success-popup.component.js.map