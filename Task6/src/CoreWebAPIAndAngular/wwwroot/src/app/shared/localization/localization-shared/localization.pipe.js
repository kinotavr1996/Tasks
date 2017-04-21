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
var localization_service_1 = require('./localization.service');
var LocalizationPipe = (function () {
    function LocalizationPipe(_localize) {
        this._localize = _localize;
    }
    LocalizationPipe.prototype.transform = function (value, args) {
        if (!value) {
            return;
        }
        return this._localize.instant(value, args);
    };
    LocalizationPipe = __decorate([
        core_1.Pipe({
            name: 'localize',
            pure: false // impure pipe, update value when we change language
        }), 
        __metadata('design:paramtypes', [localization_service_1.LocalizationService])
    ], LocalizationPipe);
    return LocalizationPipe;
}());
exports.LocalizationPipe = LocalizationPipe;
//# sourceMappingURL=localization.pipe.js.map