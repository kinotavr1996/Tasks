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
var customer_http_service_1 = require("app/modules/core/customer/customer-shared/customer-http.service");
var user_model_1 = require("app/shared/models/user.model");
var paginator_component_1 = require('app/shared/components/controls/paginator/paginator.component');
var CustomerListComponent = (function () {
    function CustomerListComponent(_httpService, pagerService) {
        this._httpService = _httpService;
        this.pagerService = pagerService;
        this.isAddVisible = false;
        this.customers = [];
        this.sortOrder = 'ASC';
        this.totalResults = 20;
        this.elementsPerPage = 5;
        this.pager = {};
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.currentPageOffset = 1;
        this.sortColumn = 'firstName';
        this._setPage(1);
    };
    CustomerListComponent.prototype.getCustomers = function () {
        var _this = this;
        this._httpService.getCustomers()
            .subscribe(function (customers) {
            _this.customers = user_model_1.UserModel.fromJSONArray(customers);
            _this.totalResults = _this.customers.length;
            _this.customers = _this.customers.slice(_this.pager.startIndex, _this.pager.endIndex + 1);
        });
    };
    CustomerListComponent.prototype.onAddcustomer = function () {
        this.isAddVisible = true;
    };
    CustomerListComponent.prototype.handlerSubmit = function (user) {
        this._httpService.postCustomer(user)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    CustomerListComponent.prototype.Sort = function (columnName) {
        var _this = this;
        if (this.sortOrder == 'ASC') {
            this.sortOrder = "DESC";
            this._httpService.getSortingCustomers(columnName, this.sortOrder)
                .subscribe(function (customers) {
                _this.customers = user_model_1.UserModel.fromJSONArray(customers);
                _this.customers = _this.customers.slice(_this.pager.startIndex, _this.pager.endIndex + 1);
            });
            console.log(this.customers);
        }
        else {
            this.sortOrder = "ASC";
            this._httpService.getSortingCustomers(columnName, this.sortOrder)
                .subscribe(function (customers) {
                _this.customers = user_model_1.UserModel.fromJSONArray(customers);
                _this.customers = _this.customers.slice(_this.pager.startIndex, _this.pager.endIndex + 1);
            });
            console.log(this.customers);
        }
    };
    CustomerListComponent.prototype._setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.currentPageOffset = page;
        this.pager = this.pagerService.getPager(this.totalResults, page, this.elementsPerPage);
        this.getCustomers();
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            templateUrl: './customer-list.component.html',
            styleUrls: ['./customer-list.component.less'],
            providers: [customer_http_service_1.CustomerHttpService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof customer_http_service_1.CustomerHttpService !== 'undefined' && customer_http_service_1.CustomerHttpService) === 'function' && _a) || Object, (typeof (_b = typeof paginator_component_1.PagerService !== 'undefined' && paginator_component_1.PagerService) === 'function' && _b) || Object])
    ], CustomerListComponent);
    return CustomerListComponent;
    var _a, _b;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customer-list.component.js.map