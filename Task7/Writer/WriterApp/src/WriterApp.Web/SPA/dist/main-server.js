(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	exports.default = default_1;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("zone.js");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("@angular/core");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("angular2-universal");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
	var storage_service_1 = __webpack_require__(6);
	var http_service_1 = __webpack_require__(11);
	var writers_module_1 = __webpack_require__(17);
	var writers_routing_1 = __webpack_require__(45);
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(15);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(46);
	var navmenu_component_1 = __webpack_require__(50);
	var home_component_1 = __webpack_require__(54);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            bootstrap: [
	                app_component_1.AppComponent
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                navmenu_component_1.NavMenuComponent,
	                home_component_1.HomeComponent
	            ],
	            providers: [
	                http_service_1.HttpService,
	                storage_service_1.StorageService
	            ],
	            imports: [
	                angular2_universal_1.UniversalModule,
	                writers_module_1.WritersModule,
	                router_1.RouterModule.forRoot([
	                    { path: '', redirectTo: 'spa', pathMatch: 'full' },
	                    { path: 'spa', component: home_component_1.HomeComponent }
	                ].concat(writers_routing_1.writersRoutes, [
	                    { path: '**', redirectTo: 'spa' }
	                ]))
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;
	//# sourceMappingURL=app.module.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
	var config_1 = __webpack_require__(7);
	var core_1 = __webpack_require__(3);
	var StorageService = (function () {
	    function StorageService() {
	        this.keys = {
	            'user': 'user',
	            'accessToken': 'AccessToken',
	            'expiresIn': 'ExpiresIn',
	            'language': 'lang',
	            'loginCredentials': 'loginCredentials'
	        };
	        this.keyPrefix = config_1.AppConfig.projectName;
	    }
	    StorageService.prototype._getKey = function (key) {
	        key = key.trim();
	        if (key.length < 0) {
	            return '';
	        }
	        return this.keyPrefix + "_" + key;
	    };
	    StorageService.prototype.setItem = function (key, value) {
	        localStorage.setItem(this._getKey(key), value);
	    };
	    StorageService.prototype.getItem = function (key) {
	        return localStorage.getItem(this._getKey(key));
	    };
	    StorageService.prototype.removeItem = function (key) {
	        localStorage.removeItem(this._getKey(key));
	    };
	    StorageService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], StorageService);
	    return StorageService;
	}());
	exports.StorageService = StorageService;
	//# sourceMappingURL=storage.service.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var api_base_url_1 = __webpack_require__(8);
	var api_request_urls_1 = __webpack_require__(10);
	var api_servers_enum_1 = __webpack_require__(9);
	var AppConfig = (function () {
	    function AppConfig() {
	    }
	    AppConfig.apiUrl = api_base_url_1.ApiBaseUrl.get(api_servers_enum_1.ApiServers.dev);
	    AppConfig.urls = api_request_urls_1.ApiRequestUrls.urls;
	    AppConfig.projectName = 'WriterApp';
	    return AppConfig;
	}());
	exports.AppConfig = AppConfig;
	//# sourceMappingURL=config.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var api_servers_enum_1 = __webpack_require__(9);
	var ApiBaseUrl = (function () {
	    function ApiBaseUrl() {
	    }
	    ApiBaseUrl.get = function (env) {
	        switch (env) {
	            case api_servers_enum_1.ApiServers.dev: {
	                return 'http://localhost:49611/api/';
	            }
	        }
	    };
	    return ApiBaseUrl;
	}());
	exports.ApiBaseUrl = ApiBaseUrl;
	//# sourceMappingURL=api-base-url.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	(function (ApiServers) {
	    ApiServers[ApiServers["staiging"] = 1] = "staiging";
	    ApiServers[ApiServers["test"] = 2] = "test";
	    ApiServers[ApiServers["dev"] = 3] = "dev";
	})(exports.ApiServers || (exports.ApiServers = {}));
	var ApiServers = exports.ApiServers;
	//# sourceMappingURL=api-servers.enum.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	var ApiRequestUrls = (function () {
	    function ApiRequestUrls() {
	    }
	    ApiRequestUrls.urls = {
	        'writer': 'writer'
	    };
	    return ApiRequestUrls;
	}());
	exports.ApiRequestUrls = ApiRequestUrls;
	//# sourceMappingURL=api-request-urls.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

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
	var Observable_1 = __webpack_require__(12);
	var config_1 = __webpack_require__(7);
	var storage_service_1 = __webpack_require__(6);
	var core_1 = __webpack_require__(3);
	__webpack_require__(13);
	__webpack_require__(14);
	var router_1 = __webpack_require__(15);
	var http_1 = __webpack_require__(16);
	var HttpService = (function () {
	    function HttpService(_http, _storage, _router) {
	        this._http = _http;
	        this._storage = _storage;
	        this._router = _router;
	    }
	    HttpService.prototype.prepareHeaders = function (headersRaw) {
	        var headers = new http_1.Headers();
	        headers.append('Access-Control-Allow-Origin', '*');
	        if (headersRaw == null) {
	            headers.append('Content-Type', 'application/json');
	        }
	        else {
	            headersRaw.forEach(function (item) {
	                headers.append(item.key, item.value);
	            });
	        }
	        var token = this._storage.getItem(this._storage.keys.accessToken);
	        headers.append('Authorization', 'bearer ' + token);
	        return headers;
	    };
	    /* =============== METHODS ===============
	    dataRaw     - regular JS object
	    headersRaw  - object literal containing headers
	    */
	    HttpService.prototype.get = function (url, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, _c = _b.headersRaw, headersRaw = _c === void 0 ? null : _c, _d = _b.showLoader, showLoader = _d === void 0 ? true : _d;
	        var headers = this.prepareHeaders(headersRaw);
	        return this._http
	            .get(config_1.AppConfig.apiUrl + url, { headers: headers })
	            .map(function (response) {
	            return response;
	        })
	            .catch(function (error) {
	            _this.intercept(error);
	            return Observable_1.Observable.throw(error);
	        });
	    };
	    HttpService.prototype.post = function (url, dataRaw, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, _c = _b.headersRaw, headersRaw = _c === void 0 ? null : _c, _d = _b.showLoader, showLoader = _d === void 0 ? true : _d, _e = _b.stringifyData, stringifyData = _e === void 0 ? true : _e;
	        var headers = this.prepareHeaders(headersRaw);
	        var data = null;
	        if (stringifyData) {
	            data = JSON.stringify(dataRaw);
	        }
	        return this._http
	            .post(config_1.AppConfig.apiUrl + url, data || dataRaw, { headers: headers })
	            .map(function (response) {
	            return response;
	        })
	            .catch(function (error) {
	            _this.intercept(error);
	            return Observable_1.Observable.throw(error);
	        });
	    };
	    HttpService.prototype.put = function (url, dataRaw, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, _c = _b.headersRaw, headersRaw = _c === void 0 ? null : _c, _d = _b.showLoader, showLoader = _d === void 0 ? true : _d;
	        var headers = this.prepareHeaders(headersRaw);
	        var data = JSON.stringify(dataRaw);
	        return this._http
	            .put(config_1.AppConfig.apiUrl + url, data, { headers: headers })
	            .map(function (response) {
	            return response;
	        })
	            .catch(function (error) {
	            _this.intercept(error);
	            return Observable_1.Observable.throw(error);
	        });
	    };
	    HttpService.prototype.delete = function (url, _a) {
	        var _this = this;
	        var _b = (_a === void 0 ? {} : _a).showLoader, showLoader = _b === void 0 ? true : _b;
	        var headers = this.prepareHeaders(null);
	        return this._http
	            .delete(config_1.AppConfig.apiUrl + url, { headers: headers })
	            .map(function (response) {
	            return response;
	        })
	            .catch(function (error) {
	            _this.intercept(error);
	            return Observable_1.Observable.throw(error);
	        });
	    };
	    HttpService.prototype.intercept = function (error) {
	        if (error.status === 400) {
	            return;
	        }
	        if (error.status === 401) {
	            this._storage.removeItem(this._storage.keys.user);
	            this._storage.removeItem(this._storage.keys.accessToken);
	            this._storage.removeItem(this._storage.keys.expiresIn);
	            this._router.navigate(['/login']);
	            return;
	        }
	    };
	    HttpService.prototype.formErrorMessage = function (error) {
	        var errorMessage = 'Oops, something wrong!';
	        var serverErrors = [];
	        if (error && error._body) {
	            serverErrors = JSON.parse(error._body);
	        }
	        var errorMessages = [];
	        if (!!serverErrors) {
	            for (var i in serverErrors) {
	                if (serverErrors.hasOwnProperty(i)) {
	                    var element = serverErrors[i];
	                    errorMessages.push(serverErrors[i][0]);
	                }
	            }
	        }
	        errorMessage = errorMessages.join(', ');
	        return errorMessage;
	    };
	    HttpService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, storage_service_1.StorageService, router_1.Router])
	    ], HttpService);
	    return HttpService;
	}());
	exports.HttpService = HttpService;
	;
	;
	;
	;
	;
	//# sourceMappingURL=http.service.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/Observable");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/add/operator/catch");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("@angular/router");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("@angular/http");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
	var writer_edit_component_1 = __webpack_require__(18);
	var writer_add_component_1 = __webpack_require__(27);
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(32);
	var common_1 = __webpack_require__(33);
	var router_1 = __webpack_require__(15);
	var writer_list_component_1 = __webpack_require__(34);
	var writers_component_1 = __webpack_require__(41);
	var writer_http_service_1 = __webpack_require__(20);
	var paginator_component_1 = __webpack_require__(37);
	var WritersModule = (function () {
	    function WritersModule() {
	    }
	    WritersModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                router_1.RouterModule,
	                forms_1.FormsModule
	            ],
	            declarations: [
	                writers_component_1.WritersComponent,
	                writer_list_component_1.WriterListComponent,
	                writer_edit_component_1.WriterEditComponent,
	                writer_add_component_1.WriterAddComponent
	            ],
	            providers: [
	                writer_http_service_1.WriterHttpService,
	                paginator_component_1.PagerService
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WritersModule);
	    return WritersModule;
	}());
	exports.WritersModule = WritersModule;
	//# sourceMappingURL=writers.module.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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
	var writer_edit_model_1 = __webpack_require__(19);
	var writer_http_service_1 = __webpack_require__(20);
	var router_1 = __webpack_require__(15);
	__webpack_require__(22);
	var core_1 = __webpack_require__(3);
	var WriterEditComponent = (function () {
	    function WriterEditComponent(_httpService, route, router) {
	        this._httpService = _httpService;
	        this.route = route;
	        this.router = router;
	    }
	    WriterEditComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this.route.params.subscribe(function (params) {
	            _this.id = +params['id'];
	        });
	        this._httpService.getWriterById(this.id)
	            .subscribe(function (res) {
	            _this.model = writer_edit_model_1.WriterEditModel.fromJSON(res);
	        });
	    };
	    WriterEditComponent.prototype.onSubmitForm = function () {
	        var _this = this;
	        console.log(this.model);
	        this._httpService.putCustomer(this.id, this.model)
	            .subscribe(function (res) {
	            console.log(_this.model);
	            _this.model = writer_edit_model_1.WriterEditModel.fromJSON(res);
	        });
	    };
	    WriterEditComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(23),
	            styles: [__webpack_require__(24)]
	        }), 
	        __metadata('design:paramtypes', [writer_http_service_1.WriterHttpService, router_1.ActivatedRoute, router_1.Router])
	    ], WriterEditComponent);
	    return WriterEditComponent;
	}());
	exports.WriterEditComponent = WriterEditComponent;
	//# sourceMappingURL=writer-edit.component.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	var WriterEditModel = (function () {
	    function WriterEditModel(firstName, lastName, dateOfBirth, biography) {
	        this.firstName = firstName;
	        this.lastName = lastName;
	        this.dateOfBirth = dateOfBirth;
	        this.biography = biography;
	    }
	    WriterEditModel.fromJSON = function (object) {
	        return new WriterEditModel(object['firstName'], object['lastName'], object['dateOfBirth'], object['biography']);
	    };
	    WriterEditModel.fromJSONArray = function (array) {
	        return array.map(function (obj) { return WriterEditModel.fromJSON(obj); });
	    };
	    return WriterEditModel;
	}());
	exports.WriterEditModel = WriterEditModel;
	//# sourceMappingURL=writer-edit.model.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var config_1 = __webpack_require__(7);
	var http_service_1 = __webpack_require__(11);
	__webpack_require__(21);
	var WriterHttpService = (function () {
	    function WriterHttpService(_httpService) {
	        this._httpService = _httpService;
	    }
	    WriterHttpService.prototype.getWriterById = function (id) {
	        return this._httpService.get(config_1.AppConfig.urls.writer + "/" + id)
	            .map(function (res) { return res.json(); });
	    };
	    WriterHttpService.prototype.getSortingCustomers = function (sortBy, orderBy, pageNumber) {
	        return this._httpService.get(config_1.AppConfig.urls.writer
	            + "?sortOrder=" + sortBy + "&direction=" + orderBy + "&page=" + pageNumber)
	            .map(function (res) { return res.json(); });
	    };
	    WriterHttpService.prototype.getWriters = function () {
	        return this._httpService.get(config_1.AppConfig.urls.writer)
	            .map(function (res) { return res.json(); });
	    };
	    WriterHttpService.prototype.postCustomer = function (data) {
	        return this._httpService.post(config_1.AppConfig.urls.writer, data)
	            .map(function (res) { return res.json(); });
	    };
	    WriterHttpService.prototype.putCustomer = function (id, data) {
	        return this._httpService.put(config_1.AppConfig.urls.writer + "/" + id, data)
	            .map(function (res) { return res.json(); });
	    };
	    WriterHttpService.prototype.deleteCustomer = function (id) {
	        return this._httpService.delete(config_1.AppConfig.urls.writer + "/" + id)
	            .map(function (res) { return res.json(); });
	    };
	    WriterHttpService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_service_1.HttpService])
	    ], WriterHttpService);
	    return WriterHttpService;
	}());
	exports.WriterHttpService = WriterHttpService;
	//# sourceMappingURL=writer-http.service.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/add/operator/switchMap");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "<form (submit)=\"onSubmitForm()\" *ngIf=\"model\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First name</label>\r\n        <input [(ngModel)]=\"model.firstName\" name=\"firstName\" type=\"test\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last name:</label>\r\n        <input [(ngModel)]=\"model.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Date of birth:</label>\r\n        <input [(ngModel)]=\"model.dateOfBirth\" name=\"dateOfBirth\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"biography\">Biography:</label>\r\n        <textarea [(ngModel)]=\"model.biography\" type=\"text\" class=\"form-control\" name=\"biography\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n</form>"

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(25);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

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
	var router_1 = __webpack_require__(15);
	var core_1 = __webpack_require__(3);
	var writer_http_service_1 = __webpack_require__(20);
	var writer_add_model_1 = __webpack_require__(28);
	var WriterAddComponent = (function () {
	    function WriterAddComponent(_httpService, router) {
	        this._httpService = _httpService;
	        this.router = router;
	    }
	    WriterAddComponent.prototype.ngOnInit = function () {
	        this.model = new writer_add_model_1.WriterAddModel(null, null, null, null);
	    };
	    WriterAddComponent.prototype.onSubmitForm = function () {
	        var _this = this;
	        this._httpService.postCustomer(this.model)
	            .subscribe(function (res) {
	            _this.router.navigateByUrl("/spa/writers/list");
	        });
	    };
	    WriterAddComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(29),
	            styles: [__webpack_require__(30)]
	        }), 
	        __metadata('design:paramtypes', [writer_http_service_1.WriterHttpService, router_1.Router])
	    ], WriterAddComponent);
	    return WriterAddComponent;
	}());
	exports.WriterAddComponent = WriterAddComponent;
	//# sourceMappingURL=writer-add.component.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	var WriterAddModel = (function () {
	    function WriterAddModel(firstName, lastName, dateOfBirth, biography) {
	        this.firstName = firstName;
	        this.lastName = lastName;
	        this.dateOfBirth = dateOfBirth;
	        this.biography = biography;
	    }
	    WriterAddModel.fromJSON = function (object) {
	        return new WriterAddModel(object['firstName'], object['lastName'], object['dateOfBirth'], object['biography']);
	    };
	    WriterAddModel.fromJSONArray = function (array) {
	        return array.map(function (obj) { return WriterAddModel.fromJSON(obj); });
	    };
	    return WriterAddModel;
	}());
	exports.WriterAddModel = WriterAddModel;
	//# sourceMappingURL=writer-add.model.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = "<form (submit)=\"onSubmitForm()\" >\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First name</label>\r\n        <input [(ngModel)]=\"model.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last name:</label>\r\n        <input [(ngModel)]=\"model.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Date of birth:</label>\r\n        <input [(ngModel)]=\"model.dateOfBirth\" name=\"dateOfBirth\" type=\"date\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"biography\">Biography:</label>\r\n        <textarea [(ngModel)]=\"model.biography\" type=\"text\" class=\"form-control\" name=\"biography\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n</form>\r\n"

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(31);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = require("@angular/forms");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = require("@angular/common");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

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
	var writer_list_model_1 = __webpack_require__(35);
	var core_1 = __webpack_require__(3);
	var writer_http_service_1 = __webpack_require__(20);
	var paginator_component_1 = __webpack_require__(37);
	var WriterListComponent = (function () {
	    function WriterListComponent(_httpService, pagerService) {
	        this._httpService = _httpService;
	        this.pagerService = pagerService;
	        this.isAddVisible = false;
	        this.isEditVisible = false;
	        this.pager = {};
	    }
	    WriterListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        console.log(1);
	        this._httpService.getWriters()
	            .subscribe(function (res) {
	            console.log(1);
	            console.log(res);
	            _this.model = writer_list_model_1.WriterListModel.fromJSON(res);
	            _this._setPage(1);
	        });
	    };
	    WriterListComponent.prototype.delete = function (id) {
	        this._httpService.deleteCustomer(id)
	            .subscribe(function (res) {
	            console.log("dasdasd");
	            alert("Writer with id: " + id + "deleted");
	        });
	    };
	    WriterListComponent.prototype.Sort = function (columnName) {
	        var _this = this;
	        if (this.model.direction == 'ASC') {
	            this.model.direction = "DESC";
	            this.model.column = columnName;
	            this._httpService.getSortingCustomers(this.model.column, this.model.direction, this.model.page)
	                .subscribe(function (res) {
	                _this.model = writer_list_model_1.WriterListModel.fromJSON(res);
	            });
	        }
	        else {
	            this.model.direction = "ASC";
	            this._httpService.getSortingCustomers(this.model.column, this.model.direction, this.model.page)
	                .subscribe(function (res) {
	                _this.model = writer_list_model_1.WriterListModel.fromJSON(res);
	            });
	        }
	    };
	    WriterListComponent.prototype._setPage = function (page) {
	        var _this = this;
	        if (page < 1 || page > this.model.totalPage) {
	            return;
	        }
	        this.model.page = page;
	        this.pager = this.pagerService.getPager(this.model.page, this.model.pageSize, this.model.totalPage);
	        this._httpService.getSortingCustomers(this.model.column, this.model.direction, this.model.page)
	            .subscribe(function (res) {
	            _this.model = writer_list_model_1.WriterListModel.fromJSON(res);
	        });
	    };
	    WriterListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(38),
	            styles: [__webpack_require__(39)]
	        }), 
	        __metadata('design:paramtypes', [writer_http_service_1.WriterHttpService, paginator_component_1.PagerService])
	    ], WriterListComponent);
	    return WriterListComponent;
	}());
	exports.WriterListComponent = WriterListComponent;
	//# sourceMappingURL=writer-list.component.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var writer_model_1 = __webpack_require__(36);
	var WriterListModel = (function () {
	    function WriterListModel(filter, column, direction, hasNextPage, hasPrePage, pageSize, totalPage, page, writerModel) {
	        this.filter = filter;
	        this.column = column;
	        this.direction = direction;
	        this.hasNextPage = hasNextPage;
	        this.hasPrePage = hasPrePage;
	        this.pageSize = pageSize;
	        this.totalPage = totalPage;
	        this.page = page;
	        this.writerModel = writerModel;
	    }
	    WriterListModel.fromJSON = function (object) {
	        return new WriterListModel(object['filter'], object['order']['column'], object['order']['direction'], object['hasNextPage'], object['hasPreviousPage'], object['pageSize'], object['totalPages'], object['page'], writer_model_1.WriterModel.fromJSONArray(object['items']));
	    };
	    WriterListModel.fromJSONArray = function (array) {
	        return array.map(function (obj) { return WriterListModel.fromJSON(obj); });
	    };
	    return WriterListModel;
	}());
	exports.WriterListModel = WriterListModel;
	//# sourceMappingURL=writer-list.model.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	var WriterModel = (function () {
	    function WriterModel(id, fullName, dateOfBirth, biography) {
	        this.id = id;
	        this.fullName = fullName;
	        this.dateOfBirth = dateOfBirth;
	        this.biography = biography;
	    }
	    WriterModel.fromJSON = function (object) {
	        return new WriterModel(object['id'], object['fullName'], object['dateOfBirth'], object['biography']);
	    };
	    WriterModel.fromJSONArray = function (array) {
	        return array.map(function (obj) { return WriterModel.fromJSON(obj); });
	    };
	    return WriterModel;
	}());
	exports.WriterModel = WriterModel;
	//# sourceMappingURL=writer.model.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	var PagerService = (function () {
	    function PagerService() {
	    }
	    PagerService.prototype.range = function (start, count) {
	        return Array.apply(0, Array(count))
	            .map(function (element, index) {
	            return index + start;
	        });
	    };
	    PagerService.prototype.getPager = function (currentPage, pageSize, totalPages) {
	        if (currentPage === void 0) { currentPage = 1; }
	        if (pageSize === void 0) { pageSize = 5; }
	        var startPage = 1, endPage;
	        var startIndex = (currentPage - 1) * pageSize;
	        var endIndex = startIndex + pageSize;
	        var pages = this.range(startPage, totalPages);
	        return {
	            currentPage: currentPage,
	            pageSize: pageSize,
	            startPage: startPage,
	            endPage: endPage,
	            startIndex: startIndex,
	            endIndex: endIndex,
	            pages: pages
	        };
	    };
	    return PagerService;
	}());
	exports.PagerService = PagerService;
	//# sourceMappingURL=paginator.component.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = "<a [routerLink]=\"['../', 'add']\">Add writer</a>\n\n<div class=\"customer-list\">\n    <div class=\"customer-list-container container\">\n        <div class=\"customer-list-table \">\n            <table class=\"table table-striped\">\n                <thead class=\"table-header\">\n                    <th class=\"table-cell table-name\" (click)=\"Sort('fullName');\">Full Name</th>\n                    <th class=\"table-cell table-date\" (click)=\"Sort('date');\">Birthdate</th>\n                    <th class=\"table-cell table-status\">Biography</th>\n                </thead>\n                <tbody class=\"table-row\" *ngFor=\"let customer of model?.writerModel\">\n                    <tr>\n\n                        <td>{{customer?.fullName}}</td>\n                        <td>{{customer?.dateOfBirth}}</td>\n                        <td>{{customer?.biography}}</td>\n                        <a [routerLink]=\"['../', customer.id, 'edit']\">Edit</a>|\n                        <a (click)=\"delete(customer.id)\">Delete</a>\n                    </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <div style=\"display:inline-block;\">\n        <ul *ngIf=\"pager?.pages && pager?.pages?.length\" class=\"pagination\">\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\n                <a (click)=\"_setPage(1)\">First</a>\n            </li>\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\n                <a (click)=\"_setPage(pager?.currentPage - 1)\">Previous</a>\n            </li>\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager?.currentPage === page}\">\n                <a (click)=\"_setPage(page)\">{{page}}</a>\n            </li>\n            <li [ngClass]=\"{disabled:pager.currentPage === model?.totalPage}\">\n                <a (click)=\"_setPage(pager.currentPage + 1)\">Next</a>\n            </li>\n            <li [ngClass]=\"{disabled:pager?.currentPage === model?.totalPage}\">\n                <a (click)=\"_setPage(model?.totalPage)\">Last</a>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(40);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "a{\r\n    cursor:pointer;\r\n}\r\ntr{\r\n    cursor:pointer;\r\n}", ""]);
	
	// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var WritersComponent = (function () {
	    function WritersComponent() {
	    }
	    WritersComponent.prototype.ngOnInit = function () {
	    };
	    WritersComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(42),
	            styles: [__webpack_require__(43)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WritersComponent);
	    return WritersComponent;
	}());
	exports.WritersComponent = WritersComponent;
	//# sourceMappingURL=writers.component.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = "<router-outlet></router-outlet>\n"

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(44);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var writer_add_component_1 = __webpack_require__(27);
	var writer_edit_component_1 = __webpack_require__(18);
	var router_1 = __webpack_require__(15);
	var writer_list_component_1 = __webpack_require__(34);
	var writers_component_1 = __webpack_require__(41);
	exports.writersRoutes = [{
	        path: 'spa/writers',
	        component: writers_component_1.WritersComponent,
	        children: [
	            { path: '', redirectTo: 'list', pathMatch: 'full' },
	            { path: 'list', component: writer_list_component_1.WriterListComponent },
	            { path: ':id/edit', component: writer_edit_component_1.WriterEditComponent },
	            { path: 'add', component: writer_add_component_1.WriterAddComponent }
	        ]
	    }];
	exports.appRoutingProviders = [];
	exports.writersRouting = router_1.RouterModule.forChild(exports.writersRoutes);
	//# sourceMappingURL=writers.routing.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(47),
	            styles: [__webpack_require__(48)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	//# sourceMappingURL=app.component.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(49);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    NavMenuComponent = __decorate([
	        core_1.Component({
	            selector: 'nav-menu',
	            template: __webpack_require__(51),
	            styles: [__webpack_require__(52)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavMenuComponent);
	    return NavMenuComponent;
	}());
	exports.NavMenuComponent = NavMenuComponent;
	//# sourceMappingURL=navmenu.component.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">WriterApp.API</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/spa']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/spa/writers']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Writers\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(53);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: __webpack_require__(55)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	//# sourceMappingURL=home.component.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = "<h1>Home model</h1>"

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWJlMDQwNjk3Mzg1ZDk1MWNlZGEiLCJ3ZWJwYWNrOi8vLy4vU1BBL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLWJhc2UtdXJsLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktc2VydmVycy5lbnVtLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktcmVxdWVzdC11cmxzLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC93cml0ZXItZWRpdC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcz8zZDNjIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWFkZC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50LmNzcz9kNzc2Iiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC93cml0ZXItbGlzdC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3dyaXRlci5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzPzU4ODkiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5jc3M/ZTkzOCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2QyM2YiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZDhlIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJCO2FBQ2pDLFVBQVUsRUFBRTtpQkFDUixPQUFPLEVBQUUsR0FBRztpQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7aUJBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDeEIsT0FBTyxFQUFFLEtBQUs7aUJBQ2QsNkZBQTZGO2lCQUM3Riw2REFBNkQ7aUJBQzdELFFBQVEsRUFBRSxtRUFBbUU7Y0FDaEY7YUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2lCQUN0RCw2RUFBNkU7aUJBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2hCLENBQUM7VUFDSixDQUFDLENBQUM7U0FFSCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBa0IsY0FBTSxlQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFJO2FBQ3hGLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzVCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsRUFBQztBQXhCRCw2QkF3QkM7Ozs7Ozs7QUNqQ0QsMEQ7Ozs7OztBQ0FBLHFDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGlEQUFpRDtBQUN0RSxzQkFBcUI7QUFDckI7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx1Qzs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNEM7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUM7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EseUM7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLGdEQUFnRDtBQUNqRDtBQUNBLDZDOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNkM7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQztBQUNuQztBQUNBO0FBQ0Esb0RBQW1ELG1CQUFtQjtBQUN0RTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXFFLG1CQUFtQjtBQUN4RjtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsMERBQXlELG1CQUFtQjtBQUM1RTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLHVEQUFzRCxtQkFBbUI7QUFDekU7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDOzs7Ozs7QUNsSkEsNkM7Ozs7OztBQ0FBLG1EOzs7Ozs7QUNBQSxxRDs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsMkM7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrRDs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QyxzQ0FBc0MsRUFBRTtBQUNqRjtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsOEM7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsbUJBQW1CLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLG1CQUFtQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsbUJBQW1CLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0Q7Ozs7OztBQ2xEQSxxQzs7Ozs7O0FDQUEseUQ7Ozs7OztBQ0FBLGtoQzs7Ozs7OztBQ0NBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQSx5Q0FBd0MsZ0JBQWdCO0FBQ3hELEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxpRDs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QyxxQ0FBcUMsRUFBRTtBQUNoRjtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNkM7Ozs7OztBQ2pCQSx1Z0M7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7O0FDUEEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0Esa0Q7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBeUMsc0NBQXNDLEVBQUU7QUFDakY7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDhDOzs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDLGtDQUFrQyxFQUFFO0FBQzdFO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx5Qzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLHNDQUFxQyxpQkFBaUI7QUFDdEQsbUNBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0Q7Ozs7OztBQzlCQSxrWUFBaVksa0dBQWtHLDRRQUE0USxvQkFBb0IscUNBQXFDLHVCQUF1QixxQ0FBcUMscUJBQXFCLG1UQUFtVCxvSEFBb0gsa0NBQWtDLDJHQUEyRyxrQ0FBa0Msc0tBQXNLLG1DQUFtQyxxREFBcUQsTUFBTSxzREFBc0QsZ0RBQWdELDhIQUE4SCxpREFBaUQsOEg7Ozs7Ozs7QUNDeCtEOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsNkJBQTRCLHVCQUF1QixLQUFLLE9BQU8sdUJBQXVCLEtBQUs7O0FBRTNGOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsOEM7Ozs7OztBQzFCQSxxRDs7Ozs7OztBQ0NBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsa0RBQWtEO0FBQy9ELGNBQWEsdUVBQXVFO0FBQ3BGLGNBQWEsMkVBQTJFO0FBQ3hGLGNBQWE7QUFDYjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsNEM7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsMEM7Ozs7OztBQ3pCQSwyUjs7Ozs7OztBQ0NBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0Esc0RBQXFELHlIQUF5SCw0QkFBNEIsT0FBTyxHQUFHOztBQUVwTjs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSw4Qzs7Ozs7O0FDekJBLGl0Qzs7Ozs7OztBQ0NBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQXlDLHlCQUF5QixHQUFHLHFIQUFxSCxnQ0FBZ0MsbUJBQW1CLEdBQUcsMkZBQTJGLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxpQkFBaUIsR0FBRywrQkFBK0IseUZBQXlGLHVCQUF1QixrQ0FBa0MsT0FBTyxlQUFlLDZCQUE2Qiw0QkFBNEIsdUJBQXVCLE9BQU8sc0JBQXNCLHNCQUFzQixPQUFPLHdCQUF3QixxQ0FBcUMsdUJBQXVCLE9BQU8sa0JBQWtCLHNCQUFzQixPQUFPLGtCQUFrQixzQkFBc0IsMEJBQTBCLHNCQUFzQixPQUFPLG9CQUFvQiw2QkFBNkIsNkJBQTZCLE9BQU8saUJBQWlCLG9GQUFvRiw4QkFBOEIsMkJBQTJCLGtDQUFrQyxPQUFPLEdBQUc7O0FBRXh2Qzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsMkM7Ozs7OztBQ3hCQSx1QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFiZTA0MDY5NzM4NWQ5NTFjZWRhIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vU1BBL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgc3RvcmFnZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlJyk7XHJcbnZhciBodHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UnKTtcclxudmFyIHdyaXRlcnNfbW9kdWxlXzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLm1vZHVsZScpO1xyXG52YXIgd3JpdGVyc19yb3V0aW5nXzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLnJvdXRpbmcnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBhbmd1bGFyMl91bml2ZXJzYWxfMSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXVuaXZlcnNhbCcpO1xyXG52YXIgYXBwX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Jyk7XHJcbnZhciBuYXZtZW51X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnKTtcclxudmFyIGhvbWVfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCcpO1xyXG52YXIgQXBwTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcE1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIEFwcE1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgICAgICAgICAgYXBwX2NvbXBvbmVudF8xLkFwcENvbXBvbmVudFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIGFwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBuYXZtZW51X2NvbXBvbmVudF8xLk5hdk1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBob21lX2NvbXBvbmVudF8xLkhvbWVDb21wb25lbnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBodHRwX3NlcnZpY2VfMS5IdHRwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2Vfc2VydmljZV8xLlN0b3JhZ2VTZXJ2aWNlXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgIGFuZ3VsYXIyX3VuaXZlcnNhbF8xLlVuaXZlcnNhbE1vZHVsZSxcclxuICAgICAgICAgICAgICAgIHdyaXRlcnNfbW9kdWxlXzEuV3JpdGVyc01vZHVsZSxcclxuICAgICAgICAgICAgICAgIHJvdXRlcl8xLlJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnc3BhJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdzcGEnLCBjb21wb25lbnQ6IGhvbWVfY29tcG9uZW50XzEuSG9tZUNvbXBvbmVudCB9XHJcbiAgICAgICAgICAgICAgICBdLmNvbmNhdCh3cml0ZXJzX3JvdXRpbmdfMS53cml0ZXJzUm91dGVzLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnc3BhJyB9XHJcbiAgICAgICAgICAgICAgICBdKSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQXBwTW9kdWxlKTtcclxuICAgIHJldHVybiBBcHBNb2R1bGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwTW9kdWxlID0gQXBwTW9kdWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9hcHAubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvbmZpZ18xID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcvY29uZmlnJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBTdG9yYWdlU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdG9yYWdlU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmtleXMgPSB7XHJcbiAgICAgICAgICAgICd1c2VyJzogJ3VzZXInLFxyXG4gICAgICAgICAgICAnYWNjZXNzVG9rZW4nOiAnQWNjZXNzVG9rZW4nLFxyXG4gICAgICAgICAgICAnZXhwaXJlc0luJzogJ0V4cGlyZXNJbicsXHJcbiAgICAgICAgICAgICdsYW5ndWFnZSc6ICdsYW5nJyxcclxuICAgICAgICAgICAgJ2xvZ2luQ3JlZGVudGlhbHMnOiAnbG9naW5DcmVkZW50aWFscydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMua2V5UHJlZml4ID0gY29uZmlnXzEuQXBwQ29uZmlnLnByb2plY3ROYW1lO1xyXG4gICAgfVxyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLl9nZXRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAga2V5ID0ga2V5LnRyaW0oKTtcclxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlQcmVmaXggKyBcIl9cIiArIGtleTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuc2V0SXRlbSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fZ2V0S2V5KGtleSksIHZhbHVlKTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fZ2V0S2V5KGtleSkpO1xyXG4gICAgfTtcclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX2dldEtleShrZXkpKTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBTdG9yYWdlU2VydmljZSk7XHJcbiAgICByZXR1cm4gU3RvcmFnZVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU3RvcmFnZVNlcnZpY2UgPSBTdG9yYWdlU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RvcmFnZS5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGFwaV9iYXNlX3VybF8xID0gcmVxdWlyZSgnLi9zaGFyZWQvYXBpLWJhc2UtdXJsJyk7XHJcbnZhciBhcGlfcmVxdWVzdF91cmxzXzEgPSByZXF1aXJlKCcuL3NoYXJlZC9hcGktcmVxdWVzdC11cmxzJyk7XHJcbnZhciBhcGlfc2VydmVyc19lbnVtXzEgPSByZXF1aXJlKFwiLi9zaGFyZWQvYXBpLXNlcnZlcnMuZW51bVwiKTtcclxudmFyIEFwcENvbmZpZyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHBDb25maWcoKSB7XHJcbiAgICB9XHJcbiAgICBBcHBDb25maWcuYXBpVXJsID0gYXBpX2Jhc2VfdXJsXzEuQXBpQmFzZVVybC5nZXQoYXBpX3NlcnZlcnNfZW51bV8xLkFwaVNlcnZlcnMuZGV2KTtcclxuICAgIEFwcENvbmZpZy51cmxzID0gYXBpX3JlcXVlc3RfdXJsc18xLkFwaVJlcXVlc3RVcmxzLnVybHM7XHJcbiAgICBBcHBDb25maWcucHJvamVjdE5hbWUgPSAnV3JpdGVyQXBwJztcclxuICAgIHJldHVybiBBcHBDb25maWc7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwQ29uZmlnID0gQXBwQ29uZmlnO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbmZpZy9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhcGlfc2VydmVyc19lbnVtXzEgPSByZXF1aXJlKFwiLi9hcGktc2VydmVycy5lbnVtXCIpO1xyXG52YXIgQXBpQmFzZVVybCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcGlCYXNlVXJsKCkge1xyXG4gICAgfVxyXG4gICAgQXBpQmFzZVVybC5nZXQgPSBmdW5jdGlvbiAoZW52KSB7XHJcbiAgICAgICAgc3dpdGNoIChlbnYpIHtcclxuICAgICAgICAgICAgY2FzZSBhcGlfc2VydmVyc19lbnVtXzEuQXBpU2VydmVycy5kZXY6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaHR0cDovL2xvY2FsaG9zdDo0OTYxMS9hcGkvJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBpQmFzZVVybDtcclxufSgpKTtcclxuZXhwb3J0cy5BcGlCYXNlVXJsID0gQXBpQmFzZVVybDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLWJhc2UtdXJsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb25maWcvc2hhcmVkL2FwaS1iYXNlLXVybC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuKGZ1bmN0aW9uIChBcGlTZXJ2ZXJzKSB7XHJcbiAgICBBcGlTZXJ2ZXJzW0FwaVNlcnZlcnNbXCJzdGFpZ2luZ1wiXSA9IDFdID0gXCJzdGFpZ2luZ1wiO1xyXG4gICAgQXBpU2VydmVyc1tBcGlTZXJ2ZXJzW1widGVzdFwiXSA9IDJdID0gXCJ0ZXN0XCI7XHJcbiAgICBBcGlTZXJ2ZXJzW0FwaVNlcnZlcnNbXCJkZXZcIl0gPSAzXSA9IFwiZGV2XCI7XHJcbn0pKGV4cG9ydHMuQXBpU2VydmVycyB8fCAoZXhwb3J0cy5BcGlTZXJ2ZXJzID0ge30pKTtcclxudmFyIEFwaVNlcnZlcnMgPSBleHBvcnRzLkFwaVNlcnZlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS1zZXJ2ZXJzLmVudW0uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLXNlcnZlcnMuZW51bS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIEFwaVJlcXVlc3RVcmxzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwaVJlcXVlc3RVcmxzKCkge1xyXG4gICAgfVxyXG4gICAgQXBpUmVxdWVzdFVybHMudXJscyA9IHtcclxuICAgICAgICAnd3JpdGVyJzogJ3dyaXRlcidcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBpUmVxdWVzdFVybHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBpUmVxdWVzdFVybHMgPSBBcGlSZXF1ZXN0VXJscztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLXJlcXVlc3QtdXJscy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktcmVxdWVzdC11cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCdyeGpzL09ic2VydmFibGUnKTtcclxudmFyIGNvbmZpZ18xID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcvY29uZmlnJyk7XHJcbnZhciBzdG9yYWdlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vc3RvcmFnZS5zZXJ2aWNlJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL21hcCcpO1xyXG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCcpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2h0dHAnKTtcclxudmFyIEh0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEh0dHBTZXJ2aWNlKF9odHRwLCBfc3RvcmFnZSwgX3JvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcclxuICAgICAgICB0aGlzLl9zdG9yYWdlID0gX3N0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcclxuICAgIH1cclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5wcmVwYXJlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzUmF3KSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICBpZiAoaGVhZGVyc1JhdyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyc1Jhdy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChpdGVtLmtleSwgaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fc3RvcmFnZS5rZXlzLmFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdiZWFyZXIgJyArIHRva2VuKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH07XHJcbiAgICAvKiA9PT09PT09PT09PT09PT0gTUVUSE9EUyA9PT09PT09PT09PT09PT1cclxuICAgIGRhdGFSYXcgICAgIC0gcmVndWxhciBKUyBvYmplY3RcclxuICAgIGhlYWRlcnNSYXcgIC0gb2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyBoZWFkZXJzXHJcbiAgICAqL1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5oZWFkZXJzUmF3LCBoZWFkZXJzUmF3ID0gX2MgPT09IHZvaWQgMCA/IG51bGwgOiBfYywgX2QgPSBfYi5zaG93TG9hZGVyLCBzaG93TG9hZGVyID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZDtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHRoaXMucHJlcGFyZUhlYWRlcnMoaGVhZGVyc1Jhdyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLmdldChjb25maWdfMS5BcHBDb25maWcuYXBpVXJsICsgdXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW50ZXJjZXB0KGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGFSYXcsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5oZWFkZXJzUmF3LCBoZWFkZXJzUmF3ID0gX2MgPT09IHZvaWQgMCA/IG51bGwgOiBfYywgX2QgPSBfYi5zaG93TG9hZGVyLCBzaG93TG9hZGVyID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZCwgX2UgPSBfYi5zdHJpbmdpZnlEYXRhLCBzdHJpbmdpZnlEYXRhID0gX2UgPT09IHZvaWQgMCA/IHRydWUgOiBfZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHRoaXMucHJlcGFyZUhlYWRlcnMoaGVhZGVyc1Jhdyk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xyXG4gICAgICAgIGlmIChzdHJpbmdpZnlEYXRhKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhUmF3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLnBvc3QoY29uZmlnXzEuQXBwQ29uZmlnLmFwaVVybCArIHVybCwgZGF0YSB8fCBkYXRhUmF3LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW50ZXJjZXB0KGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKHVybCwgZGF0YVJhdywgX2EpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLmhlYWRlcnNSYXcsIGhlYWRlcnNSYXcgPSBfYyA9PT0gdm9pZCAwID8gbnVsbCA6IF9jLCBfZCA9IF9iLnNob3dMb2FkZXIsIHNob3dMb2FkZXIgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5wcmVwYXJlSGVhZGVycyhoZWFkZXJzUmF3KTtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGFSYXcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgICAgICAgIC5wdXQoY29uZmlnXzEuQXBwQ29uZmlnLmFwaVVybCArIHVybCwgZGF0YSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmludGVyY2VwdChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmwsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLnNob3dMb2FkZXIsIHNob3dMb2FkZXIgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5wcmVwYXJlSGVhZGVycyhudWxsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAgICAgICAuZGVsZXRlKGNvbmZpZ18xLkFwcENvbmZpZy5hcGlVcmwgKyB1cmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5pbnRlcmNlcHQoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3N0b3JhZ2Uua2V5cy51c2VyKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3N0b3JhZ2Uua2V5cy5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9zdG9yYWdlLmtleXMuZXhwaXJlc0luKTtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5mb3JtRXJyb3JNZXNzYWdlID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9ICdPb3BzLCBzb21ldGhpbmcgd3JvbmchJztcclxuICAgICAgICB2YXIgc2VydmVyRXJyb3JzID0gW107XHJcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLl9ib2R5KSB7XHJcbiAgICAgICAgICAgIHNlcnZlckVycm9ycyA9IEpTT04ucGFyc2UoZXJyb3IuX2JvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIGlmICghIXNlcnZlckVycm9ycykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHNlcnZlckVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlckVycm9ycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2VydmVyRXJyb3JzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChzZXJ2ZXJFcnJvcnNbaV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZXMuam9pbignLCAnKTtcclxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xyXG4gICAgfTtcclxuICAgIEh0dHBTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cF8xLkh0dHAsIHN0b3JhZ2Vfc2VydmljZV8xLlN0b3JhZ2VTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG4gICAgXSwgSHR0cFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIEh0dHBTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkh0dHBTZXJ2aWNlID0gSHR0cFNlcnZpY2U7XHJcbjtcclxuO1xyXG47XHJcbjtcclxuO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvaHR0cC5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHdyaXRlcl9lZGl0X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudCcpO1xyXG52YXIgd3JpdGVyX2FkZF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGZvcm1zXzEgPSByZXF1aXJlKCdAYW5ndWxhci9mb3JtcycpO1xyXG52YXIgY29tbW9uXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21tb24nKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciB3cml0ZXJfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciB3cml0ZXJzX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vd3JpdGVycy5jb21wb25lbnRcIik7XHJcbnZhciB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgcGFnaW5hdG9yX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC1jb21wb25lbnQvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnRcIik7XHJcbnZhciBXcml0ZXJzTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlcnNNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJzTW9kdWxlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLk5nTW9kdWxlKHtcclxuICAgICAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICAgICAgY29tbW9uXzEuQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgcm91dGVyXzEuUm91dGVyTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgZm9ybXNfMS5Gb3Jtc01vZHVsZVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIHdyaXRlcnNfY29tcG9uZW50XzEuV3JpdGVyc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIHdyaXRlcl9saXN0X2NvbXBvbmVudF8xLldyaXRlckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXJfZWRpdF9jb21wb25lbnRfMS5Xcml0ZXJFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgd3JpdGVyX2FkZF9jb21wb25lbnRfMS5Xcml0ZXJBZGRDb21wb25lbnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEuV3JpdGVySHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIFdyaXRlcnNNb2R1bGUpO1xyXG4gICAgcmV0dXJuIFdyaXRlcnNNb2R1bGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyc01vZHVsZSA9IFdyaXRlcnNNb2R1bGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlcnMubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHdyaXRlcl9lZGl0X21vZGVsXzEgPSByZXF1aXJlKCcuLy4uLy4uLy4uL21vZGVsL3dyaXRlci1lZGl0Lm1vZGVsJyk7XHJcbnZhciB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCcpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgV3JpdGVyRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJFZGl0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGUsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIFdyaXRlckVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBfdGhpcy5pZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0V3JpdGVyQnlJZCh0aGlzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfZWRpdF9tb2RlbF8xLldyaXRlckVkaXRNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckVkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnB1dEN1c3RvbWVyKHRoaXMuaWQsIHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfdGhpcy5tb2RlbCk7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gd3JpdGVyX2VkaXRfbW9kZWxfMS5Xcml0ZXJFZGl0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyaXRlci1lZGl0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFt3cml0ZXJfaHR0cF9zZXJ2aWNlXzEuV3JpdGVySHR0cFNlcnZpY2UsIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG4gICAgXSwgV3JpdGVyRWRpdENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gV3JpdGVyRWRpdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJFZGl0Q29tcG9uZW50ID0gV3JpdGVyRWRpdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLWVkaXQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgV3JpdGVyRWRpdE1vZGVsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckVkaXRNb2RlbChmaXJzdE5hbWUsIGxhc3ROYW1lLCBkYXRlT2ZCaXJ0aCwgYmlvZ3JhcGh5KSB7XHJcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuZGF0ZU9mQmlydGggPSBkYXRlT2ZCaXJ0aDtcclxuICAgICAgICB0aGlzLmJpb2dyYXBoeSA9IGJpb2dyYXBoeTtcclxuICAgIH1cclxuICAgIFdyaXRlckVkaXRNb2RlbC5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFdyaXRlckVkaXRNb2RlbChvYmplY3RbJ2ZpcnN0TmFtZSddLCBvYmplY3RbJ2xhc3ROYW1lJ10sIG9iamVjdFsnZGF0ZU9mQmlydGgnXSwgb2JqZWN0WydiaW9ncmFwaHknXSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyRWRpdE1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIFdyaXRlckVkaXRNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV3JpdGVyRWRpdE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLldyaXRlckVkaXRNb2RlbCA9IFdyaXRlckVkaXRNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLWVkaXQubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL3dyaXRlci1lZGl0Lm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbmZpZy9jb25maWdcIik7XHJcbnZhciBodHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL2h0dHAuc2VydmljZVwiKTtcclxucmVxdWlyZSgncnhqcy9SeCcpO1xyXG52YXIgV3JpdGVySHR0cFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVySHR0cFNlcnZpY2UoX2h0dHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UgPSBfaHR0cFNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0V3JpdGVyQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5nZXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0U29ydGluZ0N1c3RvbWVycyA9IGZ1bmN0aW9uIChzb3J0QnksIG9yZGVyQnksIHBhZ2VOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlclxyXG4gICAgICAgICAgICArIFwiP3NvcnRPcmRlcj1cIiArIHNvcnRCeSArIFwiJmRpcmVjdGlvbj1cIiArIG9yZGVyQnkgKyBcIiZwYWdlPVwiICsgcGFnZU51bWJlcilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0V3JpdGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlcilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUucG9zdEN1c3RvbWVyID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UucG9zdChjb25maWdfMS5BcHBDb25maWcudXJscy53cml0ZXIsIGRhdGEpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLnB1dEN1c3RvbWVyID0gZnVuY3Rpb24gKGlkLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLnB1dChjb25maWdfMS5BcHBDb25maWcudXJscy53cml0ZXIgKyBcIi9cIiArIGlkLCBkYXRhKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVDdXN0b21lciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5kZWxldGUoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBfc2VydmljZV8xLkh0dHBTZXJ2aWNlXSlcclxuICAgIF0sIFdyaXRlckh0dHBTZXJ2aWNlKTtcclxuICAgIHJldHVybiBXcml0ZXJIdHRwU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJIdHRwU2VydmljZSA9IFdyaXRlckh0dHBTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItaHR0cC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9SeFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSAoc3VibWl0KT1cXFwib25TdWJtaXRGb3JtKClcXFwiICpuZ0lmPVxcXCJtb2RlbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwuZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHR5cGU9XFxcInRlc3RcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBuYW1lOjwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImRhdGVPZkJpcnRoXFxcIj5EYXRlIG9mIGJpcnRoOjwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmRhdGVPZkJpcnRoXFxcIiBuYW1lPVxcXCJkYXRlT2ZCaXJ0aFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJpb2dyYXBoeVxcXCI+QmlvZ3JhcGh5OjwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmJpb2dyYXBoeVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYmlvZ3JhcGh5XFxcIj48L3RleHRhcmVhPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dyaXRlci1lZGl0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIHdyaXRlcl9odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgd3JpdGVyX2FkZF9tb2RlbF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL21vZGVsL3dyaXRlci1hZGQubW9kZWxcIik7XHJcbnZhciBXcml0ZXJBZGRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyQWRkQ29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UgPSBfaHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJBZGRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgd3JpdGVyX2FkZF9tb2RlbF8xLldyaXRlckFkZE1vZGVsKG51bGwsIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckFkZENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdEN1c3RvbWVyKHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9zcGEvd3JpdGVycy9saXN0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckFkZENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXItYWRkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vd3JpdGVyLWFkZC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3dyaXRlcl9odHRwX3NlcnZpY2VfMS5Xcml0ZXJIdHRwU2VydmljZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIFdyaXRlckFkZENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gV3JpdGVyQWRkQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLldyaXRlckFkZENvbXBvbmVudCA9IFdyaXRlckFkZENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLWFkZC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBXcml0ZXJBZGRNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJBZGRNb2RlbChmaXJzdE5hbWUsIGxhc3ROYW1lLCBkYXRlT2ZCaXJ0aCwgYmlvZ3JhcGh5KSB7XHJcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuZGF0ZU9mQmlydGggPSBkYXRlT2ZCaXJ0aDtcclxuICAgICAgICB0aGlzLmJpb2dyYXBoeSA9IGJpb2dyYXBoeTtcclxuICAgIH1cclxuICAgIFdyaXRlckFkZE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgV3JpdGVyQWRkTW9kZWwob2JqZWN0WydmaXJzdE5hbWUnXSwgb2JqZWN0WydsYXN0TmFtZSddLCBvYmplY3RbJ2RhdGVPZkJpcnRoJ10sIG9iamVjdFsnYmlvZ3JhcGh5J10pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckFkZE1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIFdyaXRlckFkZE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJBZGRNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJBZGRNb2RlbCA9IFdyaXRlckFkZE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItYWRkLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9tb2RlbC93cml0ZXItYWRkLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gKHN1Ym1pdCk9XFxcIm9uU3VibWl0Rm9ybSgpXFxcIiA+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwuZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBuYW1lOjwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImRhdGVPZkJpcnRoXFxcIj5EYXRlIG9mIGJpcnRoOjwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmRhdGVPZkJpcnRoXFxcIiBuYW1lPVxcXCJkYXRlT2ZCaXJ0aFxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJpb2dyYXBoeVxcXCI+QmlvZ3JhcGh5OjwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmJpb2dyYXBoeVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYmlvZ3JhcGh5XFxcIj48L3RleHRhcmVhPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbjwvZm9ybT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dyaXRlci1hZGQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciB3cml0ZXJfbGlzdF9tb2RlbF8xID0gcmVxdWlyZSgnLi8uLi8uLi8uLi9tb2RlbC93cml0ZXItbGlzdC5tb2RlbCcpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgd3JpdGVyX2h0dHBfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL3dyaXRlcnMtc2hhcmVkL3dyaXRlci1odHRwLnNlcnZpY2VcIik7XHJcbnZhciBwYWdpbmF0b3JfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudFwiKTtcclxudmFyIFdyaXRlckxpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyTGlzdENvbXBvbmVudChfaHR0cFNlcnZpY2UsIHBhZ2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucGFnZXJTZXJ2aWNlID0gcGFnZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuaXNBZGRWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHt9O1xyXG4gICAgfVxyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZygxKTtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRXcml0ZXJzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9saXN0X21vZGVsXzEuV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgICAgIF90aGlzLl9zZXRQYWdlKDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmRlbGV0ZUN1c3RvbWVyKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXNkYXNkXCIpO1xyXG4gICAgICAgICAgICBhbGVydChcIldyaXRlciB3aXRoIGlkOiBcIiArIGlkICsgXCJkZWxldGVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLlNvcnQgPSBmdW5jdGlvbiAoY29sdW1uTmFtZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZGlyZWN0aW9uID09ICdBU0MnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJERVNDXCI7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY29sdW1uID0gY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJBU0NcIjtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUuX3NldFBhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLm1vZGVsLnRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHRoaXMucGFnZXJTZXJ2aWNlLmdldFBhZ2VyKHRoaXMubW9kZWwucGFnZSwgdGhpcy5tb2RlbC5wYWdlU2l6ZSwgdGhpcy5tb2RlbC50b3RhbFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFNvcnRpbmdDdXN0b21lcnModGhpcy5tb2RlbC5jb2x1bW4sIHRoaXMubW9kZWwuZGlyZWN0aW9uLCB0aGlzLm1vZGVsLnBhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9saXN0X21vZGVsXzEuV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXItbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlci1saXN0LmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbd3JpdGVyX2h0dHBfc2VydmljZV8xLldyaXRlckh0dHBTZXJ2aWNlLCBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXSlcclxuICAgIF0sIFdyaXRlckxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTGlzdENvbXBvbmVudCA9IFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgd3JpdGVyX21vZGVsXzEgPSByZXF1aXJlKCcuL3dyaXRlci5tb2RlbCcpO1xyXG52YXIgV3JpdGVyTGlzdE1vZGVsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckxpc3RNb2RlbChmaWx0ZXIsIGNvbHVtbiwgZGlyZWN0aW9uLCBoYXNOZXh0UGFnZSwgaGFzUHJlUGFnZSwgcGFnZVNpemUsIHRvdGFsUGFnZSwgcGFnZSwgd3JpdGVyTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcclxuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmhhc05leHRQYWdlID0gaGFzTmV4dFBhZ2U7XHJcbiAgICAgICAgdGhpcy5oYXNQcmVQYWdlID0gaGFzUHJlUGFnZTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XHJcbiAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSB0b3RhbFBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLndyaXRlck1vZGVsID0gd3JpdGVyTW9kZWw7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJMaXN0TW9kZWwuZnJvbUpTT04gPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXcml0ZXJMaXN0TW9kZWwob2JqZWN0WydmaWx0ZXInXSwgb2JqZWN0WydvcmRlciddWydjb2x1bW4nXSwgb2JqZWN0WydvcmRlciddWydkaXJlY3Rpb24nXSwgb2JqZWN0WydoYXNOZXh0UGFnZSddLCBvYmplY3RbJ2hhc1ByZXZpb3VzUGFnZSddLCBvYmplY3RbJ3BhZ2VTaXplJ10sIG9iamVjdFsndG90YWxQYWdlcyddLCBvYmplY3RbJ3BhZ2UnXSwgd3JpdGVyX21vZGVsXzEuV3JpdGVyTW9kZWwuZnJvbUpTT05BcnJheShvYmplY3RbJ2l0ZW1zJ10pKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJMaXN0TW9kZWwuZnJvbUpTT05BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJMaXN0TW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTGlzdE1vZGVsID0gV3JpdGVyTGlzdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItbGlzdC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWxpc3QubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgV3JpdGVyTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyTW9kZWwoaWQsIGZ1bGxOYW1lLCBkYXRlT2ZCaXJ0aCwgYmlvZ3JhcGh5KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcclxuICAgICAgICB0aGlzLmRhdGVPZkJpcnRoID0gZGF0ZU9mQmlydGg7XHJcbiAgICAgICAgdGhpcy5iaW9ncmFwaHkgPSBiaW9ncmFwaHk7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJNb2RlbC5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFdyaXRlck1vZGVsKG9iamVjdFsnaWQnXSwgb2JqZWN0WydmdWxsTmFtZSddLCBvYmplY3RbJ2RhdGVPZkJpcnRoJ10sIG9iamVjdFsnYmlvZ3JhcGh5J10pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlck1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIFdyaXRlck1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJNb2RlbCA9IFdyaXRlck1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXIubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL3dyaXRlci5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBQYWdlclNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnZXJTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgUGFnZXJTZXJ2aWNlLnByb3RvdHlwZS5yYW5nZSA9IGZ1bmN0aW9uIChzdGFydCwgY291bnQpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuYXBwbHkoMCwgQXJyYXkoY291bnQpKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXggKyBzdGFydDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQYWdlclNlcnZpY2UucHJvdG90eXBlLmdldFBhZ2VyID0gZnVuY3Rpb24gKGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA9PT0gdm9pZCAwKSB7IGN1cnJlbnRQYWdlID0gMTsgfVxyXG4gICAgICAgIGlmIChwYWdlU2l6ZSA9PT0gdm9pZCAwKSB7IHBhZ2VTaXplID0gNTsgfVxyXG4gICAgICAgIHZhciBzdGFydFBhZ2UgPSAxLCBlbmRQYWdlO1xyXG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICAgICAgICB2YXIgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgcGFnZVNpemU7XHJcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5yYW5nZShzdGFydFBhZ2UsIHRvdGFsUGFnZXMpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxyXG4gICAgICAgICAgICBzdGFydFBhZ2U6IHN0YXJ0UGFnZSxcclxuICAgICAgICAgICAgZW5kUGFnZTogZW5kUGFnZSxcclxuICAgICAgICAgICAgc3RhcnRJbmRleDogc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgZW5kSW5kZXg6IGVuZEluZGV4LFxyXG4gICAgICAgICAgICBwYWdlczogcGFnZXNcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYWdlclNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUGFnZXJTZXJ2aWNlID0gUGFnZXJTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdpbmF0b3IuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uLycsICdhZGQnXVxcXCI+QWRkIHdyaXRlcjwvYT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjdXN0b21lci1saXN0XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY3VzdG9tZXItbGlzdC1jb250YWluZXIgY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImN1c3RvbWVyLWxpc3QtdGFibGUgXFxcIj5cXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtbmFtZVxcXCIgKGNsaWNrKT1cXFwiU29ydCgnZnVsbE5hbWUnKTtcXFwiPkZ1bGwgTmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtZGF0ZVxcXCIgKGNsaWNrKT1cXFwiU29ydCgnZGF0ZScpO1xcXCI+QmlydGhkYXRlPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGUtY2VsbCB0YWJsZS1zdGF0dXNcXFwiPkJpb2dyYXBoeTwvdGg+XFxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cXFwidGFibGUtcm93XFxcIiAqbmdGb3I9XFxcImxldCBjdXN0b21lciBvZiBtb2RlbD8ud3JpdGVyTW9kZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyPy5mdWxsTmFtZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tjdXN0b21lcj8uZGF0ZU9mQmlydGh9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7Y3VzdG9tZXI/LmJpb2dyYXBoeX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnLi4vJywgY3VzdG9tZXIuaWQsICdlZGl0J11cXFwiPkVkaXQ8L2E+fFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImRlbGV0ZShjdXN0b21lci5pZClcXFwiPkRlbGV0ZTwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuXFxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTppbmxpbmUtYmxvY2s7XFxcIj5cXG4gICAgICAgIDx1bCAqbmdJZj1cXFwicGFnZXI/LnBhZ2VzICYmIHBhZ2VyPy5wYWdlcz8ubGVuZ3RoXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gMX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZSgxKVxcXCI+Rmlyc3Q8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXI/LmN1cnJlbnRQYWdlID09PSAxfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKHBhZ2VyPy5jdXJyZW50UGFnZSAtIDEpXFxcIj5QcmV2aW91czwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBwYWdlIG9mIHBhZ2VyLnBhZ2VzXFxcIiBbbmdDbGFzc109XFxcInthY3RpdmU6cGFnZXI/LmN1cnJlbnRQYWdlID09PSBwYWdlfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKHBhZ2UpXFxcIj57e3BhZ2V9fTwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlci5jdXJyZW50UGFnZSA9PT0gbW9kZWw/LnRvdGFsUGFnZX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlci5jdXJyZW50UGFnZSArIDEpXFxcIj5OZXh0PC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gbW9kZWw/LnRvdGFsUGFnZX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShtb2RlbD8udG90YWxQYWdlKVxcXCI+TGFzdDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dyaXRlci1saXN0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImF7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG50cntcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIFdyaXRlcnNDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyc0NvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIFdyaXRlcnNDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFdyaXRlcnNDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JpdGVycy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlcnMuY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgV3JpdGVyc0NvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gV3JpdGVyc0NvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJzQ29tcG9uZW50ID0gV3JpdGVyc0NvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVycy5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dyaXRlcnMuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIHdyaXRlcl9hZGRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50Jyk7XHJcbnZhciB3cml0ZXJfZWRpdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQnKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciB3cml0ZXJfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciB3cml0ZXJzX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vd3JpdGVycy5jb21wb25lbnRcIik7XHJcbmV4cG9ydHMud3JpdGVyc1JvdXRlcyA9IFt7XHJcbiAgICAgICAgcGF0aDogJ3NwYS93cml0ZXJzJyxcclxuICAgICAgICBjb21wb25lbnQ6IHdyaXRlcnNfY29tcG9uZW50XzEuV3JpdGVyc0NvbXBvbmVudCxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnbGlzdCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2xpc3QnLCBjb21wb25lbnQ6IHdyaXRlcl9saXN0X2NvbXBvbmVudF8xLldyaXRlckxpc3RDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnOmlkL2VkaXQnLCBjb21wb25lbnQ6IHdyaXRlcl9lZGl0X2NvbXBvbmVudF8xLldyaXRlckVkaXRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYWRkJywgY29tcG9uZW50OiB3cml0ZXJfYWRkX2NvbXBvbmVudF8xLldyaXRlckFkZENvbXBvbmVudCB9XHJcbiAgICAgICAgXVxyXG4gICAgfV07XHJcbmV4cG9ydHMuYXBwUm91dGluZ1Byb3ZpZGVycyA9IFtdO1xyXG5leHBvcnRzLndyaXRlcnNSb3V0aW5nID0gcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvckNoaWxkKGV4cG9ydHMud3JpdGVyc1JvdXRlcyk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlcnMucm91dGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMucm91dGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgQXBwQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcENvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIEFwcENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBBcHBDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEFwcENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5BcHBDb21wb25lbnQgPSBBcHBDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcbiAgICAuYm9keS1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgTmF2TWVudUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOYXZNZW51Q29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgTmF2TWVudUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgTmF2TWVudUNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gTmF2TWVudUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5OYXZNZW51Q29tcG9uZW50ID0gTmF2TWVudUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2bWVudS5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+V3JpdGVyQXBwLkFQSTwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvc3BhJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvbWUnPjwvc3Bhbj4gSG9tZVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zcGEvd3JpdGVycyddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IFdyaXRlcnNcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgSG9tZUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIb21lQ29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgSG9tZUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEhvbWVDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEhvbWVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSG9tZUNvbXBvbmVudCA9IEhvbWVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvbWUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+SG9tZSBtb2RlbDwvaDE+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=