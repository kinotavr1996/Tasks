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
var lang_en_1 = require('./../languages/en/lang-en');
var lang_ua_1 = require('./../languages/ua/lang-ua');
var core_1 = require('@angular/core');
var LocalizationService = (function () {
    // inject our translations
    function LocalizationService() {
        this.PLACEHOLDER = '%';
        this._defaultLang = 'ua';
        this.onLangChanged = new core_1.EventEmitter();
        this._translations = (_a = {},
            _a[lang_ua_1.LANG_UA_NAME] = lang_ua_1.LANG_UA_TRANS,
            _a[lang_en_1.LANG_EN_NAME] = lang_en_1.LANG_EN_TRANS,
            _a
        );
        var _a;
    }
    Object.defineProperty(LocalizationService.prototype, "currentLang", {
        get: function () {
            return this._currentLang || this._defaultLang;
        },
        enumerable: true,
        configurable: true
    });
    LocalizationService.prototype.setDefaultLang = function (lang) {
        this._defaultLang = lang;
    };
    LocalizationService.prototype.enableFallback = function (enable) {
        this._fallback = enable;
    };
    LocalizationService.prototype.use = function (lang) {
        // set current language
        this._currentLang = lang;
        this.onLangChanged.emit(lang);
    };
    LocalizationService.prototype.translate = function (key) {
        var translation = key;
        // found in current language
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        // fallback disabled
        if (!this._fallback) {
            return translation;
        }
        // found in default language
        if (this._translations[this._defaultLang] && this._translations[this._defaultLang][key]) {
            return this._translations[this._defaultLang][key];
        }
        // not found
        return translation;
    };
    LocalizationService.prototype.replace = function (word, words) {
        var _this = this;
        if (word === void 0) { word = ''; }
        if (words === void 0) { words = ''; }
        var translation = word;
        var values = [].concat(words);
        values.forEach(function (e, i) {
            translation = translation.replace(_this.PLACEHOLDER.concat(i), e);
        });
        return translation;
    };
    LocalizationService.prototype.instant = function (key, words) {
        // public perform translation
        var translation = this.translate(key);
        if (!words) {
            return translation;
        }
        return this.replace(translation, words);
    };
    LocalizationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalizationService);
    return LocalizationService;
}());
exports.LocalizationService = LocalizationService;
//# sourceMappingURL=localization.service.js.map