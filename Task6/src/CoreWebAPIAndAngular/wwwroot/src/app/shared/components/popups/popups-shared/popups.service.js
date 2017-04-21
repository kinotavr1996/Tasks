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
require('rxjs/add/operator/share');
require('rxjs/add/operator/startWith');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var success_popup_model_1 = require('../success-popup/success-popup-shared/success-popup.model');
var error_popup_model_1 = require('../error-popup/error-popup-shared/error-popup.model');
var PopupsService = (function () {
    function PopupsService() {
        this.success = new BehaviorSubject_1.BehaviorSubject(null);
        this.error = new BehaviorSubject_1.BehaviorSubject(null);
    }
    PopupsService.prototype.open = function (model) {
        if (model instanceof success_popup_model_1.SuccessPopupModel) {
            this.success.next(model);
        }
        else if (model instanceof error_popup_model_1.ErrorPopupModel) {
            this.error.next(model);
        }
    };
    PopupsService.prototype.close = function (model) {
        if (model instanceof success_popup_model_1.SuccessPopupModel) {
            this.success.next(null);
        }
        else if (model instanceof error_popup_model_1.ErrorPopupModel) {
            this.error.next(null);
        }
    };
    PopupsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PopupsService);
    return PopupsService;
}());
exports.PopupsService = PopupsService;
//# sourceMappingURL=popups.service.js.map