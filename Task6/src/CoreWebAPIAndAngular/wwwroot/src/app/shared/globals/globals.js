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
var storage_service_1 = require('./../services/storage.service');
var core_1 = require('@angular/core');
require('rxjs/add/operator/share');
require('rxjs/add/operator/startWith');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var user_model_1 = require('./../models/user.model');
var Globals = (function () {
    function Globals(_storage) {
        this._storage = _storage;
        this.user = new BehaviorSubject_1.BehaviorSubject(null);
        this.user.next(this.getUserData());
        this.uiLanguage = new BehaviorSubject_1.BehaviorSubject(null);
        this.uiLanguage.next(this.getUILanguage());
    }
    Globals.prototype.getUserData = function () {
        var userData = this._storage.getItem('user');
        if (userData) {
            var user = JSON.parse(userData);
            return user_model_1.UserModel.fromJSON(user);
        }
        return null;
    };
    Globals.prototype.getUILanguage = function () {
        var languageData = this._storage.getItem('lang');
        return languageData || config_1.AppConfig.defaultLanguage;
    };
    Globals = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [storage_service_1.StorageService])
    ], Globals);
    return Globals;
}());
exports.Globals = Globals;
//# sourceMappingURL=globals.js.map