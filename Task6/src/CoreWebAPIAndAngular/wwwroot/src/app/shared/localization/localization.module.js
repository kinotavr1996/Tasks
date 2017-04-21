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
var localization_pipe_1 = require('./localization-shared/localization.pipe');
var localization_service_1 = require('./localization-shared/localization.service');
var LocalizationModule = (function () {
    function LocalizationModule() {
    }
    LocalizationModule = __decorate([
        core_1.NgModule({
            exports: [
                localization_pipe_1.LocalizationPipe
            ],
            declarations: [
                localization_pipe_1.LocalizationPipe
            ],
            providers: [
                localization_service_1.LocalizationService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LocalizationModule);
    return LocalizationModule;
}());
exports.LocalizationModule = LocalizationModule;
//# sourceMappingURL=localization.module.js.map