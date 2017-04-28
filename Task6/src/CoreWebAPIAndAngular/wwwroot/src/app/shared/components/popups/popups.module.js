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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var popups_component_1 = require('./popups.component');
var success_popup_component_1 = require('./success-popup/success-popup.component');
var popups_service_1 = require('./popups-shared/popups.service');
var error_popup_component_1 = require('./error-popup/error-popup.component');
var PopupsModule = (function () {
    function PopupsModule() {
    }
    PopupsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
            ],
            declarations: [
                popups_component_1.PopupsComponent,
                success_popup_component_1.SuccessPopupComponent,
                error_popup_component_1.ErrorPopupComponent
            ],
            exports: [
                popups_component_1.PopupsComponent
            ],
            providers: [
                popups_service_1.PopupsService
            ],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], PopupsModule);
    return PopupsModule;
}());
exports.PopupsModule = PopupsModule;
//# sourceMappingURL=popups.module.js.map