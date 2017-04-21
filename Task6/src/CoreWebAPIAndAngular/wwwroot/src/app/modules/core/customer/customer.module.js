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
var forms_1 = require('@angular/forms');
var customer_list_component_1 = require('./customer-list/customer-list.component');
var customer_component_1 = require('./customer.component');
var common_1 = require('@angular/common');
var controls_module_1 = require('./../../../shared/components/controls/controls.module');
var layout_module_1 = require('./../../../shared/components/layout/layout.module');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var customer_add_popup_component_1 = require('./customer-shared/customer-add-popup/customer-add-popup.component');
var customer_http_service_1 = require("app/modules/core/customer/customer-shared/customer-http.service");
var paginator_component_1 = require("app/shared/components/controls/paginator/paginator.component");
var localization_module_1 = require('./../../../shared/localization/localization.module');
var CustomerModule = (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                layout_module_1.LayoutModule,
                controls_module_1.ControlsModule,
                localization_module_1.LocalizationModule,
                forms_1.FormsModule
            ],
            declarations: [
                customer_component_1.CustomerComponent,
                customer_list_component_1.CustomerListComponent,
                customer_add_popup_component_1.CustomerAddPopupComponent
            ],
            providers: [
                customer_http_service_1.CustomerHttpService,
                paginator_component_1.PagerService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerModule);
    return CustomerModule;
}());
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.module.js.map