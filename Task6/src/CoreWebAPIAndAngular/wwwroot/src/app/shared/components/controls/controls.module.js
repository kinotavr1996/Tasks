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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var input_component_1 = require('./input/input.component');
var select_component_1 = require('./select/select.component');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var search_component_1 = require('./search/search.component');
var button_component_1 = require('./button/button.component');
var localization_module_1 = require('../../localization/localization.module');
var ControlsModule = (function () {
    function ControlsModule() {
    }
    ControlsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                localization_module_1.LocalizationModule
            ],
            declarations: [
                input_component_1.CustomInputComponent,
                select_component_1.CustomSelectComponent,
                search_component_1.SearchComponent,
                button_component_1.ButtonComponent
            ],
            exports: [
                input_component_1.CustomInputComponent,
                select_component_1.CustomSelectComponent,
                search_component_1.SearchComponent,
                button_component_1.ButtonComponent
            ],
            providers: [],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], ControlsModule);
    return ControlsModule;
}());
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=controls.module.js.map