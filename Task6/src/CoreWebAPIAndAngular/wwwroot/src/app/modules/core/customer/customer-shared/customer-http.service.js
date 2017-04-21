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
var core_1 = require("@angular/core");
var http_service_1 = require("app/shared/services/http.service");
var config_1 = require("app/config/config");
var CustomerHttpService = (function () {
    function CustomerHttpService(_httpService) {
        this._httpService = _httpService;
    }
    CustomerHttpService.prototype.getCustomers = function () {
        return this._httpService.get(config_1.AppConfig.urls.customers)
            .map(function (res) { return res.json(); });
    };
    CustomerHttpService.prototype.getSortingCustomers = function (sortBy, orderBy) {
        return this._httpService.get(config_1.AppConfig.urls.customers
            + "?sortBy=" + sortBy + "&orderBy=" + orderBy)
            .map(function (res) { return res.json(); });
    };
    CustomerHttpService.prototype.postCustomer = function (data) {
        return this._httpService.post(config_1.AppConfig.urls.customers, data)
            .map(function (res) { return res.json(); });
    };
    CustomerHttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_service_1.HttpService !== 'undefined' && http_service_1.HttpService) === 'function' && _a) || Object])
    ], CustomerHttpService);
    return CustomerHttpService;
    var _a;
}());
exports.CustomerHttpService = CustomerHttpService;
//# sourceMappingURL=customer-http.service.js.map