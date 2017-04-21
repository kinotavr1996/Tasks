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
var controls_module_1 = require('./../controls/controls.module');
var forms_1 = require('@angular/forms');
var header_component_1 = require('./header/header.component');
var core_1 = require('@angular/core');
var page_title_component_1 = require('./page-title/page-title.component');
var router_1 = require('@angular/router');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var localization_module_1 = require('./../../localization/localization.module');
var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                controls_module_1.ControlsModule,
                localization_module_1.LocalizationModule
            ],
            declarations: [
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                page_title_component_1.PageTitleComponent
            ],
            exports: [
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                page_title_component_1.PageTitleComponent
            ],
            providers: [],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map