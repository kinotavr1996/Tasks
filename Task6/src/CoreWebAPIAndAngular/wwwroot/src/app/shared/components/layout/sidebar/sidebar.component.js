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
var sidebar_item_model_1 = require('./sidebar-shared/sidebar-item.model');
var router_1 = require('@angular/router');
var sidebar_opeartion_service_1 = require('./sidebar-shared/sidebar-opeartion.service');
var core_1 = require('@angular/core');
var SidebarComponent = (function () {
    function SidebarComponent(_operationService, _route) {
        this._operationService = _operationService;
        this._route = _route;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.sub = this._route.params.subscribe(function (params) {
            console.log(params);
        });
        this.sidebarItems = sidebar_item_model_1.SidebarItemModel.fromJSONArray(this._operationService.getSidebarItem());
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.less'],
            providers: [sidebar_opeartion_service_1.SidebarOpeartionService]
        }), 
        __metadata('design:paramtypes', [sidebar_opeartion_service_1.SidebarOpeartionService, router_1.ActivatedRoute])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map