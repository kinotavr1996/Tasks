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
var config_1 = require('./../../config/config');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.prepareHeaders = function (headersRaw) {
        var token = null;
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        if (headersRaw == null) {
            headers.append('Content-Type', 'application/json');
        }
        else {
            headersRaw.forEach(function (item) {
                headers.append(item.type, item.value);
            });
        }
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        if (loginData) {
            token = loginData.accessToken;
            headers.append('Authorization', 'bearer ' + token);
        }
        return headers;
    };
    /* =============== METHODS ===============
    dataRaw     - regular JS object
    headersRaw  - object literal containing headers
    */
    HttpService.prototype.get = function (url, headersRaw) {
        if (headersRaw === void 0) { headersRaw = null; }
        var headers = this.prepareHeaders(headersRaw);
        return this.http
            .get(config_1.AppConfig.apiUrl + url, { headers: headers })
            .map(function (response) { return response; })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    HttpService.prototype.post = function (url, dataRaw, headersRaw) {
        if (headersRaw === void 0) { headersRaw = null; }
        var headers = this.prepareHeaders(headersRaw);
        var data = JSON.stringify(dataRaw);
        return this.http
            .post(config_1.AppConfig.apiUrl + url, data, { headers: headers })
            .map(function (response) { return response; })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    HttpService.prototype.put = function (url, dataRaw, headersRaw) {
        if (headersRaw === void 0) { headersRaw = null; }
        var headers = this.prepareHeaders(headersRaw);
        var data = JSON.stringify(dataRaw);
        return this.http
            .put(config_1.AppConfig.apiUrl + url, data, { headers: headers })
            .map(function (response) { return response; })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    HttpService.prototype.delete = function (url) {
        var headers = this.prepareHeaders(null);
        return this.http
            .delete(config_1.AppConfig.apiUrl + url, { headers: headers })
            .map(function (response) { return response; })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map