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
	        return '';
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
	                return '/api/';
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
	        if (error.status === 404) {
	            console.log(error);
	            this._router.navigate(['/spa']);
	        }
	        if (error.status === 401) {
	            this._storage.removeItem(this._storage.keys.user);
	            this._storage.removeItem(this._storage.keys.accessToken);
	            this._storage.removeItem(this._storage.keys.expiresIn);
	            this._router.navigate(['/spa']);
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
	        this._httpService.putCustomer(this.id, this.model)
	            .subscribe(function (res) {
	            _this.model = writer_edit_model_1.WriterEditModel.fromJSON(res);
	            _this.router.navigateByUrl("/spa/writers/list");
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
	            .map(function (res) { return res; });
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

	module.exports = "<form (submit)=\"onSubmitForm()\" *ngIf=\"model\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First name</label>\r\n        <input [(ngModel)]=\"model.firstName\" name=\"firstName\" type=\"test\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last name:</label>\r\n        <input [(ngModel)]=\"model.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Date of birth:</label>\r\n        <input [ngModel]=\"model.dateOfBirth| date:'yyyy-MM-dd'\" (ngModelChange)=\"model.dateOfBirth = $event\" name=\"dateOfBirth\" type=\"date\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"biography\">Biography:</label>\r\n        <textarea [(ngModel)]=\"model.biography\" type=\"text\" class=\"form-control\" name=\"biography\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n</form>"

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
	        this._httpService.getWriters()
	            .subscribe(function (res) {
	            _this.model = writer_list_model_1.WriterListModel.fromJSON(res);
	            _this._setPage(1);
	        });
	    };
	    WriterListComponent.prototype.delete = function (id) {
	        var _this = this;
	        this._httpService.deleteCustomer(id)
	            .subscribe(function (res) { _this.ngOnInit(); });
	    };
	    WriterListComponent.prototype.sort = function (columnName) {
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

	module.exports = "<br>\r\n<p>\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['../', 'add']\">Add writer</button>\r\n</p>\r\n<div class=\"customer-list-container\">\r\n    <table class=\"table table-responsive\">\r\n        <thead class=\"table-header\">\r\n        <th class=\"table-cell table-name\" (click)=\"sort('fullName');\">Full Name</th>\r\n        <th class=\"table-cell table-date\" (click)=\"sort('date');\">Birthdate</th>\r\n        <th class=\"table-cell table-status\">Biography</th>\r\n        </thead>\r\n        <tbody class=\"table-row\" *ngFor=\"let customer of model?.writerModel\">\r\n            <tr>\r\n                <td>{{customer?.fullName}}</td>\r\n                <td>{{customer?.dateOfBirth | date: 'dd/MM/yyyy'}}</td>\r\n                <td>{{customer?.biography}}</td>\r\n                <td>\r\n                    <a [routerLink]=\"['../', customer.id, 'edit']\">Edit</a>|\r\n                    <a (click)=\"delete(customer.id)\">Delete</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>    \r\n    <div style=\"display:inline-block;\">\r\n        <ul *ngIf=\"pager?.pages && pager?.pages?.length\" class=\"pagination\">\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\r\n                <a (click)=\"_setPage(1)\">First</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\r\n                <a (click)=\"_setPage(pager?.currentPage - 1)\">Previous</a>\r\n            </li>\r\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager?.currentPage === page}\">\r\n                <a (click)=\"_setPage(page)\">{{page}}</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === model?.totalPage}\">\r\n                <a (click)=\"_setPage(pager.currentPage + 1)\">Next</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === model?.totalPage}\">\r\n                <a (click)=\"_setPage(model?.totalPage)\">Last</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

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
	exports.push([module.id, "a {\r\n    cursor: pointer;\r\n}\r\n\r\nth {\r\n    cursor: pointer;\r\n}\r\n\r\ntd {\r\n    max-width: 200px;\r\n    min-width: 100px;\r\n    word-break: break-word;\r\n}\r\n\r\n\r\n.table-status {\r\n    cursor: default;\r\n}\r\n", ""]);
	
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

	module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/spa']\">Writers Info List</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/spa/writers']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Writers\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

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

	module.exports = "<h1>Home model</h1>\r\n<h2>Welcome to Writer`s list application</h2>"

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTRiM2UwNDdjMTA2YjU5N2E2ZjMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLWJhc2UtdXJsLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktc2VydmVycy5lbnVtLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktcmVxdWVzdC11cmxzLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC93cml0ZXItZWRpdC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcz8zZDNjIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWFkZC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50LmNzcz9kNzc2Iiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC93cml0ZXItbGlzdC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3dyaXRlci5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzPzU4ODkiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5jc3M/ZTkzOCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2QyM2YiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZDhlIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJCO2FBQ2pDLFVBQVUsRUFBRTtpQkFDUixPQUFPLEVBQUUsR0FBRztpQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7aUJBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDeEIsT0FBTyxFQUFFLEtBQUs7aUJBQ2QsNkZBQTZGO2lCQUM3Riw2REFBNkQ7aUJBQzdELFFBQVEsRUFBRSxtRUFBbUU7Y0FDaEY7YUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2lCQUN0RCw2RUFBNkU7aUJBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2hCLENBQUM7VUFDSixDQUFDLENBQUM7U0FFSCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBa0IsY0FBTSxlQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFJO2FBQ3hGLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzVCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsRUFBQztBQXhCRCw2QkF3QkM7Ozs7Ozs7QUNqQ0QsMEQ7Ozs7OztBQ0FBLHFDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGlEQUFpRDtBQUN0RSxzQkFBcUI7QUFDckI7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx1Qzs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNEM7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsbUM7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EseUM7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLGdEQUFnRDtBQUNqRDtBQUNBLDZDOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNkM7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQztBQUNuQztBQUNBO0FBQ0Esb0RBQW1ELG1CQUFtQjtBQUN0RTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXFFLG1CQUFtQjtBQUN4RjtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsMERBQXlELG1CQUFtQjtBQUM1RTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLHVEQUFzRCxtQkFBbUI7QUFDekU7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUM7Ozs7OztBQ3RKQSw2Qzs7Ozs7O0FDQUEsbUQ7Ozs7OztBQ0FBLHFEOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSwyQzs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxrRDs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QyxzQ0FBc0MsRUFBRTtBQUNqRjtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsOEM7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsbUJBQW1CLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLG1CQUFtQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsWUFBWSxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLGdEOzs7Ozs7QUNsREEscUM7Ozs7OztBQ0FBLHlEOzs7Ozs7QUNBQSxrbEM7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EseUNBQXdDLGdCQUFnQjtBQUN4RCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsaUQ7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBeUMscUNBQXFDLEVBQUU7QUFDaEY7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDZDOzs7Ozs7QUNqQkEsdWdDOzs7Ozs7O0FDQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7OztBQ1BBLDRDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLGtCQUFrQixFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0Esa0Q7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBeUMsc0NBQXNDLEVBQUU7QUFDakY7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDhDOzs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDLGtDQUFrQyxFQUFFO0FBQzdFO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx5Qzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLHNDQUFxQyxpQkFBaUI7QUFDdEQsbUNBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsZ0Q7Ozs7OztBQzlCQSxtVkFBa1Ysd0ZBQXdGLHdPQUF3TyxvQkFBb0IsK0JBQStCLDRDQUE0QywrQkFBK0IscUJBQXFCLG9UQUFvVCx3SEFBd0gsa0NBQWtDLGlIQUFpSCxrQ0FBa0MsNEtBQTRLLG1DQUFtQyx1REFBdUQsTUFBTSwwREFBMEQsZ0RBQWdELG9JQUFvSSxpREFBaUQsNEk7Ozs7Ozs7QUNDajdEOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsOEJBQTZCLHdCQUF3QixLQUFLLFlBQVksd0JBQXdCLEtBQUssWUFBWSx5QkFBeUIseUJBQXlCLCtCQUErQixLQUFLLDJCQUEyQix3QkFBd0IsS0FBSzs7QUFFN1A7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSw4Qzs7Ozs7O0FDMUJBLHFEOzs7Ozs7O0FDQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxrREFBa0Q7QUFDL0QsY0FBYSx1RUFBdUU7QUFDcEYsY0FBYSwyRUFBMkU7QUFDeEYsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSw0Qzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSwwQzs7Ozs7O0FDekJBLDJSOzs7Ozs7O0FDQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxzREFBcUQseUhBQXlILDRCQUE0QixPQUFPLEdBQUc7O0FBRXBOOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDhDOzs7Ozs7QUN6QkEsa2hDOzs7Ozs7O0FDQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBeUMseUJBQXlCLEdBQUcscUhBQXFILGdDQUFnQyxtQkFBbUIsR0FBRywyRkFBMkYsc0JBQXNCLGFBQWEsY0FBYyxlQUFlLGlCQUFpQixHQUFHLCtCQUErQix5RkFBeUYsdUJBQXVCLGtDQUFrQyxPQUFPLGVBQWUsNkJBQTZCLDRCQUE0Qix1QkFBdUIsT0FBTyxzQkFBc0Isc0JBQXNCLE9BQU8sd0JBQXdCLHFDQUFxQyx1QkFBdUIsT0FBTyxrQkFBa0Isc0JBQXNCLE9BQU8sa0JBQWtCLHNCQUFzQiwwQkFBMEIsc0JBQXNCLE9BQU8sb0JBQW9CLDZCQUE2Qiw2QkFBNkIsT0FBTyxpQkFBaUIsb0ZBQW9GLDhCQUE4QiwyQkFBMkIsa0NBQWtDLE9BQU8sR0FBRzs7QUFFeHZDOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSwyQzs7Ozs7O0FDeEJBLHdGIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTRiM2UwNDdjMTA2YjU5N2E2ZjMiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9TUEEvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBzdG9yYWdlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UnKTtcclxudmFyIGh0dHBfc2VydmljZV8xID0gcmVxdWlyZSgnLi9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL2h0dHAuc2VydmljZScpO1xyXG52YXIgd3JpdGVyc19tb2R1bGVfMSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMubW9kdWxlJyk7XHJcbnZhciB3cml0ZXJzX3JvdXRpbmdfMSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMucm91dGluZycpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIGFuZ3VsYXIyX3VuaXZlcnNhbF8xID0gcmVxdWlyZSgnYW5ndWxhcjItdW5pdmVyc2FsJyk7XHJcbnZhciBhcHBfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnKTtcclxudmFyIG5hdm1lbnVfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCcpO1xyXG52YXIgaG9tZV9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Jyk7XHJcbnZhciBBcHBNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwTW9kdWxlKCkge1xyXG4gICAgfVxyXG4gICAgQXBwTW9kdWxlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLk5nTW9kdWxlKHtcclxuICAgICAgICAgICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgICAgICAgICBhcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgYXBwX2NvbXBvbmVudF8xLkFwcENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIG5hdm1lbnVfY29tcG9uZW50XzEuTmF2TWVudUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGhvbWVfY29tcG9uZW50XzEuSG9tZUNvbXBvbmVudFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIGh0dHBfc2VydmljZV8xLkh0dHBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgc3RvcmFnZV9zZXJ2aWNlXzEuU3RvcmFnZVNlcnZpY2VcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICAgICAgYW5ndWxhcjJfdW5pdmVyc2FsXzEuVW5pdmVyc2FsTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgd3JpdGVyc19tb2R1bGVfMS5Xcml0ZXJzTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdzcGEnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ3NwYScsIGNvbXBvbmVudDogaG9tZV9jb21wb25lbnRfMS5Ib21lQ29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgIF0uY29uY2F0KHdyaXRlcnNfcm91dGluZ18xLndyaXRlcnNSb3V0ZXMsIFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdzcGEnIH1cclxuICAgICAgICAgICAgICAgIF0pKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBBcHBNb2R1bGUpO1xyXG4gICAgcmV0dXJuIEFwcE1vZHVsZTtcclxufSgpKTtcclxuZXhwb3J0cy5BcHBNb2R1bGUgPSBBcHBNb2R1bGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5tb2R1bGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2FwcC5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29uZmlnXzEgPSByZXF1aXJlKCcuLy4uLy4uL2NvbmZpZy9jb25maWcnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIFN0b3JhZ2VTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0b3JhZ2VTZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMua2V5cyA9IHtcclxuICAgICAgICAgICAgJ3VzZXInOiAndXNlcicsXHJcbiAgICAgICAgICAgICdhY2Nlc3NUb2tlbic6ICdBY2Nlc3NUb2tlbicsXHJcbiAgICAgICAgICAgICdleHBpcmVzSW4nOiAnRXhwaXJlc0luJyxcclxuICAgICAgICAgICAgJ2xhbmd1YWdlJzogJ2xhbmcnLFxyXG4gICAgICAgICAgICAnbG9naW5DcmVkZW50aWFscyc6ICdsb2dpbkNyZWRlbnRpYWxzJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5rZXlQcmVmaXggPSBjb25maWdfMS5BcHBDb25maWcucHJvamVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuX2dldEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBrZXkgPSBrZXkudHJpbSgpO1xyXG4gICAgICAgIGlmIChrZXkubGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmtleVByZWZpeCArIFwiX1wiICsga2V5O1xyXG4gICAgfTtcclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5zZXRJdGVtID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9nZXRLZXkoa2V5KSwgdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9nZXRLZXkoa2V5KSk7XHJcbiAgICB9O1xyXG4gICAgU3RvcmFnZVNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgU3RvcmFnZVNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIFN0b3JhZ2VTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlN0b3JhZ2VTZXJ2aWNlID0gU3RvcmFnZVNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0b3JhZ2Uuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhcGlfYmFzZV91cmxfMSA9IHJlcXVpcmUoJy4vc2hhcmVkL2FwaS1iYXNlLXVybCcpO1xyXG52YXIgYXBpX3JlcXVlc3RfdXJsc18xID0gcmVxdWlyZSgnLi9zaGFyZWQvYXBpLXJlcXVlc3QtdXJscycpO1xyXG52YXIgYXBpX3NlcnZlcnNfZW51bV8xID0gcmVxdWlyZShcIi4vc2hhcmVkL2FwaS1zZXJ2ZXJzLmVudW1cIik7XHJcbnZhciBBcHBDb25maWcgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwQ29uZmlnKCkge1xyXG4gICAgfVxyXG4gICAgQXBwQ29uZmlnLmFwaVVybCA9IGFwaV9iYXNlX3VybF8xLkFwaUJhc2VVcmwuZ2V0KGFwaV9zZXJ2ZXJzX2VudW1fMS5BcGlTZXJ2ZXJzLmRldik7XHJcbiAgICBBcHBDb25maWcudXJscyA9IGFwaV9yZXF1ZXN0X3VybHNfMS5BcGlSZXF1ZXN0VXJscy51cmxzO1xyXG4gICAgQXBwQ29uZmlnLnByb2plY3ROYW1lID0gJ1dyaXRlckFwcCc7XHJcbiAgICByZXR1cm4gQXBwQ29uZmlnO1xyXG59KCkpO1xyXG5leHBvcnRzLkFwcENvbmZpZyA9IEFwcENvbmZpZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb25maWcvY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgYXBpX3NlcnZlcnNfZW51bV8xID0gcmVxdWlyZShcIi4vYXBpLXNlcnZlcnMuZW51bVwiKTtcclxudmFyIEFwaUJhc2VVcmwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBpQmFzZVVybCgpIHtcclxuICAgIH1cclxuICAgIEFwaUJhc2VVcmwuZ2V0ID0gZnVuY3Rpb24gKGVudikge1xyXG4gICAgICAgIHN3aXRjaCAoZW52KSB7XHJcbiAgICAgICAgICAgIGNhc2UgYXBpX3NlcnZlcnNfZW51bV8xLkFwaVNlcnZlcnMuZGV2OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJy9hcGkvJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBpQmFzZVVybDtcclxufSgpKTtcclxuZXhwb3J0cy5BcGlCYXNlVXJsID0gQXBpQmFzZVVybDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLWJhc2UtdXJsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb25maWcvc2hhcmVkL2FwaS1iYXNlLXVybC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuKGZ1bmN0aW9uIChBcGlTZXJ2ZXJzKSB7XHJcbiAgICBBcGlTZXJ2ZXJzW0FwaVNlcnZlcnNbXCJzdGFpZ2luZ1wiXSA9IDFdID0gXCJzdGFpZ2luZ1wiO1xyXG4gICAgQXBpU2VydmVyc1tBcGlTZXJ2ZXJzW1widGVzdFwiXSA9IDJdID0gXCJ0ZXN0XCI7XHJcbiAgICBBcGlTZXJ2ZXJzW0FwaVNlcnZlcnNbXCJkZXZcIl0gPSAzXSA9IFwiZGV2XCI7XHJcbn0pKGV4cG9ydHMuQXBpU2VydmVycyB8fCAoZXhwb3J0cy5BcGlTZXJ2ZXJzID0ge30pKTtcclxudmFyIEFwaVNlcnZlcnMgPSBleHBvcnRzLkFwaVNlcnZlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS1zZXJ2ZXJzLmVudW0uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLXNlcnZlcnMuZW51bS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIEFwaVJlcXVlc3RVcmxzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwaVJlcXVlc3RVcmxzKCkge1xyXG4gICAgfVxyXG4gICAgQXBpUmVxdWVzdFVybHMudXJscyA9IHtcclxuICAgICAgICAnd3JpdGVyJzogJ3dyaXRlcidcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBpUmVxdWVzdFVybHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBpUmVxdWVzdFVybHMgPSBBcGlSZXF1ZXN0VXJscztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLXJlcXVlc3QtdXJscy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktcmVxdWVzdC11cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCdyeGpzL09ic2VydmFibGUnKTtcclxudmFyIGNvbmZpZ18xID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcvY29uZmlnJyk7XHJcbnZhciBzdG9yYWdlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vc3RvcmFnZS5zZXJ2aWNlJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL21hcCcpO1xyXG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCcpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2h0dHAnKTtcclxudmFyIEh0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEh0dHBTZXJ2aWNlKF9odHRwLCBfc3RvcmFnZSwgX3JvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcclxuICAgICAgICB0aGlzLl9zdG9yYWdlID0gX3N0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcclxuICAgIH1cclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5wcmVwYXJlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzUmF3KSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICBpZiAoaGVhZGVyc1JhdyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyc1Jhdy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChpdGVtLmtleSwgaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fc3RvcmFnZS5rZXlzLmFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdiZWFyZXIgJyArIHRva2VuKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH07XHJcbiAgICAvKiA9PT09PT09PT09PT09PT0gTUVUSE9EUyA9PT09PT09PT09PT09PT1cclxuICAgIGRhdGFSYXcgICAgIC0gcmVndWxhciBKUyBvYmplY3RcclxuICAgIGhlYWRlcnNSYXcgIC0gb2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyBoZWFkZXJzXHJcbiAgICAqL1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5oZWFkZXJzUmF3LCBoZWFkZXJzUmF3ID0gX2MgPT09IHZvaWQgMCA/IG51bGwgOiBfYywgX2QgPSBfYi5zaG93TG9hZGVyLCBzaG93TG9hZGVyID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZDtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHRoaXMucHJlcGFyZUhlYWRlcnMoaGVhZGVyc1Jhdyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLmdldChjb25maWdfMS5BcHBDb25maWcuYXBpVXJsICsgdXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW50ZXJjZXB0KGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGFSYXcsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5oZWFkZXJzUmF3LCBoZWFkZXJzUmF3ID0gX2MgPT09IHZvaWQgMCA/IG51bGwgOiBfYywgX2QgPSBfYi5zaG93TG9hZGVyLCBzaG93TG9hZGVyID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZCwgX2UgPSBfYi5zdHJpbmdpZnlEYXRhLCBzdHJpbmdpZnlEYXRhID0gX2UgPT09IHZvaWQgMCA/IHRydWUgOiBfZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHRoaXMucHJlcGFyZUhlYWRlcnMoaGVhZGVyc1Jhdyk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xyXG4gICAgICAgIGlmIChzdHJpbmdpZnlEYXRhKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhUmF3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLnBvc3QoY29uZmlnXzEuQXBwQ29uZmlnLmFwaVVybCArIHVybCwgZGF0YSB8fCBkYXRhUmF3LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW50ZXJjZXB0KGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKHVybCwgZGF0YVJhdywgX2EpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLmhlYWRlcnNSYXcsIGhlYWRlcnNSYXcgPSBfYyA9PT0gdm9pZCAwID8gbnVsbCA6IF9jLCBfZCA9IF9iLnNob3dMb2FkZXIsIHNob3dMb2FkZXIgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5wcmVwYXJlSGVhZGVycyhoZWFkZXJzUmF3KTtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGFSYXcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgICAgICAgIC5wdXQoY29uZmlnXzEuQXBwQ29uZmlnLmFwaVVybCArIHVybCwgZGF0YSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmludGVyY2VwdChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmwsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLnNob3dMb2FkZXIsIHNob3dMb2FkZXIgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5wcmVwYXJlSGVhZGVycyhudWxsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAgICAgICAuZGVsZXRlKGNvbmZpZ18xLkFwcENvbmZpZy5hcGlVcmwgKyB1cmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5pbnRlcmNlcHQoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvc3BhJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3N0b3JhZ2Uua2V5cy51c2VyKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3N0b3JhZ2Uua2V5cy5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9zdG9yYWdlLmtleXMuZXhwaXJlc0luKTtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3NwYSddKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUuZm9ybUVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSAnT29wcywgc29tZXRoaW5nIHdyb25nISc7XHJcbiAgICAgICAgdmFyIHNlcnZlckVycm9ycyA9IFtdO1xyXG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5fYm9keSkge1xyXG4gICAgICAgICAgICBzZXJ2ZXJFcnJvcnMgPSBKU09OLnBhcnNlKGVycm9yLl9ib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZXMgPSBbXTtcclxuICAgICAgICBpZiAoISFzZXJ2ZXJFcnJvcnMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzZXJ2ZXJFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXJFcnJvcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNlcnZlckVycm9yc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goc2VydmVyRXJyb3JzW2ldWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VzLmpvaW4oJywgJyk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBfMS5IdHRwLCBzdG9yYWdlX3NlcnZpY2VfMS5TdG9yYWdlU2VydmljZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIEh0dHBTZXJ2aWNlKTtcclxuICAgIHJldHVybiBIdHRwU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5IdHRwU2VydmljZSA9IEh0dHBTZXJ2aWNlO1xyXG47XHJcbjtcclxuO1xyXG47XHJcbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL2h0dHAuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciB3cml0ZXJfZWRpdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQnKTtcclxudmFyIHdyaXRlcl9hZGRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50Jyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZSgnQGFuZ3VsYXIvZm9ybXMnKTtcclxudmFyIGNvbW1vbl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tbW9uJyk7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xyXG52YXIgd3JpdGVyX2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50XCIpO1xyXG52YXIgd3JpdGVyc19jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMuY29tcG9uZW50XCIpO1xyXG52YXIgd3JpdGVyX2h0dHBfc2VydmljZV8xID0gcmVxdWlyZShcIi4vd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZVwiKTtcclxudmFyIHBhZ2luYXRvcl9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQtY29tcG9uZW50L3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50XCIpO1xyXG52YXIgV3JpdGVyc01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJzTW9kdWxlKCkge1xyXG4gICAgfVxyXG4gICAgV3JpdGVyc01vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgIGNvbW1vbl8xLkNvbW1vbk1vZHVsZSxcclxuICAgICAgICAgICAgICAgIHJvdXRlcl8xLlJvdXRlck1vZHVsZSxcclxuICAgICAgICAgICAgICAgIGZvcm1zXzEuRm9ybXNNb2R1bGVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICB3cml0ZXJzX2NvbXBvbmVudF8xLldyaXRlcnNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXJfbGlzdF9jb21wb25lbnRfMS5Xcml0ZXJMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgd3JpdGVyX2VkaXRfY29tcG9uZW50XzEuV3JpdGVyRWRpdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIHdyaXRlcl9hZGRfY29tcG9uZW50XzEuV3JpdGVyQWRkQ29tcG9uZW50XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgd3JpdGVyX2h0dHBfc2VydmljZV8xLldyaXRlckh0dHBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yX2NvbXBvbmVudF8xLlBhZ2VyU2VydmljZVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBXcml0ZXJzTW9kdWxlKTtcclxuICAgIHJldHVybiBXcml0ZXJzTW9kdWxlO1xyXG59KCkpO1xyXG5leHBvcnRzLldyaXRlcnNNb2R1bGUgPSBXcml0ZXJzTW9kdWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXJzLm1vZHVsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciB3cml0ZXJfZWRpdF9tb2RlbF8xID0gcmVxdWlyZSgnLi8uLi8uLi8uLi9tb2RlbC93cml0ZXItZWRpdC5tb2RlbCcpO1xyXG52YXIgd3JpdGVyX2h0dHBfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL3dyaXRlcnMtc2hhcmVkL3dyaXRlci1odHRwLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xyXG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIFdyaXRlckVkaXRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyRWRpdENvbXBvbmVudChfaHR0cFNlcnZpY2UsIHJvdXRlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZSA9IF9odHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgX3RoaXMuaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFdyaXRlckJ5SWQodGhpcy5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gd3JpdGVyX2VkaXRfbW9kZWxfMS5Xcml0ZXJFZGl0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wdXRDdXN0b21lcih0aGlzLmlkLCB0aGlzLm1vZGVsKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfZWRpdF9tb2RlbF8xLldyaXRlckVkaXRNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9zcGEvd3JpdGVycy9saXN0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckVkaXRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JpdGVyLWVkaXQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93cml0ZXItZWRpdC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3dyaXRlcl9odHRwX3NlcnZpY2VfMS5Xcml0ZXJIdHRwU2VydmljZSwgcm91dGVyXzEuQWN0aXZhdGVkUm91dGUsIHJvdXRlcl8xLlJvdXRlcl0pXHJcbiAgICBdLCBXcml0ZXJFZGl0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBXcml0ZXJFZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLldyaXRlckVkaXRDb21wb25lbnQgPSBXcml0ZXJFZGl0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItZWRpdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBXcml0ZXJFZGl0TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyRWRpdE1vZGVsKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGRhdGVPZkJpcnRoLCBiaW9ncmFwaHkpIHtcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcclxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5kYXRlT2ZCaXJ0aCA9IGRhdGVPZkJpcnRoO1xyXG4gICAgICAgIHRoaXMuYmlvZ3JhcGh5ID0gYmlvZ3JhcGh5O1xyXG4gICAgfVxyXG4gICAgV3JpdGVyRWRpdE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgV3JpdGVyRWRpdE1vZGVsKG9iamVjdFsnZmlyc3ROYW1lJ10sIG9iamVjdFsnbGFzdE5hbWUnXSwgb2JqZWN0WydkYXRlT2ZCaXJ0aCddLCBvYmplY3RbJ2Jpb2dyYXBoeSddKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJFZGl0TW9kZWwuZnJvbUpTT05BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gV3JpdGVyRWRpdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJFZGl0TW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyRWRpdE1vZGVsID0gV3JpdGVyRWRpdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItZWRpdC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWVkaXQubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiKTtcclxudmFyIGh0dHBfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvaHR0cC5zZXJ2aWNlXCIpO1xyXG5yZXF1aXJlKCdyeGpzL1J4Jyk7XHJcbnZhciBXcml0ZXJIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJIdHRwU2VydmljZShfaHR0cFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZSA9IF9odHRwU2VydmljZTtcclxuICAgIH1cclxuICAgIFdyaXRlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRXcml0ZXJCeUlkID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmdldChjb25maWdfMS5BcHBDb25maWcudXJscy53cml0ZXIgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRTb3J0aW5nQ3VzdG9tZXJzID0gZnVuY3Rpb24gKHNvcnRCeSwgb3JkZXJCeSwgcGFnZU51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5nZXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyXHJcbiAgICAgICAgICAgICsgXCI/c29ydE9yZGVyPVwiICsgc29ydEJ5ICsgXCImZGlyZWN0aW9uPVwiICsgb3JkZXJCeSArIFwiJnBhZ2U9XCIgKyBwYWdlTnVtYmVyKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRXcml0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5nZXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5wb3N0Q3VzdG9tZXIgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5wb3N0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlciwgZGF0YSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUucHV0Q3VzdG9tZXIgPSBmdW5jdGlvbiAoaWQsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UucHV0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlciArIFwiL1wiICsgaWQsIGRhdGEpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZUN1c3RvbWVyID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmRlbGV0ZShjb25maWdfMS5BcHBDb25maWcudXJscy53cml0ZXIgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlczsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtodHRwX3NlcnZpY2VfMS5IdHRwU2VydmljZV0pXHJcbiAgICBdLCBXcml0ZXJIdHRwU2VydmljZSk7XHJcbiAgICByZXR1cm4gV3JpdGVySHR0cFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVySHR0cFNlcnZpY2UgPSBXcml0ZXJIdHRwU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLWh0dHAuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtc2hhcmVkL3dyaXRlci1odHRwLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvUnhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gKHN1Ym1pdCk9XFxcIm9uU3VibWl0Rm9ybSgpXFxcIiAqbmdJZj1cXFwibW9kZWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImZpcnN0TmFtZVxcXCI+Rmlyc3QgbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXN0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgbmFtZTo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5sYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJkYXRlT2ZCaXJ0aFxcXCI+RGF0ZSBvZiBiaXJ0aDo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cXFwibW9kZWwuZGF0ZU9mQmlydGh8IGRhdGU6J3l5eXktTU0tZGQnXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcIm1vZGVsLmRhdGVPZkJpcnRoID0gJGV2ZW50XFxcIiBuYW1lPVxcXCJkYXRlT2ZCaXJ0aFxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJpb2dyYXBoeVxcXCI+QmlvZ3JhcGh5OjwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmJpb2dyYXBoeVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYmlvZ3JhcGh5XFxcIj48L3RleHRhcmVhPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dyaXRlci1lZGl0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIHdyaXRlcl9odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgd3JpdGVyX2FkZF9tb2RlbF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL21vZGVsL3dyaXRlci1hZGQubW9kZWxcIik7XHJcbnZhciBXcml0ZXJBZGRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyQWRkQ29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UgPSBfaHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJBZGRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgd3JpdGVyX2FkZF9tb2RlbF8xLldyaXRlckFkZE1vZGVsKG51bGwsIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckFkZENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdEN1c3RvbWVyKHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9zcGEvd3JpdGVycy9saXN0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckFkZENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXItYWRkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vd3JpdGVyLWFkZC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3dyaXRlcl9odHRwX3NlcnZpY2VfMS5Xcml0ZXJIdHRwU2VydmljZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIFdyaXRlckFkZENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gV3JpdGVyQWRkQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLldyaXRlckFkZENvbXBvbmVudCA9IFdyaXRlckFkZENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLWFkZC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBXcml0ZXJBZGRNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJBZGRNb2RlbChmaXJzdE5hbWUsIGxhc3ROYW1lLCBkYXRlT2ZCaXJ0aCwgYmlvZ3JhcGh5KSB7XHJcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuZGF0ZU9mQmlydGggPSBkYXRlT2ZCaXJ0aDtcclxuICAgICAgICB0aGlzLmJpb2dyYXBoeSA9IGJpb2dyYXBoeTtcclxuICAgIH1cclxuICAgIFdyaXRlckFkZE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgV3JpdGVyQWRkTW9kZWwob2JqZWN0WydmaXJzdE5hbWUnXSwgb2JqZWN0WydsYXN0TmFtZSddLCBvYmplY3RbJ2RhdGVPZkJpcnRoJ10sIG9iamVjdFsnYmlvZ3JhcGh5J10pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckFkZE1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIFdyaXRlckFkZE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJBZGRNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJBZGRNb2RlbCA9IFdyaXRlckFkZE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItYWRkLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9tb2RlbC93cml0ZXItYWRkLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gKHN1Ym1pdCk9XFxcIm9uU3VibWl0Rm9ybSgpXFxcIiA+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwuZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBuYW1lOjwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImRhdGVPZkJpcnRoXFxcIj5EYXRlIG9mIGJpcnRoOjwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmRhdGVPZkJpcnRoXFxcIiBuYW1lPVxcXCJkYXRlT2ZCaXJ0aFxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJpb2dyYXBoeVxcXCI+QmlvZ3JhcGh5OjwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmJpb2dyYXBoeVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYmlvZ3JhcGh5XFxcIj48L3RleHRhcmVhPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbjwvZm9ybT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dyaXRlci1hZGQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciB3cml0ZXJfbGlzdF9tb2RlbF8xID0gcmVxdWlyZSgnLi8uLi8uLi8uLi9tb2RlbC93cml0ZXItbGlzdC5tb2RlbCcpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgd3JpdGVyX2h0dHBfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL3dyaXRlcnMtc2hhcmVkL3dyaXRlci1odHRwLnNlcnZpY2VcIik7XHJcbnZhciBwYWdpbmF0b3JfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudFwiKTtcclxudmFyIFdyaXRlckxpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyTGlzdENvbXBvbmVudChfaHR0cFNlcnZpY2UsIHBhZ2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucGFnZXJTZXJ2aWNlID0gcGFnZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuaXNBZGRWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHt9O1xyXG4gICAgfVxyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRXcml0ZXJzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gd3JpdGVyX2xpc3RfbW9kZWxfMS5Xcml0ZXJMaXN0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICAgICAgX3RoaXMuX3NldFBhZ2UoMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5kZWxldGVDdXN0b21lcihpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7IF90aGlzLm5nT25Jbml0KCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoY29sdW1uTmFtZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZGlyZWN0aW9uID09ICdBU0MnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJERVNDXCI7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY29sdW1uID0gY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJBU0NcIjtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUuX3NldFBhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLm1vZGVsLnRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHRoaXMucGFnZXJTZXJ2aWNlLmdldFBhZ2VyKHRoaXMubW9kZWwucGFnZSwgdGhpcy5tb2RlbC5wYWdlU2l6ZSwgdGhpcy5tb2RlbC50b3RhbFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFNvcnRpbmdDdXN0b21lcnModGhpcy5tb2RlbC5jb2x1bW4sIHRoaXMubW9kZWwuZGlyZWN0aW9uLCB0aGlzLm1vZGVsLnBhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9saXN0X21vZGVsXzEuV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXItbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlci1saXN0LmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbd3JpdGVyX2h0dHBfc2VydmljZV8xLldyaXRlckh0dHBTZXJ2aWNlLCBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXSlcclxuICAgIF0sIFdyaXRlckxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTGlzdENvbXBvbmVudCA9IFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgd3JpdGVyX21vZGVsXzEgPSByZXF1aXJlKCcuL3dyaXRlci5tb2RlbCcpO1xyXG52YXIgV3JpdGVyTGlzdE1vZGVsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckxpc3RNb2RlbChmaWx0ZXIsIGNvbHVtbiwgZGlyZWN0aW9uLCBoYXNOZXh0UGFnZSwgaGFzUHJlUGFnZSwgcGFnZVNpemUsIHRvdGFsUGFnZSwgcGFnZSwgd3JpdGVyTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcclxuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmhhc05leHRQYWdlID0gaGFzTmV4dFBhZ2U7XHJcbiAgICAgICAgdGhpcy5oYXNQcmVQYWdlID0gaGFzUHJlUGFnZTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XHJcbiAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSB0b3RhbFBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLndyaXRlck1vZGVsID0gd3JpdGVyTW9kZWw7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJMaXN0TW9kZWwuZnJvbUpTT04gPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXcml0ZXJMaXN0TW9kZWwob2JqZWN0WydmaWx0ZXInXSwgb2JqZWN0WydvcmRlciddWydjb2x1bW4nXSwgb2JqZWN0WydvcmRlciddWydkaXJlY3Rpb24nXSwgb2JqZWN0WydoYXNOZXh0UGFnZSddLCBvYmplY3RbJ2hhc1ByZXZpb3VzUGFnZSddLCBvYmplY3RbJ3BhZ2VTaXplJ10sIG9iamVjdFsndG90YWxQYWdlcyddLCBvYmplY3RbJ3BhZ2UnXSwgd3JpdGVyX21vZGVsXzEuV3JpdGVyTW9kZWwuZnJvbUpTT05BcnJheShvYmplY3RbJ2l0ZW1zJ10pKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJMaXN0TW9kZWwuZnJvbUpTT05BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJMaXN0TW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTGlzdE1vZGVsID0gV3JpdGVyTGlzdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItbGlzdC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWxpc3QubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgV3JpdGVyTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyTW9kZWwoaWQsIGZ1bGxOYW1lLCBkYXRlT2ZCaXJ0aCwgYmlvZ3JhcGh5KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcclxuICAgICAgICB0aGlzLmRhdGVPZkJpcnRoID0gZGF0ZU9mQmlydGg7XHJcbiAgICAgICAgdGhpcy5iaW9ncmFwaHkgPSBiaW9ncmFwaHk7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJNb2RlbC5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFdyaXRlck1vZGVsKG9iamVjdFsnaWQnXSwgb2JqZWN0WydmdWxsTmFtZSddLCBvYmplY3RbJ2RhdGVPZkJpcnRoJ10sIG9iamVjdFsnYmlvZ3JhcGh5J10pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlck1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIFdyaXRlck1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJNb2RlbCA9IFdyaXRlck1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXIubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL3dyaXRlci5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBQYWdlclNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGFnZXJTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgUGFnZXJTZXJ2aWNlLnByb3RvdHlwZS5yYW5nZSA9IGZ1bmN0aW9uIChzdGFydCwgY291bnQpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuYXBwbHkoMCwgQXJyYXkoY291bnQpKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXggKyBzdGFydDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQYWdlclNlcnZpY2UucHJvdG90eXBlLmdldFBhZ2VyID0gZnVuY3Rpb24gKGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA9PT0gdm9pZCAwKSB7IGN1cnJlbnRQYWdlID0gMTsgfVxyXG4gICAgICAgIGlmIChwYWdlU2l6ZSA9PT0gdm9pZCAwKSB7IHBhZ2VTaXplID0gNTsgfVxyXG4gICAgICAgIHZhciBzdGFydFBhZ2UgPSAxLCBlbmRQYWdlO1xyXG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICAgICAgICB2YXIgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgcGFnZVNpemU7XHJcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5yYW5nZShzdGFydFBhZ2UsIHRvdGFsUGFnZXMpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxyXG4gICAgICAgICAgICBzdGFydFBhZ2U6IHN0YXJ0UGFnZSxcclxuICAgICAgICAgICAgZW5kUGFnZTogZW5kUGFnZSxcclxuICAgICAgICAgICAgc3RhcnRJbmRleDogc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgZW5kSW5kZXg6IGVuZEluZGV4LFxyXG4gICAgICAgICAgICBwYWdlczogcGFnZXNcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYWdlclNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUGFnZXJTZXJ2aWNlID0gUGFnZXJTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdpbmF0b3IuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGJyPlxcclxcbjxwPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi8nLCAnYWRkJ11cXFwiPkFkZCB3cml0ZXI8L2J1dHRvbj5cXHJcXG48L3A+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY3VzdG9tZXItbGlzdC1jb250YWluZXJcXFwiPlxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkIGNsYXNzPVxcXCJ0YWJsZS1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZS1jZWxsIHRhYmxlLW5hbWVcXFwiIChjbGljayk9XFxcInNvcnQoJ2Z1bGxOYW1lJyk7XFxcIj5GdWxsIE5hbWU8L3RoPlxcclxcbiAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZS1jZWxsIHRhYmxlLWRhdGVcXFwiIChjbGljayk9XFxcInNvcnQoJ2RhdGUnKTtcXFwiPkJpcnRoZGF0ZTwvdGg+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtc3RhdHVzXFxcIj5CaW9ncmFwaHk8L3RoPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keSBjbGFzcz1cXFwidGFibGUtcm93XFxcIiAqbmdGb3I9XFxcImxldCBjdXN0b21lciBvZiBtb2RlbD8ud3JpdGVyTW9kZWxcXFwiPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7Y3VzdG9tZXI/LmZ1bGxOYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3tjdXN0b21lcj8uZGF0ZU9mQmlydGggfCBkYXRlOiAnZGQvTU0veXl5eSd9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyPy5iaW9ncmFwaHl9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi8nLCBjdXN0b21lci5pZCwgJ2VkaXQnXVxcXCI+RWRpdDwvYT58XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJkZWxldGUoY3VzdG9tZXIuaWQpXFxcIj5EZWxldGU8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+ICAgIFxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OmlubGluZS1ibG9jaztcXFwiPlxcclxcbiAgICAgICAgPHVsICpuZ0lmPVxcXCJwYWdlcj8ucGFnZXMgJiYgcGFnZXI/LnBhZ2VzPy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXI/LmN1cnJlbnRQYWdlID09PSAxfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKDEpXFxcIj5GaXJzdDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IDF9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UocGFnZXI/LmN1cnJlbnRQYWdlIC0gMSlcXFwiPlByZXZpb3VzPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IHBhZ2Ugb2YgcGFnZXIucGFnZXNcXFwiIFtuZ0NsYXNzXT1cXFwie2FjdGl2ZTpwYWdlcj8uY3VycmVudFBhZ2UgPT09IHBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UocGFnZSlcXFwiPnt7cGFnZX19PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyLmN1cnJlbnRQYWdlID09PSBtb2RlbD8udG90YWxQYWdlfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKHBhZ2VyLmN1cnJlbnRQYWdlICsgMSlcXFwiPk5leHQ8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXI/LmN1cnJlbnRQYWdlID09PSBtb2RlbD8udG90YWxQYWdlfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKG1vZGVsPy50b3RhbFBhZ2UpXFxcIj5MYXN0PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd3JpdGVyLWxpc3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGgge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYmxlLXN0YXR1cyB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgV3JpdGVyc0NvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJzQ29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgV3JpdGVyc0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyc0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXJzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vd3JpdGVycy5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBXcml0ZXJzQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBXcml0ZXJzQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLldyaXRlcnNDb21wb25lbnQgPSBXcml0ZXJzQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXJzLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd3JpdGVycy5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgd3JpdGVyX2FkZF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQnKTtcclxudmFyIHdyaXRlcl9lZGl0X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudCcpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIHdyaXRlcl9saXN0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudFwiKTtcclxudmFyIHdyaXRlcnNfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi93cml0ZXJzLmNvbXBvbmVudFwiKTtcclxuZXhwb3J0cy53cml0ZXJzUm91dGVzID0gW3tcclxuICAgICAgICBwYXRoOiAnc3BhL3dyaXRlcnMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogd3JpdGVyc19jb21wb25lbnRfMS5Xcml0ZXJzQ29tcG9uZW50LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdsaXN0JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogd3JpdGVyX2xpc3RfY29tcG9uZW50XzEuV3JpdGVyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICc6aWQvZWRpdCcsIGNvbXBvbmVudDogd3JpdGVyX2VkaXRfY29tcG9uZW50XzEuV3JpdGVyRWRpdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhZGQnLCBjb21wb25lbnQ6IHdyaXRlcl9hZGRfY29tcG9uZW50XzEuV3JpdGVyQWRkQ29tcG9uZW50IH1cclxuICAgICAgICBdXHJcbiAgICB9XTtcclxuZXhwb3J0cy5hcHBSb3V0aW5nUHJvdmlkZXJzID0gW107XHJcbmV4cG9ydHMud3JpdGVyc1JvdXRpbmcgPSByb3V0ZXJfMS5Sb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoZXhwb3J0cy53cml0ZXJzUm91dGVzKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVycy5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5yb3V0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBBcHBDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwQ29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgQXBwQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEFwcENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gQXBwQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkFwcENvbXBvbmVudCA9IEFwcENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBOYXZNZW51Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5hdk1lbnVDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBOYXZNZW51Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBOYXZNZW51Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBOYXZNZW51Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLk5hdk1lbnVDb21wb25lbnQgPSBOYXZNZW51Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1uYXZtZW51LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnIFtyb3V0ZXJMaW5rXT1cXFwiWycvc3BhJ11cXFwiPldyaXRlcnMgSW5mbyBMaXN0PC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zcGEvd3JpdGVycyddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IFdyaXRlcnNcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgSG9tZUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIb21lQ29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgSG9tZUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2hvbWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEhvbWVDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEhvbWVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSG9tZUNvbXBvbmVudCA9IEhvbWVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvbWUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+SG9tZSBtb2RlbDwvaDE+XFxyXFxuPGgyPldlbGNvbWUgdG8gV3JpdGVyYHMgbGlzdCBhcHBsaWNhdGlvbjwvaDI+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=