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
	var books_module_1 = __webpack_require__(6);
	var books_routing_1 = __webpack_require__(51);
	var storage_service_1 = __webpack_require__(20);
	var http_service_1 = __webpack_require__(18);
	var writers_module_1 = __webpack_require__(52);
	var writers_routing_1 = __webpack_require__(73);
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(23);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(74);
	var navmenu_component_1 = __webpack_require__(78);
	var home_component_1 = __webpack_require__(82);
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
	                books_module_1.BooksModule,
	                router_1.RouterModule.forRoot([
	                    { path: '', redirectTo: 'spa', pathMatch: 'full' },
	                    { path: 'spa', component: home_component_1.HomeComponent }
	                ].concat(writers_routing_1.writersRoutes, books_routing_1.booksRoutes, [
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
	var autocomplete_component_1 = __webpack_require__(7);
	var book_http_service_1 = __webpack_require__(13);
	var book_add_component_1 = __webpack_require__(26);
	var book_edit_component_1 = __webpack_require__(31);
	var book_list_component_1 = __webpack_require__(37);
	var book_component_1 = __webpack_require__(45);
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(49);
	var common_1 = __webpack_require__(50);
	var router_1 = __webpack_require__(23);
	var paginator_component_1 = __webpack_require__(41);
	var BooksModule = (function () {
	    function BooksModule() {
	    }
	    BooksModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                router_1.RouterModule,
	                forms_1.FormsModule
	            ],
	            declarations: [
	                book_component_1.BooksComponent,
	                book_list_component_1.BookListComponent,
	                book_edit_component_1.BookEditComponent,
	                book_add_component_1.BookAddComponent,
	                autocomplete_component_1.AutocompleteComponent
	            ],
	            providers: [
	                book_http_service_1.BookHttpService,
	                paginator_component_1.PagerService
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BooksModule);
	    return BooksModule;
	}());
	exports.BooksModule = BooksModule;
	//# sourceMappingURL=books.module.js.map

/***/ }),
/* 7 */
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
	var select_list_item_model_1 = __webpack_require__(8);
	var core_1 = __webpack_require__(3);
	var AutocompleteComponent = (function () {
	    function AutocompleteComponent(myElement) {
	        this.Ids = [];
	        this.writersIdsChanged = new core_1.EventEmitter();
	        this.writerIds = [];
	        this.query = '';
	        this.filteredList = [];
	        this.selected = [];
	        this.elementRef = myElement;
	        this.selectedIdx = -1;
	    }
	    AutocompleteComponent.prototype.ngOnInit = function () {
	        if (this.Ids !== null && this.items !== null) {
	            for (var _i = 0; _i < this.Ids.length; _i++) {
	                for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
	                    var w = _a[_i];
	                    if (w.value == this.Ids[_i]) {
	                        this.selected.push(new select_list_item_model_1.SelectListItem(w.value, w.text));
	                    }
	                }
	            }
	        }
	    };
	    AutocompleteComponent.prototype.filter = function (event) {
	        if (this.query != "") {
	            this.filteredList = this.items.filter(function (el) {
	                return el.text.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
	            }.bind(this));
	        }
	    };
	    AutocompleteComponent.prototype.checker = function (item) {
	        for (var _i = 0, _a = this.selected; _i < _a.length; _i++) {
	            var e = _a[_i];
	            if (e.value == item.value)
	                return true;
	        }
	    };
	    AutocompleteComponent.prototype.select = function (item) {
	        this.selected.push(item);
	        this.query = '';
	        this.writerIds = [];
	        for (var _i = 0, _a = this.selected; _i < _a.length; _i++) {
	            var w = _a[_i];
	            this.writerIds.push(w.value);
	        }
	        this.writersIdsChanged.emit(this.writerIds);
	    };
	    AutocompleteComponent.prototype.remove = function (item) {
	        this.selected.splice(this.selected.indexOf(item), 1);
	        this.filteredList = this.items;
	        this.writerIds = [];
	        for (var _i = 0, _a = this.selected; _i < _a.length; _i++) {
	            var w = _a[_i];
	            this.writerIds.push(w.value);
	        }
	        this.writersIdsChanged.emit(this.writerIds);
	    };
	    AutocompleteComponent.prototype.handleBlur = function () {
	        if (this.selectedIdx > -1) {
	            this.query = this.filteredList[this.selectedIdx];
	        }
	        this.selectedIdx = -1;
	    };
	    AutocompleteComponent.prototype.handleClick = function (event) {
	        this.filteredList = this.items;
	        var clickedComponent = event.target;
	        var inside = false;
	        do {
	            if (clickedComponent === this.elementRef.nativeElement) {
	                inside = true;
	            }
	            clickedComponent = clickedComponent.parentNode;
	        } while (clickedComponent);
	        if (!inside) {
	            this.filteredList = [];
	        }
	        this.selectedIdx = -1;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], AutocompleteComponent.prototype, "items", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], AutocompleteComponent.prototype, "Ids", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], AutocompleteComponent.prototype, "writersIdsChanged", void 0);
	    AutocompleteComponent = __decorate([
	        core_1.Component({
	            selector: 'app-autocomplete',
	            host: {
	                '(document:click)': 'handleClick($event)',
	            },
	            template: __webpack_require__(9),
	            styles: [__webpack_require__(10)]
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], AutocompleteComponent);
	    return AutocompleteComponent;
	}());
	exports.AutocompleteComponent = AutocompleteComponent;
	//# sourceMappingURL=autocomplete.component.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	var SelectListItem = (function () {
	    function SelectListItem(value, text) {
	        this.value = value;
	        this.text = text;
	    }
	    SelectListItem.fromJSON = function (object) {
	        return new SelectListItem(+object['value'], object['text']);
	    };
	    SelectListItem.fromJSONArray = function (array) {
	        return array.map(function (obj) { return SelectListItem.fromJSON(obj); });
	    };
	    return SelectListItem;
	}());
	exports.SelectListItem = SelectListItem;
	//# sourceMappingURL=select-list-item.model.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"input-field col s12\">\r\n    <input id=\"country\" type=\"text\" class=\"validate filter-input\" [(ngModel)]=query (keyup)=filter()>\r\n</div>\r\n<div class=\"suggestions\" *ngIf=\"filteredList?.length > 0\">\r\n    <ul  *ngFor=\"let item of filteredList\">\r\n        <li>\r\n            <a [ngClass] =\"{'disabled': checker(item)}\" (click)=\"select(item)\">{{item.text}}</a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div *ngFor=\"let item of selected\">\r\n    <div class=\"selected\">\r\n        <span>{{item.text}}</span>\r\n        <a (click)=\"remove(item)\">x</a>\r\n    </div>\r\n</div>"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(11);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".suggestions{\r\n\tborder:solid 1px #f1f1f1;\r\n\tposition:absolute;\r\n\twidth:600px;\r\n\tbackground: white;\r\n    margin: -25px 0 0px 200px;\r\n}\r\n\r\n.suggestions ul{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n\r\n.container{\r\n\twidth:600px;\r\n\tmargin-left:10px;\r\n\tmargin-top:10px;\r\n}\r\n.suggestions ul li{\r\n\tlist-style: none;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n\r\n.suggestions ul li a{\r\n\tpadding:5px;\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n\tcolor:#7E7E7E;\r\n}\r\n\r\n.suggestions ul li a:hover{\r\n\tbackground-color: #f1f1f1;\r\n}\r\n.selected a{\r\n    cursor: pointer;\r\n}\r\nul a{\r\n    cursor: pointer;\r\n}\r\n.disabled{\r\n    pointer-events: none;\r\n    color: #e0e0e0!important;\r\n}", ""]);
	
	// exports


/***/ }),
/* 12 */
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
/* 13 */
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
	var config_1 = __webpack_require__(14);
	var http_service_1 = __webpack_require__(18);
	__webpack_require__(25);
	var BookHttpService = (function () {
	    function BookHttpService(_httpService) {
	        this._httpService = _httpService;
	    }
	    BookHttpService.prototype.getBookById = function (id) {
	        return this._httpService.get(config_1.AppConfig.urls.books + "/" + id)
	            .map(function (res) { return res.json(); });
	    };
	    BookHttpService.prototype.getSortingBooks = function (sortBy, orderBy, pageNumber) {
	        return this._httpService.get(config_1.AppConfig.urls.getAllBook
	            + "?sortOrder=" + sortBy + "&direction=" + orderBy + "&page=" + pageNumber)
	            .map(function (res) { return res.json(); });
	    };
	    BookHttpService.prototype.getBooks = function () {
	        return this._httpService.get(config_1.AppConfig.urls.createBook)
	            .map(function (res) { return res.json(); });
	    };
	    BookHttpService.prototype.postCustomer = function (data) {
	        return this._httpService.post(config_1.AppConfig.urls.books, data)
	            .map(function (res) { return res; });
	    };
	    BookHttpService.prototype.putCustomer = function (id, data) {
	        return this._httpService.put(config_1.AppConfig.urls.books + "/" + id, data)
	            .map(function (res) { return res; });
	    };
	    BookHttpService.prototype.deleteCustomer = function (id) {
	        return this._httpService.delete(config_1.AppConfig.urls.books + "/" + id)
	            .map(function (res) { return res; });
	    };
	    BookHttpService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_service_1.HttpService])
	    ], BookHttpService);
	    return BookHttpService;
	}());
	exports.BookHttpService = BookHttpService;
	//# sourceMappingURL=book-http.service.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var api_base_url_1 = __webpack_require__(15);
	var api_request_urls_1 = __webpack_require__(17);
	var api_servers_enum_1 = __webpack_require__(16);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var api_servers_enum_1 = __webpack_require__(16);
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	var ApiRequestUrls = (function () {
	    function ApiRequestUrls() {
	    }
	    ApiRequestUrls.urls = {
	        'writer': 'writer',
	        'books': 'books',
	        'createBook': 'books/create',
	        'getAllBook': 'books/get'
	    };
	    return ApiRequestUrls;
	}());
	exports.ApiRequestUrls = ApiRequestUrls;
	//# sourceMappingURL=api-request-urls.js.map

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
	var Observable_1 = __webpack_require__(19);
	var config_1 = __webpack_require__(14);
	var storage_service_1 = __webpack_require__(20);
	var core_1 = __webpack_require__(3);
	__webpack_require__(21);
	__webpack_require__(22);
	var router_1 = __webpack_require__(23);
	var http_1 = __webpack_require__(24);
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
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/Observable");

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
	var config_1 = __webpack_require__(14);
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
/* 21 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/add/operator/catch");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = require("@angular/router");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = require("@angular/http");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ }),
/* 26 */
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
	var router_1 = __webpack_require__(23);
	var core_1 = __webpack_require__(3);
	var book_http_service_1 = __webpack_require__(13);
	var book_add_model_1 = __webpack_require__(27);
	var BookAddComponent = (function () {
	    function BookAddComponent(_httpService, router) {
	        this._httpService = _httpService;
	        this.router = router;
	    }
	    BookAddComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.model = new book_add_model_1.BookAddModel(null, null, null, null);
	        this._httpService.getBooks()
	            .subscribe(function (res) {
	            _this.model = book_add_model_1.BookAddModel.fromJSON(res);
	        });
	    };
	    BookAddComponent.prototype.getIds = function (val) {
	        this.model.writerIds = [];
	        for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
	            var a = val_1[_i];
	            this.model.writerIds.push(a);
	        }
	    };
	    BookAddComponent.prototype.checker = function () {
	        if (this.model.writerIds != null)
	            return this.model.writerIds.length > 0;
	        else
	            return false;
	    };
	    BookAddComponent.prototype.onSubmitForm = function () {
	        var _this = this;
	        if (this.model.writerIds != null) {
	            if (this.model.writerIds.length > 0) {
	                this._httpService.postCustomer(this.model)
	                    .subscribe(function (res) {
	                    _this.router.navigateByUrl("/spa/books/list");
	                });
	            }
	            else {
	                alert('Choose writer`s');
	            }
	        }
	        else {
	            alert('Choose writer`s');
	        }
	    };
	    BookAddComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(28),
	            styles: [__webpack_require__(29)]
	        }), 
	        __metadata('design:paramtypes', [book_http_service_1.BookHttpService, router_1.Router])
	    ], BookAddComponent);
	    return BookAddComponent;
	}());
	exports.BookAddComponent = BookAddComponent;
	//# sourceMappingURL=book-add.component.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var select_list_item_model_1 = __webpack_require__(8);
	var BookAddModel = (function () {
	    function BookAddModel(caption, publishedDate, writerIds, writers) {
	        if (writerIds === void 0) { writerIds = []; }
	        this.caption = caption;
	        this.publishedDate = publishedDate;
	        this.writerIds = writerIds;
	        this.writers = writers;
	    }
	    BookAddModel.fromJSON = function (object) {
	        return new BookAddModel(object['caption'], object['publishDate'], object['writerIds'], select_list_item_model_1.SelectListItem.fromJSONArray(object['writers']));
	    };
	    BookAddModel.fromJSONArray = function (array) {
	        return array.map(function (obj) { return BookAddModel.fromJSON(obj); });
	    };
	    return BookAddModel;
	}());
	exports.BookAddModel = BookAddModel;
	//# sourceMappingURL=book-add.model.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = "<form (submit)=\"onSubmitForm()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">Caption:</label>\r\n        <input [(ngModel)]=\"model.caption\" name=\"caption\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Publish date:</label>\r\n        <input [(ngModel)]=\"model.publishedDate\" name=\"publishedDate\" type=\"date\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"biography\">Writers:</label>\r\n        <app-autocomplete (writersIdsChanged)=\"getIds($event)\" [Ids] = \"model.writerIds\" [items]=\"model.writers\" required></app-autocomplete>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n</form>"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(30);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 31 */
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
	var book_edit_model_1 = __webpack_require__(32);
	var book_http_service_1 = __webpack_require__(13);
	var router_1 = __webpack_require__(23);
	__webpack_require__(33);
	var core_1 = __webpack_require__(3);
	var BookEditComponent = (function () {
	    function BookEditComponent(_httpService, route, router) {
	        this._httpService = _httpService;
	        this.route = route;
	        this.router = router;
	    }
	    BookEditComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this.route.params.subscribe(function (params) {
	            _this.id = +params['id'];
	        });
	        this._httpService.getBookById(this.id)
	            .subscribe(function (res) {
	            _this.model = book_edit_model_1.BookEditModel.fromJSON(res);
	        });
	    };
	    BookEditComponent.prototype.getIds = function (val) {
	        this.model.writerIds = [];
	        for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
	            var a = val_1[_i];
	            this.model.writerIds.push(a);
	        }
	    };
	    BookEditComponent.prototype.onSubmitForm = function () {
	        var _this = this;
	        if (this.model.writerIds != null) {
	            if (this.model.writerIds.length > 0) {
	                this._httpService.putCustomer(this.id, this.model)
	                    .subscribe(function (res) {
	                    _this.router.navigateByUrl("/spa/books/list");
	                });
	            }
	            else {
	                alert('Choose writer`s');
	            }
	        }
	        else {
	            alert('Choose writer`s');
	        }
	    };
	    BookEditComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(34),
	            styles: [__webpack_require__(35)]
	        }), 
	        __metadata('design:paramtypes', [book_http_service_1.BookHttpService, router_1.ActivatedRoute, router_1.Router])
	    ], BookEditComponent);
	    return BookEditComponent;
	}());
	exports.BookEditComponent = BookEditComponent;
	//# sourceMappingURL=book-edit.component.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var select_list_item_model_1 = __webpack_require__(8);
	var BookEditModel = (function () {
	    function BookEditModel(id, caption, publishedDate, writerIds, writerModel) {
	        this.id = id;
	        this.caption = caption;
	        this.publishedDate = publishedDate;
	        this.writerIds = writerIds;
	        this.writerModel = writerModel;
	    }
	    BookEditModel.fromJSON = function (object) {
	        return new BookEditModel(object['id'], object['caption'], object['publishedDate'], object['writerIds'], select_list_item_model_1.SelectListItem.fromJSONArray(object['writers']));
	    };
	    BookEditModel.fromJSONArray = function (array) {
	        return array.map(function (obj) { return BookEditModel.fromJSON(obj); });
	    };
	    return BookEditModel;
	}());
	exports.BookEditModel = BookEditModel;
	//# sourceMappingURL=book-edit.model.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = require("rxjs/add/operator/switchMap");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = "\r\n<form (submit)=\"onSubmitForm()\" *ngIf=\"model\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">Caption:</label>\r\n        <input [(ngModel)]=\"model.caption\" name=\"caption\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"publishedDate\">Publish date:</label>\r\n        <input [ngModel]=\"model.publishedDate| date:'yyyy-MM-dd'\" (ngModelChange)=\"model.publishedDate = $event\" name=\"publishedDate\" type=\"date\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"writers\">Writers:</label>\r\n        <app-autocomplete (writersIdsChanged)=\"getIds($event)\" [Ids] = \"model.writerIds\" [items]=\"model.writerModel\"></app-autocomplete>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n</form>"

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(36);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 37 */
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
	var book_http_service_1 = __webpack_require__(13);
	var book_list_model_1 = __webpack_require__(38);
	var core_1 = __webpack_require__(3);
	var paginator_component_1 = __webpack_require__(41);
	var BookListComponent = (function () {
	    function BookListComponent(_httpService, pagerService) {
	        this._httpService = _httpService;
	        this.pagerService = pagerService;
	        this.isAddVisible = false;
	        this.isEditVisible = false;
	        this.pager = {};
	    }
	    BookListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._httpService.getSortingBooks('caption', 'ASC', 1)
	            .subscribe(function (res) {
	            _this.model = book_list_model_1.BookListModel.fromJSON(res);
	            _this._setPage(1);
	        });
	    };
	    BookListComponent.prototype.delete = function (id) {
	        var _this = this;
	        if (confirm("Are you shure ?")) {
	            this._httpService.deleteCustomer(id)
	                .subscribe(function (res) { _this.ngOnInit(); });
	        }
	    };
	    BookListComponent.prototype.sort = function (columnName) {
	        var _this = this;
	        if (this.model.direction == 'ASC') {
	            this.model.direction = "DESC";
	            this.model.column = columnName;
	            this._httpService.getSortingBooks(this.model.column, this.model.direction, this.model.page)
	                .subscribe(function (res) {
	                _this.model = book_list_model_1.BookListModel.fromJSON(res);
	            });
	        }
	        else {
	            this.model.direction = "ASC";
	            this._httpService.getSortingBooks(this.model.column, this.model.direction, this.model.page)
	                .subscribe(function (res) {
	                _this.model = book_list_model_1.BookListModel.fromJSON(res);
	            });
	        }
	    };
	    BookListComponent.prototype._setPage = function (page) {
	        var _this = this;
	        if (page < 1 || page > this.model.totalPage) {
	            return;
	        }
	        this.model.page = page;
	        this.pager = this.pagerService.getPager(this.model.page, this.model.pageSize, this.model.totalPage);
	        this._httpService.getSortingBooks(this.model.column, this.model.direction, this.model.page)
	            .subscribe(function (res) {
	            _this.model = book_list_model_1.BookListModel.fromJSON(res);
	        });
	    };
	    BookListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(42),
	            styles: [__webpack_require__(43)]
	        }), 
	        __metadata('design:paramtypes', [book_http_service_1.BookHttpService, paginator_component_1.PagerService])
	    ], BookListComponent);
	    return BookListComponent;
	}());
	exports.BookListComponent = BookListComponent;
	//# sourceMappingURL=book-list.component.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var book_model_1 = __webpack_require__(39);
	var BookListModel = (function () {
	    function BookListModel(filter, column, direction, hasNextPage, hasPrePage, pageSize, totalPage, page, bookModel) {
	        this.filter = filter;
	        this.column = column;
	        this.direction = direction;
	        this.hasNextPage = hasNextPage;
	        this.hasPrePage = hasPrePage;
	        this.pageSize = pageSize;
	        this.totalPage = totalPage;
	        this.page = page;
	        this.bookModel = bookModel;
	    }
	    BookListModel.fromJSON = function (object) {
	        return new BookListModel(object['filter'], object['order']['column'], object['order']['direction'], object['hasNextPage'], object['hasPreviousPage'], object['pageSize'], object['totalPages'], object['page'], book_model_1.BookModel.fromJSONArray(object['items']));
	    };
	    BookListModel.fromJSONArray = function (array) {
	        return array.map(function (obj) { return BookListModel.fromJSON(obj); });
	    };
	    return BookListModel;
	}());
	exports.BookListModel = BookListModel;
	//# sourceMappingURL=book-list.model.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var writer_model_1 = __webpack_require__(40);
	var BookModel = (function () {
	    function BookModel(id, caption, publishDate, writerModel) {
	        this.id = id;
	        this.caption = caption;
	        this.publishDate = publishDate;
	        this.writerModel = writerModel;
	    }
	    BookModel.fromJSON = function (object) {
	        return new BookModel(object['id'], object['caption'], object['publishedDate'], writer_model_1.WriterModel.fromJSONArray(object['writers']));
	    };
	    BookModel.fromJSONArray = function (array) {
	        return array.map(function (obj) { return BookModel.fromJSON(obj); });
	    };
	    return BookModel;
	}());
	exports.BookModel = BookModel;
	//# sourceMappingURL=book.model.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var book_model_1 = __webpack_require__(39);
	var WriterModel = (function () {
	    function WriterModel(id, fullName, dateOfBirth, biography, Book) {
	        this.id = id;
	        this.fullName = fullName;
	        this.dateOfBirth = dateOfBirth;
	        this.biography = biography;
	        this.Book = Book;
	    }
	    WriterModel.fromJSON = function (object) {
	        return new WriterModel(object['id'], object['fullName'], object['dateOfBirth'], object['biography'], book_model_1.BookModel.fromJSONArray(object['books']));
	    };
	    WriterModel.fromJSONArray = function (array) {
	        return array.map(function (obj) { return WriterModel.fromJSON(obj); });
	    };
	    return WriterModel;
	}());
	exports.WriterModel = WriterModel;
	//# sourceMappingURL=writer.model.js.map

/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports) {

	module.exports = "<br>\r\n<p>\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['../', 'add']\">Add book</button>\r\n</p>\r\n<div class=\"customer-list-container\">\r\n    <table class=\"table table-responsive\">\r\n        <thead class=\"table-header\">\r\n        <th class=\"table-cell table-name\" (click)=\"sort('caption');\">Caption</th>\r\n        <th class=\"table-cell table-date\" (click)=\"sort('date');\">Publish Date</th>\r\n        <th class=\"table-cell table-status\">Authors</th>\r\n        </thead>\r\n        <tbody class=\"table-row\" *ngFor=\"let customer of model?.bookModel\">\r\n            <tr>\r\n                <td>{{customer?.caption}}</td>\r\n                <td>{{customer?.publishDate | date: 'dd/MM/yyyy'}}</td>\r\n                <td> <span *ngFor=\"let author of customer?.writerModel\">{{author.fullName}}</span> </td>\r\n                <td>\r\n                    <a [routerLink]=\"['../', customer.id, 'edit']\">Edit</a>|\r\n                    <a (click)=\"delete(customer.id)\">Delete</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>    \r\n    <div style=\"display:inline-block;\">\r\n        <ul *ngIf=\"pager?.pages && pager?.pages?.length\" class=\"pagination\">\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\r\n                <a (click)=\"_setPage(1)\">First</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\r\n                <a (click)=\"_setPage(pager?.currentPage - 1)\">Previous</a>\r\n            </li>\r\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager?.currentPage === page}\">\r\n                <a (click)=\"_setPage(page)\">{{page}}</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === model?.totalPage}\">\r\n                <a (click)=\"_setPage(pager.currentPage + 1)\">Next</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === model?.totalPage}\">\r\n                <a (click)=\"_setPage(model?.totalPage)\">Last</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

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

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "a {\r\n    cursor: pointer;\r\n}\r\n\r\nth {\r\n    cursor: pointer;\r\n}\r\n\r\ntd {\r\n    max-width: 200px;\r\n    min-width: 100px;\r\n    word-break: break-word;\r\n}\r\n\r\n\r\n.table-status {\r\n    cursor: default;\r\n}\r\n", ""]);
	
	// exports


/***/ }),
/* 45 */
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
	var BooksComponent = (function () {
	    function BooksComponent() {
	    }
	    BooksComponent.prototype.ngOnInit = function () {
	    };
	    BooksComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(46),
	            styles: [__webpack_require__(47)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BooksComponent);
	    return BooksComponent;
	}());
	exports.BooksComponent = BooksComponent;
	//# sourceMappingURL=book.component.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = "<router-outlet></router-outlet>\n"

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(48);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = require("@angular/forms");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = require("@angular/common");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var book_add_component_1 = __webpack_require__(26);
	var book_list_component_1 = __webpack_require__(37);
	var book_edit_component_1 = __webpack_require__(31);
	var book_component_1 = __webpack_require__(45);
	var router_1 = __webpack_require__(23);
	exports.booksRoutes = [{
	        path: 'spa/books',
	        component: book_component_1.BooksComponent,
	        children: [
	            { path: '', redirectTo: 'list', pathMatch: 'full' },
	            { path: 'list', component: book_list_component_1.BookListComponent },
	            { path: ':id/edit', component: book_edit_component_1.BookEditComponent },
	            { path: 'add', component: book_add_component_1.BookAddComponent }
	        ]
	    }];
	exports.appRoutingProviders = [];
	exports.booksRouting = router_1.RouterModule.forChild(exports.booksRoutes);
	//# sourceMappingURL=books.routing.js.map

/***/ }),
/* 52 */
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
	var writer_edit_component_1 = __webpack_require__(53);
	var writer_add_component_1 = __webpack_require__(59);
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(49);
	var common_1 = __webpack_require__(50);
	var router_1 = __webpack_require__(23);
	var writer_list_component_1 = __webpack_require__(64);
	var writers_component_1 = __webpack_require__(69);
	var writer_http_service_1 = __webpack_require__(55);
	var paginator_component_1 = __webpack_require__(41);
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
/* 53 */
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
	var writer_edit_model_1 = __webpack_require__(54);
	var writer_http_service_1 = __webpack_require__(55);
	var router_1 = __webpack_require__(23);
	__webpack_require__(33);
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
	            template: __webpack_require__(56),
	            styles: [__webpack_require__(57)]
	        }), 
	        __metadata('design:paramtypes', [writer_http_service_1.WriterHttpService, router_1.ActivatedRoute, router_1.Router])
	    ], WriterEditComponent);
	    return WriterEditComponent;
	}());
	exports.WriterEditComponent = WriterEditComponent;
	//# sourceMappingURL=writer-edit.component.js.map

/***/ }),
/* 54 */
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
/* 55 */
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
	var config_1 = __webpack_require__(14);
	var http_service_1 = __webpack_require__(18);
	__webpack_require__(25);
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
/* 56 */
/***/ (function(module, exports) {

	module.exports = "<form (submit)=\"onSubmitForm()\" *ngIf=\"model\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First name</label>\r\n        <input [(ngModel)]=\"model.firstName\" name=\"firstName\" type=\"test\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last name:</label>\r\n        <input [(ngModel)]=\"model.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Date of birth:</label>\r\n        <input [ngModel]=\"model.dateOfBirth| date:'yyyy-MM-dd'\" (ngModelChange)=\"model.dateOfBirth = $event\" name=\"dateOfBirth\" type=\"date\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"biography\">Biography:</label>\r\n        <textarea [(ngModel)]=\"model.biography\" type=\"text\" class=\"form-control\" name=\"biography\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n</form>"

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(58);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 59 */
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
	var router_1 = __webpack_require__(23);
	var core_1 = __webpack_require__(3);
	var writer_http_service_1 = __webpack_require__(55);
	var writer_add_model_1 = __webpack_require__(60);
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
	            template: __webpack_require__(61),
	            styles: [__webpack_require__(62)]
	        }), 
	        __metadata('design:paramtypes', [writer_http_service_1.WriterHttpService, router_1.Router])
	    ], WriterAddComponent);
	    return WriterAddComponent;
	}());
	exports.WriterAddComponent = WriterAddComponent;
	//# sourceMappingURL=writer-add.component.js.map

/***/ }),
/* 60 */
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
/* 61 */
/***/ (function(module, exports) {

	module.exports = "<form (submit)=\"onSubmitForm()\" >\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First name</label>\r\n        <input [(ngModel)]=\"model.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last name:</label>\r\n        <input [(ngModel)]=\"model.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Date of birth:</label>\r\n        <input [(ngModel)]=\"model.dateOfBirth\" name=\"dateOfBirth\" type=\"date\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"biography\">Biography:</label>\r\n        <textarea [(ngModel)]=\"model.biography\" type=\"text\" class=\"form-control\" name=\"biography\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n</form>\r\n"

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(63);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 64 */
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
	var writer_list_model_1 = __webpack_require__(65);
	var core_1 = __webpack_require__(3);
	var writer_http_service_1 = __webpack_require__(55);
	var paginator_component_1 = __webpack_require__(41);
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
	        if (confirm("Are you shure ?")) {
	            this._httpService.deleteCustomer(id)
	                .subscribe(function (res) { _this.ngOnInit(); });
	        }
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
	            template: __webpack_require__(66),
	            styles: [__webpack_require__(67)]
	        }), 
	        __metadata('design:paramtypes', [writer_http_service_1.WriterHttpService, paginator_component_1.PagerService])
	    ], WriterListComponent);
	    return WriterListComponent;
	}());
	exports.WriterListComponent = WriterListComponent;
	//# sourceMappingURL=writer-list.component.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var writer_model_1 = __webpack_require__(40);
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
/* 66 */
/***/ (function(module, exports) {

	module.exports = "<br>\r\n<p>\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['../', 'add']\">Add writer</button>\r\n</p>\r\n<div class=\"customer-list-container\">\r\n    <table class=\"table table-responsive\">\r\n        <thead class=\"table-header\">\r\n        <th class=\"table-cell table-name\" (click)=\"sort('fullName');\">Full Name</th>\r\n        <th class=\"table-cell table-date\" (click)=\"sort('date');\">Birthdate</th>\r\n        <th class=\"table-cell table-status\">Biography</th>\r\n        </thead>\r\n        <tbody class=\"table-row\" *ngFor=\"let customer of model?.writerModel\">\r\n            <tr>\r\n                <td>{{customer?.fullName}}</td>\r\n                <td>{{customer?.dateOfBirth | date: 'dd/MM/yyyy'}}</td>\r\n                <td>{{customer?.biography}}</td>\r\n                <td>\r\n                    <a [routerLink]=\"['../', customer.id, 'edit']\">Edit</a>|\r\n                    <a (click)=\"delete(customer.id)\">Delete</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>    \r\n    <div style=\"display:inline-block;\">\r\n        <ul *ngIf=\"pager?.pages && pager?.pages?.length\" class=\"pagination\">\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\r\n                <a (click)=\"_setPage(1)\">First</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\r\n                <a (click)=\"_setPage(pager?.currentPage - 1)\">Previous</a>\r\n            </li>\r\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager?.currentPage === page}\">\r\n                <a (click)=\"_setPage(page)\">{{page}}</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === model?.totalPage}\">\r\n                <a (click)=\"_setPage(pager.currentPage + 1)\">Next</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === model?.totalPage}\">\r\n                <a (click)=\"_setPage(model?.totalPage)\">Last</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(68);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "a {\r\n    cursor: pointer;\r\n}\r\n\r\nth {\r\n    cursor: pointer;\r\n}\r\n\r\ntd {\r\n    max-width: 200px;\r\n    min-width: 100px;\r\n    word-break: break-word;\r\n}\r\n\r\n\r\n.table-status {\r\n    cursor: default;\r\n}\r\n", ""]);
	
	// exports


/***/ }),
/* 69 */
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
	            template: __webpack_require__(70),
	            styles: [__webpack_require__(71)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WritersComponent);
	    return WritersComponent;
	}());
	exports.WritersComponent = WritersComponent;
	//# sourceMappingURL=writers.component.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = "<router-outlet></router-outlet>\n"

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(72);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var writer_add_component_1 = __webpack_require__(59);
	var writer_edit_component_1 = __webpack_require__(53);
	var router_1 = __webpack_require__(23);
	var writer_list_component_1 = __webpack_require__(64);
	var writers_component_1 = __webpack_require__(69);
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
/* 74 */
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
	            template: __webpack_require__(75),
	            styles: [__webpack_require__(76)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	//# sourceMappingURL=app.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(77);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ }),
/* 78 */
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
	            template: __webpack_require__(79),
	            styles: [__webpack_require__(80)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavMenuComponent);
	    return NavMenuComponent;
	}());
	exports.NavMenuComponent = NavMenuComponent;
	//# sourceMappingURL=navmenu.component.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/spa']\">Writers Info List</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/spa/writers']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Writers\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/spa/books']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Books\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(81);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ }),
/* 82 */
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
	            template: __webpack_require__(83)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	//# sourceMappingURL=home.component.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = "<h1>Home model</h1>\r\n<h2>Welcome to Writer`s list application</h2>"

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2UwMjJmYTI2YTA1N2E2NzQwNGYiLCJ3ZWJwYWNrOi8vLy4vU1BBL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MubW9kdWxlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3NlbGVjdC1saXN0LWl0ZW0ubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcz8wYTBkIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3Mtc2hhcmVkL2Jvb2staHR0cC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLWJhc2UtdXJsLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktc2VydmVycy5lbnVtLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktcmVxdWVzdC11cmxzLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1J4XCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC9ib29rLWFkZC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtYWRkL2Jvb2stYWRkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50LmNzcz8xYzY4Iiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC9ib29rLWVkaXQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmNzcz9iYjZmIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLWVkaXQvYm9vay1lZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL2Jvb2stbGlzdC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL2Jvb2subW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC93cml0ZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcz80MmJlIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuY3NzPzM5OWQiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2suY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMubW9kdWxlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWVkaXQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcz8zZDNjIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3dyaXRlci1hZGQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5jc3M/ZDc3NiIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3dyaXRlci1saXN0Lm1vZGVsLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50LmNzcz81ODg5Iiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzP2U5MzgiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMucm91dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kMjNmIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWQ4ZSIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFD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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDOzs7Ozs7QUN0SkEsNkM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNEM7Ozs7OztBQzlDQSxtRDs7Ozs7O0FDQUEscUQ7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsbUJBQW1CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFB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VUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLDBDQUF5Qyx5QkFBeUIsR0FBRyxxSEFBcUgsZ0NBQWdDLG1CQUFtQixHQUFHLDJGQUEyRixzQkFBc0IsYUFBYSxjQUFjLGVBQWUsaUJBQWlCLEdBQUcsK0JBQStCLHlGQUF5Rix1QkFBdUIsa0NBQWtDLE9BQU8sZUFBZSw2QkFBNkIsNEJBQTRCLHVCQUF1QixPQUFPLHNCQUFzQixzQkFBc0IsT0FBTyx3QkFBd0IscUNBQXFDLHVCQUF1QixPQUFPLGtCQUFrQixzQkFBc0IsT0FBTyxrQkFBa0Isc0JBQXNCLDBCQUEwQixzQkFBc0IsT0FBTyxvQkFBb0IsNkJBQTZCLDZCQUE2QixPQUFPLGlCQUFpQixvRkFBb0YsOEJBQThCLDJCQUEyQixrQ0FBa0MsT0FBTyxHQUFHOztBQUV4dkM7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDJDOzs7Ozs7QUN4QkEsd0YiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZTAyMmZhMjZhMDU3YTY3NDA0ZiIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1NQQS9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGJvb2tzX21vZHVsZV8xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLm1vZHVsZScpO1xyXG52YXIgYm9va3Nfcm91dGluZ18xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLnJvdXRpbmcnKTtcclxudmFyIHN0b3JhZ2Vfc2VydmljZV8xID0gcmVxdWlyZSgnLi9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZScpO1xyXG52YXIgaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvaHR0cC5zZXJ2aWNlJyk7XHJcbnZhciB3cml0ZXJzX21vZHVsZV8xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5tb2R1bGUnKTtcclxudmFyIHdyaXRlcnNfcm91dGluZ18xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5yb3V0aW5nJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xyXG52YXIgYW5ndWxhcjJfdW5pdmVyc2FsXzEgPSByZXF1aXJlKCdhbmd1bGFyMi11bml2ZXJzYWwnKTtcclxudmFyIGFwcF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCcpO1xyXG52YXIgbmF2bWVudV9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Jyk7XHJcbnZhciBob21lX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnKTtcclxudmFyIEFwcE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHBNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBBcHBNb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuTmdNb2R1bGUoe1xyXG4gICAgICAgICAgICBib290c3RyYXA6IFtcclxuICAgICAgICAgICAgICAgIGFwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBhcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgbmF2bWVudV9jb21wb25lbnRfMS5OYXZNZW51Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgaG9tZV9jb21wb25lbnRfMS5Ib21lQ29tcG9uZW50XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgaHR0cF9zZXJ2aWNlXzEuSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlX3NlcnZpY2VfMS5TdG9yYWdlU2VydmljZVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyMl91bml2ZXJzYWxfMS5Vbml2ZXJzYWxNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXJzX21vZHVsZV8xLldyaXRlcnNNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBib29rc19tb2R1bGVfMS5Cb29rc01vZHVsZSxcclxuICAgICAgICAgICAgICAgIHJvdXRlcl8xLlJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnc3BhJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICdzcGEnLCBjb21wb25lbnQ6IGhvbWVfY29tcG9uZW50XzEuSG9tZUNvbXBvbmVudCB9XHJcbiAgICAgICAgICAgICAgICBdLmNvbmNhdCh3cml0ZXJzX3JvdXRpbmdfMS53cml0ZXJzUm91dGVzLCBib29rc19yb3V0aW5nXzEuYm9va3NSb3V0ZXMsIFtcclxuICAgICAgICAgICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdzcGEnIH1cclxuICAgICAgICAgICAgICAgIF0pKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBBcHBNb2R1bGUpO1xyXG4gICAgcmV0dXJuIEFwcE1vZHVsZTtcclxufSgpKTtcclxuZXhwb3J0cy5BcHBNb2R1bGUgPSBBcHBNb2R1bGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5tb2R1bGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2FwcC5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgYXV0b2NvbXBsZXRlX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi8uLi8uLi9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50Jyk7XHJcbnZhciBib29rX2h0dHBfc2VydmljZV8xID0gcmVxdWlyZSgnLi9ib29rcy1zaGFyZWQvYm9vay1odHRwLnNlcnZpY2UnKTtcclxudmFyIGJvb2tfYWRkX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50Jyk7XHJcbnZhciBib29rX2VkaXRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50Jyk7XHJcbnZhciBib29rX2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2Jvb2tzLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudCcpO1xyXG52YXIgYm9va19jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vYm9vay5jb21wb25lbnQnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGZvcm1zXzEgPSByZXF1aXJlKCdAYW5ndWxhci9mb3JtcycpO1xyXG52YXIgY29tbW9uXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21tb24nKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBwYWdpbmF0b3JfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudFwiKTtcclxudmFyIEJvb2tzTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tzTW9kdWxlKCkge1xyXG4gICAgfVxyXG4gICAgQm9va3NNb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuTmdNb2R1bGUoe1xyXG4gICAgICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAgICAgICBjb21tb25fMS5Db21tb25Nb2R1bGUsXHJcbiAgICAgICAgICAgICAgICByb3V0ZXJfMS5Sb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBmb3Jtc18xLkZvcm1zTW9kdWxlXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgYm9va19jb21wb25lbnRfMS5Cb29rc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGJvb2tfbGlzdF9jb21wb25lbnRfMS5Cb29rTGlzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGJvb2tfZWRpdF9jb21wb25lbnRfMS5Cb29rRWRpdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGJvb2tfYWRkX2NvbXBvbmVudF8xLkJvb2tBZGRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVfY29tcG9uZW50XzEuQXV0b2NvbXBsZXRlQ29tcG9uZW50XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgYm9va19odHRwX3NlcnZpY2VfMS5Cb29rSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEJvb2tzTW9kdWxlKTtcclxuICAgIHJldHVybiBCb29rc01vZHVsZTtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29rc01vZHVsZSA9IEJvb2tzTW9kdWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rcy5tb2R1bGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHNlbGVjdF9saXN0X2l0ZW1fbW9kZWxfMSA9IHJlcXVpcmUoJy4vLi4vLi4vbW9kZWwvc2VsZWN0LWxpc3QtaXRlbS5tb2RlbCcpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgQXV0b2NvbXBsZXRlQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEF1dG9jb21wbGV0ZUNvbXBvbmVudChteUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLklkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMud3JpdGVyc0lkc0NoYW5nZWQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMud3JpdGVySWRzID0gW107XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IG15RWxlbWVudDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSWR4ID0gLTE7XHJcbiAgICB9XHJcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLklkcyAhPT0gbnVsbCAmJiB0aGlzLml0ZW1zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLklkcy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLml0ZW1zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3LnZhbHVlID09IHRoaXMuSWRzW19pXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2gobmV3IHNlbGVjdF9saXN0X2l0ZW1fbW9kZWxfMS5TZWxlY3RMaXN0SXRlbSh3LnZhbHVlLCB3LnRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5xdWVyeSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLmNoZWNrZXIgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLnNlbGVjdGVkOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgZSA9IF9hW19pXTtcclxuICAgICAgICAgICAgaWYgKGUudmFsdWUgPT0gaXRlbS52YWx1ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSAnJztcclxuICAgICAgICB0aGlzLndyaXRlcklkcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLnNlbGVjdGVkOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgdyA9IF9hW19pXTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZXJJZHMucHVzaCh3LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZXJzSWRzQ2hhbmdlZC5lbWl0KHRoaXMud3JpdGVySWRzKTtcclxuICAgIH07XHJcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IHRoaXMuaXRlbXM7XHJcbiAgICAgICAgdGhpcy53cml0ZXJJZHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5zZWxlY3RlZDsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHcgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVySWRzLnB1c2gody52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVyc0lkc0NoYW5nZWQuZW1pdCh0aGlzLndyaXRlcklkcyk7XHJcbiAgICB9O1xyXG4gICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSWR4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuZmlsdGVyZWRMaXN0W3RoaXMuc2VsZWN0ZWRJZHhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSWR4ID0gLTE7XHJcbiAgICB9O1xyXG4gICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5pdGVtcztcclxuICAgICAgICB2YXIgY2xpY2tlZENvbXBvbmVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB2YXIgaW5zaWRlID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tlZENvbXBvbmVudCA9PT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGluc2lkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudCA9IGNsaWNrZWRDb21wb25lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICB9IHdoaWxlIChjbGlja2VkQ29tcG9uZW50KTtcclxuICAgICAgICBpZiAoIWluc2lkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkSWR4ID0gLTE7XHJcbiAgICB9O1xyXG4gICAgX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLklucHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgQXJyYXkpXHJcbiAgICBdLCBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLCBcIml0ZW1zXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBBcnJheSlcclxuICAgIF0sIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiSWRzXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuT3V0cHV0KCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgT2JqZWN0KVxyXG4gICAgXSwgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ3cml0ZXJzSWRzQ2hhbmdlZFwiLCB2b2lkIDApO1xyXG4gICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYXBwLWF1dG9jb21wbGV0ZScsXHJcbiAgICAgICAgICAgIGhvc3Q6IHtcclxuICAgICAgICAgICAgICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ2hhbmRsZUNsaWNrKCRldmVudCknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtjb3JlXzEuRWxlbWVudFJlZl0pXHJcbiAgICBdLCBBdXRvY29tcGxldGVDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEF1dG9jb21wbGV0ZUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5BdXRvY29tcGxldGVDb21wb25lbnQgPSBBdXRvY29tcGxldGVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBTZWxlY3RMaXN0SXRlbSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZWxlY3RMaXN0SXRlbSh2YWx1ZSwgdGV4dCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgU2VsZWN0TGlzdEl0ZW0uZnJvbUpTT04gPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3RMaXN0SXRlbSgrb2JqZWN0Wyd2YWx1ZSddLCBvYmplY3RbJ3RleHQnXSk7XHJcbiAgICB9O1xyXG4gICAgU2VsZWN0TGlzdEl0ZW0uZnJvbUpTT05BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gU2VsZWN0TGlzdEl0ZW0uZnJvbUpTT04ob2JqKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlbGVjdExpc3RJdGVtO1xyXG59KCkpO1xyXG5leHBvcnRzLlNlbGVjdExpc3RJdGVtID0gU2VsZWN0TGlzdEl0ZW07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlbGVjdC1saXN0LWl0ZW0ubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL3NlbGVjdC1saXN0LWl0ZW0ubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImlucHV0LWZpZWxkIGNvbCBzMTJcXFwiPlxcclxcbiAgICA8aW5wdXQgaWQ9XFxcImNvdW50cnlcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJ2YWxpZGF0ZSBmaWx0ZXItaW5wdXRcXFwiIFsobmdNb2RlbCldPXF1ZXJ5IChrZXl1cCk9ZmlsdGVyKCk+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwic3VnZ2VzdGlvbnNcXFwiICpuZ0lmPVxcXCJmaWx0ZXJlZExpc3Q/Lmxlbmd0aCA+IDBcXFwiPlxcclxcbiAgICA8dWwgICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgZmlsdGVyZWRMaXN0XFxcIj5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICA8YSBbbmdDbGFzc10gPVxcXCJ7J2Rpc2FibGVkJzogY2hlY2tlcihpdGVtKX1cXFwiIChjbGljayk9XFxcInNlbGVjdChpdGVtKVxcXCI+e3tpdGVtLnRleHR9fTwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHNlbGVjdGVkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0ZWRcXFwiPlxcclxcbiAgICAgICAgPHNwYW4+e3tpdGVtLnRleHR9fTwvc3Bhbj5cXHJcXG4gICAgICAgIDxhIChjbGljayk9XFxcInJlbW92ZShpdGVtKVxcXCI+eDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3VnZ2VzdGlvbnN7XFxyXFxuXFx0Ym9yZGVyOnNvbGlkIDFweCAjZjFmMWYxO1xcclxcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcclxcblxcdHdpZHRoOjYwMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBtYXJnaW46IC0yNXB4IDAgMHB4IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VnZ2VzdGlvbnMgdWx7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVye1xcclxcblxcdHdpZHRoOjYwMHB4O1xcclxcblxcdG1hcmdpbi1sZWZ0OjEwcHg7XFxyXFxuXFx0bWFyZ2luLXRvcDoxMHB4O1xcclxcbn1cXHJcXG4uc3VnZ2VzdGlvbnMgdWwgbGl7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWdnZXN0aW9ucyB1bCBsaSBhe1xcclxcblxcdHBhZGRpbmc6NXB4O1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRjb2xvcjojN0U3RTdFO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VnZ2VzdGlvbnMgdWwgbGkgYTpob3ZlcntcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG4uc2VsZWN0ZWQgYXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG51bCBhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5kaXNhYmxlZHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZTBlMGUwIWltcG9ydGFudDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uLy4uLy4uL2NvbmZpZy9jb25maWdcIik7XHJcbnZhciBodHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL2h0dHAuc2VydmljZVwiKTtcclxucmVxdWlyZSgncnhqcy9SeCcpO1xyXG52YXIgQm9va0h0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tIdHRwU2VydmljZShfaHR0cFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZSA9IF9odHRwU2VydmljZTtcclxuICAgIH1cclxuICAgIEJvb2tIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0Qm9va0J5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLmJvb2tzICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBCb29rSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldFNvcnRpbmdCb29rcyA9IGZ1bmN0aW9uIChzb3J0QnksIG9yZGVyQnksIHBhZ2VOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLmdldEFsbEJvb2tcclxuICAgICAgICAgICAgKyBcIj9zb3J0T3JkZXI9XCIgKyBzb3J0QnkgKyBcIiZkaXJlY3Rpb249XCIgKyBvcmRlckJ5ICsgXCImcGFnZT1cIiArIHBhZ2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRCb29rcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLmNyZWF0ZUJvb2spXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5wb3N0Q3VzdG9tZXIgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5wb3N0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLmJvb2tzLCBkYXRhKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlczsgfSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5wdXRDdXN0b21lciA9IGZ1bmN0aW9uIChpZCwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5wdXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMuYm9va3MgKyBcIi9cIiArIGlkLCBkYXRhKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlczsgfSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGVDdXN0b21lciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5kZWxldGUoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMuYm9va3MgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlczsgfSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0h0dHBTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cF9zZXJ2aWNlXzEuSHR0cFNlcnZpY2VdKVxyXG4gICAgXSwgQm9va0h0dHBTZXJ2aWNlKTtcclxuICAgIHJldHVybiBCb29rSHR0cFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQm9va0h0dHBTZXJ2aWNlID0gQm9va0h0dHBTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWh0dHAuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1zaGFyZWQvYm9vay1odHRwLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgYXBpX2Jhc2VfdXJsXzEgPSByZXF1aXJlKCcuL3NoYXJlZC9hcGktYmFzZS11cmwnKTtcclxudmFyIGFwaV9yZXF1ZXN0X3VybHNfMSA9IHJlcXVpcmUoJy4vc2hhcmVkL2FwaS1yZXF1ZXN0LXVybHMnKTtcclxudmFyIGFwaV9zZXJ2ZXJzX2VudW1fMSA9IHJlcXVpcmUoXCIuL3NoYXJlZC9hcGktc2VydmVycy5lbnVtXCIpO1xyXG52YXIgQXBwQ29uZmlnID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcENvbmZpZygpIHtcclxuICAgIH1cclxuICAgIEFwcENvbmZpZy5hcGlVcmwgPSBhcGlfYmFzZV91cmxfMS5BcGlCYXNlVXJsLmdldChhcGlfc2VydmVyc19lbnVtXzEuQXBpU2VydmVycy5kZXYpO1xyXG4gICAgQXBwQ29uZmlnLnVybHMgPSBhcGlfcmVxdWVzdF91cmxzXzEuQXBpUmVxdWVzdFVybHMudXJscztcclxuICAgIEFwcENvbmZpZy5wcm9qZWN0TmFtZSA9ICdXcml0ZXJBcHAnO1xyXG4gICAgcmV0dXJuIEFwcENvbmZpZztcclxufSgpKTtcclxuZXhwb3J0cy5BcHBDb25maWcgPSBBcHBDb25maWc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29uZmlnL2NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhcGlfc2VydmVyc19lbnVtXzEgPSByZXF1aXJlKFwiLi9hcGktc2VydmVycy5lbnVtXCIpO1xyXG52YXIgQXBpQmFzZVVybCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcGlCYXNlVXJsKCkge1xyXG4gICAgfVxyXG4gICAgQXBpQmFzZVVybC5nZXQgPSBmdW5jdGlvbiAoZW52KSB7XHJcbiAgICAgICAgc3dpdGNoIChlbnYpIHtcclxuICAgICAgICAgICAgY2FzZSBhcGlfc2VydmVyc19lbnVtXzEuQXBpU2VydmVycy5kZXY6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnL2FwaS8nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBcGlCYXNlVXJsO1xyXG59KCkpO1xyXG5leHBvcnRzLkFwaUJhc2VVcmwgPSBBcGlCYXNlVXJsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcGktYmFzZS11cmwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLWJhc2UtdXJsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuKGZ1bmN0aW9uIChBcGlTZXJ2ZXJzKSB7XHJcbiAgICBBcGlTZXJ2ZXJzW0FwaVNlcnZlcnNbXCJzdGFpZ2luZ1wiXSA9IDFdID0gXCJzdGFpZ2luZ1wiO1xyXG4gICAgQXBpU2VydmVyc1tBcGlTZXJ2ZXJzW1widGVzdFwiXSA9IDJdID0gXCJ0ZXN0XCI7XHJcbiAgICBBcGlTZXJ2ZXJzW0FwaVNlcnZlcnNbXCJkZXZcIl0gPSAzXSA9IFwiZGV2XCI7XHJcbn0pKGV4cG9ydHMuQXBpU2VydmVycyB8fCAoZXhwb3J0cy5BcGlTZXJ2ZXJzID0ge30pKTtcclxudmFyIEFwaVNlcnZlcnMgPSBleHBvcnRzLkFwaVNlcnZlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS1zZXJ2ZXJzLmVudW0uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLXNlcnZlcnMuZW51bS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBBcGlSZXF1ZXN0VXJscyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcGlSZXF1ZXN0VXJscygpIHtcclxuICAgIH1cclxuICAgIEFwaVJlcXVlc3RVcmxzLnVybHMgPSB7XHJcbiAgICAgICAgJ3dyaXRlcic6ICd3cml0ZXInLFxyXG4gICAgICAgICdib29rcyc6ICdib29rcycsXHJcbiAgICAgICAgJ2NyZWF0ZUJvb2snOiAnYm9va3MvY3JlYXRlJyxcclxuICAgICAgICAnZ2V0QWxsQm9vayc6ICdib29rcy9nZXQnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwaVJlcXVlc3RVcmxzO1xyXG59KCkpO1xyXG5leHBvcnRzLkFwaVJlcXVlc3RVcmxzID0gQXBpUmVxdWVzdFVybHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS1yZXF1ZXN0LXVybHMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLXJlcXVlc3QtdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZSgncnhqcy9PYnNlcnZhYmxlJyk7XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoJy4vLi4vLi4vY29uZmlnL2NvbmZpZycpO1xyXG52YXIgc3RvcmFnZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL3N0b3JhZ2Uuc2VydmljZScpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9tYXAnKTtcclxucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBodHRwXzEgPSByZXF1aXJlKCdAYW5ndWxhci9odHRwJyk7XHJcbnZhciBIdHRwU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIdHRwU2VydmljZShfaHR0cCwgX3N0b3JhZ2UsIF9yb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLl9odHRwID0gX2h0dHA7XHJcbiAgICAgICAgdGhpcy5fc3RvcmFnZSA9IF9zdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlciA9IF9yb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUucHJlcGFyZUhlYWRlcnMgPSBmdW5jdGlvbiAoaGVhZGVyc1Jhdykge1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IGh0dHBfMS5IZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XHJcbiAgICAgICAgaWYgKGhlYWRlcnNSYXcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNSYXcuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoaXRlbS5rZXksIGl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKHRoaXMuX3N0b3JhZ2Uua2V5cy5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCAnYmVhcmVyICcgKyB0b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9O1xyXG4gICAgLyogPT09PT09PT09PT09PT09IE1FVEhPRFMgPT09PT09PT09PT09PT09XHJcbiAgICBkYXRhUmF3ICAgICAtIHJlZ3VsYXIgSlMgb2JqZWN0XHJcbiAgICBoZWFkZXJzUmF3ICAtIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgaGVhZGVyc1xyXG4gICAgKi9cclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodXJsLCBfYSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIF9jID0gX2IuaGVhZGVyc1JhdywgaGVhZGVyc1JhdyA9IF9jID09PSB2b2lkIDAgPyBudWxsIDogX2MsIF9kID0gX2Iuc2hvd0xvYWRlciwgc2hvd0xvYWRlciA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2Q7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB0aGlzLnByZXBhcmVIZWFkZXJzKGhlYWRlcnNSYXcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgICAgICAgIC5nZXQoY29uZmlnXzEuQXBwQ29uZmlnLmFwaVVybCArIHVybCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmludGVyY2VwdChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAodXJsLCBkYXRhUmF3LCBfYSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIF9jID0gX2IuaGVhZGVyc1JhdywgaGVhZGVyc1JhdyA9IF9jID09PSB2b2lkIDAgPyBudWxsIDogX2MsIF9kID0gX2Iuc2hvd0xvYWRlciwgc2hvd0xvYWRlciA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2QsIF9lID0gX2Iuc3RyaW5naWZ5RGF0YSwgc3RyaW5naWZ5RGF0YSA9IF9lID09PSB2b2lkIDAgPyB0cnVlIDogX2U7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB0aGlzLnByZXBhcmVIZWFkZXJzKGhlYWRlcnNSYXcpO1xyXG4gICAgICAgIHZhciBkYXRhID0gbnVsbDtcclxuICAgICAgICBpZiAoc3RyaW5naWZ5RGF0YSkge1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YVJhdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KGNvbmZpZ18xLkFwcENvbmZpZy5hcGlVcmwgKyB1cmwsIGRhdGEgfHwgZGF0YVJhdywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmludGVyY2VwdChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uICh1cmwsIGRhdGFSYXcsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5oZWFkZXJzUmF3LCBoZWFkZXJzUmF3ID0gX2MgPT09IHZvaWQgMCA/IG51bGwgOiBfYywgX2QgPSBfYi5zaG93TG9hZGVyLCBzaG93TG9hZGVyID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZDtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHRoaXMucHJlcGFyZUhlYWRlcnMoaGVhZGVyc1Jhdyk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhUmF3KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAgICAgICAucHV0KGNvbmZpZ18xLkFwcENvbmZpZy5hcGlVcmwgKyB1cmwsIGRhdGEsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5pbnRlcmNlcHQoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodXJsLCBfYSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIF9iID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5zaG93TG9hZGVyLCBzaG93TG9hZGVyID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHRoaXMucHJlcGFyZUhlYWRlcnMobnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLmRlbGV0ZShjb25maWdfMS5BcHBDb25maWcuYXBpVXJsICsgdXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW50ZXJjZXB0KGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3NwYSddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9zdG9yYWdlLmtleXMudXNlcik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9zdG9yYWdlLmtleXMuYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fc3RvcmFnZS5rZXlzLmV4cGlyZXNJbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9zcGEnXSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLmZvcm1FcnJvck1lc3NhZ2UgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gJ09vcHMsIHNvbWV0aGluZyB3cm9uZyEnO1xyXG4gICAgICAgIHZhciBzZXJ2ZXJFcnJvcnMgPSBbXTtcclxuICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuX2JvZHkpIHtcclxuICAgICAgICAgICAgc2VydmVyRXJyb3JzID0gSlNPTi5wYXJzZShlcnJvci5fYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2VzID0gW107XHJcbiAgICAgICAgaWYgKCEhc2VydmVyRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gc2VydmVyRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyRXJyb3JzLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzZXJ2ZXJFcnJvcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKHNlcnZlckVycm9yc1tpXVswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlcy5qb2luKCcsICcpO1xyXG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2U7XHJcbiAgICB9O1xyXG4gICAgSHR0cFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtodHRwXzEuSHR0cCwgc3RvcmFnZV9zZXJ2aWNlXzEuU3RvcmFnZVNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlcl0pXHJcbiAgICBdLCBIdHRwU2VydmljZSk7XHJcbiAgICByZXR1cm4gSHR0cFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuSHR0cFNlcnZpY2UgPSBIdHRwU2VydmljZTtcclxuO1xyXG47XHJcbjtcclxuO1xyXG47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvT2JzZXJ2YWJsZVwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoJy4vLi4vLi4vY29uZmlnL2NvbmZpZycpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgU3RvcmFnZVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RvcmFnZVNlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlzID0ge1xyXG4gICAgICAgICAgICAndXNlcic6ICd1c2VyJyxcclxuICAgICAgICAgICAgJ2FjY2Vzc1Rva2VuJzogJ0FjY2Vzc1Rva2VuJyxcclxuICAgICAgICAgICAgJ2V4cGlyZXNJbic6ICdFeHBpcmVzSW4nLFxyXG4gICAgICAgICAgICAnbGFuZ3VhZ2UnOiAnbGFuZycsXHJcbiAgICAgICAgICAgICdsb2dpbkNyZWRlbnRpYWxzJzogJ2xvZ2luQ3JlZGVudGlhbHMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmtleVByZWZpeCA9IGNvbmZpZ18xLkFwcENvbmZpZy5wcm9qZWN0TmFtZTtcclxuICAgIH1cclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5fZ2V0S2V5ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGtleSA9IGtleS50cmltKCk7XHJcbiAgICAgICAgaWYgKGtleS5sZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5UHJlZml4ICsgXCJfXCIgKyBrZXk7XHJcbiAgICB9O1xyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLnNldEl0ZW0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2dldEtleShrZXkpLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfTtcclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX2dldEtleShrZXkpKTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW10pXHJcbiAgICBdLCBTdG9yYWdlU2VydmljZSk7XHJcbiAgICByZXR1cm4gU3RvcmFnZVNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU3RvcmFnZVNlcnZpY2UgPSBTdG9yYWdlU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RvcmFnZS5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvUnhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBib29rX2h0dHBfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL2Jvb2tzLXNoYXJlZC9ib29rLWh0dHAuc2VydmljZVwiKTtcclxudmFyIGJvb2tfYWRkX21vZGVsXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vbW9kZWwvYm9vay1hZGQubW9kZWxcIik7XHJcbnZhciBCb29rQWRkQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tBZGRDb21wb25lbnQoX2h0dHBTZXJ2aWNlLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZSA9IF9odHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIEJvb2tBZGRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBib29rX2FkZF9tb2RlbF8xLkJvb2tBZGRNb2RlbChudWxsLCBudWxsLCBudWxsLCBudWxsKTtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRCb29rcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IGJvb2tfYWRkX21vZGVsXzEuQm9va0FkZE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0FkZENvbXBvbmVudC5wcm90b3R5cGUuZ2V0SWRzID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwud3JpdGVySWRzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWxfMSA9IHZhbDsgX2kgPCB2YWxfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGEgPSB2YWxfMVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwud3JpdGVySWRzLnB1c2goYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tBZGRDb21wb25lbnQucHJvdG90eXBlLmNoZWNrZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwud3JpdGVySWRzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLndyaXRlcklkcy5sZW5ndGggPiAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEJvb2tBZGRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLndyaXRlcklkcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLndyaXRlcklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0Q3VzdG9tZXIodGhpcy5tb2RlbClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9zcGEvYm9va3MvbGlzdFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nob29zZSB3cml0ZXJgcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnQ2hvb3NlIHdyaXRlcmBzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tBZGRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9vay1hZGQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ib29rLWFkZC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2Jvb2tfaHR0cF9zZXJ2aWNlXzEuQm9va0h0dHBTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG4gICAgXSwgQm9va0FkZENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gQm9va0FkZENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29rQWRkQ29tcG9uZW50ID0gQm9va0FkZENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vay1hZGQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgc2VsZWN0X2xpc3RfaXRlbV9tb2RlbF8xID0gcmVxdWlyZSgnLi9zZWxlY3QtbGlzdC1pdGVtLm1vZGVsJyk7XHJcbnZhciBCb29rQWRkTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va0FkZE1vZGVsKGNhcHRpb24sIHB1Ymxpc2hlZERhdGUsIHdyaXRlcklkcywgd3JpdGVycykge1xyXG4gICAgICAgIGlmICh3cml0ZXJJZHMgPT09IHZvaWQgMCkgeyB3cml0ZXJJZHMgPSBbXTsgfVxyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IGNhcHRpb247XHJcbiAgICAgICAgdGhpcy5wdWJsaXNoZWREYXRlID0gcHVibGlzaGVkRGF0ZTtcclxuICAgICAgICB0aGlzLndyaXRlcklkcyA9IHdyaXRlcklkcztcclxuICAgICAgICB0aGlzLndyaXRlcnMgPSB3cml0ZXJzO1xyXG4gICAgfVxyXG4gICAgQm9va0FkZE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9va0FkZE1vZGVsKG9iamVjdFsnY2FwdGlvbiddLCBvYmplY3RbJ3B1Ymxpc2hEYXRlJ10sIG9iamVjdFsnd3JpdGVySWRzJ10sIHNlbGVjdF9saXN0X2l0ZW1fbW9kZWxfMS5TZWxlY3RMaXN0SXRlbS5mcm9tSlNPTkFycmF5KG9iamVjdFsnd3JpdGVycyddKSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0FkZE1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIEJvb2tBZGRNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9va0FkZE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tBZGRNb2RlbCA9IEJvb2tBZGRNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vay1hZGQubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL2Jvb2stYWRkLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gKHN1Ym1pdCk9XFxcIm9uU3VibWl0Rm9ybSgpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkNhcHRpb246PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwuY2FwdGlvblxcXCIgbmFtZT1cXFwiY2FwdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIj5QdWJsaXNoIGRhdGU6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwucHVibGlzaGVkRGF0ZVxcXCIgbmFtZT1cXFwicHVibGlzaGVkRGF0ZVxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJpb2dyYXBoeVxcXCI+V3JpdGVyczo8L2xhYmVsPlxcclxcbiAgICAgICAgPGFwcC1hdXRvY29tcGxldGUgKHdyaXRlcnNJZHNDaGFuZ2VkKT1cXFwiZ2V0SWRzKCRldmVudClcXFwiIFtJZHNdID0gXFxcIm1vZGVsLndyaXRlcklkc1xcXCIgW2l0ZW1zXT1cXFwibW9kZWwud3JpdGVyc1xcXCIgcmVxdWlyZWQ+PC9hcHAtYXV0b2NvbXBsZXRlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2stYWRkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgYm9va19lZGl0X21vZGVsXzEgPSByZXF1aXJlKCcuLy4uLy4uLy4uL21vZGVsL2Jvb2stZWRpdC5tb2RlbCcpO1xyXG52YXIgYm9va19odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9ib29rcy1zaGFyZWQvYm9vay1odHRwLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xyXG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIEJvb2tFZGl0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tFZGl0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGUsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIEJvb2tFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgX3RoaXMuaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldEJvb2tCeUlkKHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IGJvb2tfZWRpdF9tb2RlbF8xLkJvb2tFZGl0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCb29rRWRpdENvbXBvbmVudC5wcm90b3R5cGUuZ2V0SWRzID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwud3JpdGVySWRzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWxfMSA9IHZhbDsgX2kgPCB2YWxfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGEgPSB2YWxfMVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwud3JpdGVySWRzLnB1c2goYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC53cml0ZXJJZHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC53cml0ZXJJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucHV0Q3VzdG9tZXIodGhpcy5pZCwgdGhpcy5tb2RlbClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9zcGEvYm9va3MvbGlzdFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nob29zZSB3cml0ZXJgcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnQ2hvb3NlIHdyaXRlcmBzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Jvb2stZWRpdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Jvb2stZWRpdC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2Jvb2tfaHR0cF9zZXJ2aWNlXzEuQm9va0h0dHBTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIEJvb2tFZGl0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBCb29rRWRpdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29rRWRpdENvbXBvbmVudCA9IEJvb2tFZGl0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWVkaXQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIHNlbGVjdF9saXN0X2l0ZW1fbW9kZWxfMSA9IHJlcXVpcmUoJy4vc2VsZWN0LWxpc3QtaXRlbS5tb2RlbCcpO1xyXG52YXIgQm9va0VkaXRNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb29rRWRpdE1vZGVsKGlkLCBjYXB0aW9uLCBwdWJsaXNoZWREYXRlLCB3cml0ZXJJZHMsIHdyaXRlck1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IGNhcHRpb247XHJcbiAgICAgICAgdGhpcy5wdWJsaXNoZWREYXRlID0gcHVibGlzaGVkRGF0ZTtcclxuICAgICAgICB0aGlzLndyaXRlcklkcyA9IHdyaXRlcklkcztcclxuICAgICAgICB0aGlzLndyaXRlck1vZGVsID0gd3JpdGVyTW9kZWw7XHJcbiAgICB9XHJcbiAgICBCb29rRWRpdE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9va0VkaXRNb2RlbChvYmplY3RbJ2lkJ10sIG9iamVjdFsnY2FwdGlvbiddLCBvYmplY3RbJ3B1Ymxpc2hlZERhdGUnXSwgb2JqZWN0Wyd3cml0ZXJJZHMnXSwgc2VsZWN0X2xpc3RfaXRlbV9tb2RlbF8xLlNlbGVjdExpc3RJdGVtLmZyb21KU09OQXJyYXkob2JqZWN0Wyd3cml0ZXJzJ10pKTtcclxuICAgIH07XHJcbiAgICBCb29rRWRpdE1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIEJvb2tFZGl0TW9kZWwuZnJvbUpTT04ob2JqKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJvb2tFZGl0TW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQm9va0VkaXRNb2RlbCA9IEJvb2tFZGl0TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2stZWRpdC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvYm9vay1lZGl0Lm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxmb3JtIChzdWJtaXQpPVxcXCJvblN1Ym1pdEZvcm0oKVxcXCIgKm5nSWY9XFxcIm1vZGVsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkNhcHRpb246PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwuY2FwdGlvblxcXCIgbmFtZT1cXFwiY2FwdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInB1Ymxpc2hlZERhdGVcXFwiPlB1Ymxpc2ggZGF0ZTo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cXFwibW9kZWwucHVibGlzaGVkRGF0ZXwgZGF0ZToneXl5eS1NTS1kZCdcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwibW9kZWwucHVibGlzaGVkRGF0ZSA9ICRldmVudFxcXCIgbmFtZT1cXFwicHVibGlzaGVkRGF0ZVxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIndyaXRlcnNcXFwiPldyaXRlcnM6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxhcHAtYXV0b2NvbXBsZXRlICh3cml0ZXJzSWRzQ2hhbmdlZCk9XFxcImdldElkcygkZXZlbnQpXFxcIiBbSWRzXSA9IFxcXCJtb2RlbC53cml0ZXJJZHNcXFwiIFtpdGVtc109XFxcIm1vZGVsLndyaXRlck1vZGVsXFxcIj48L2FwcC1hdXRvY29tcGxldGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+U3VibWl0PC9idXR0b24+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2stZWRpdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLWVkaXQvYm9vay1lZGl0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgYm9va19odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vLi4vYm9va3Mtc2hhcmVkL2Jvb2staHR0cC5zZXJ2aWNlJyk7XHJcbnZhciBib29rX2xpc3RfbW9kZWxfMSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vbW9kZWwvYm9vay1saXN0Lm1vZGVsJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBwYWdpbmF0b3JfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudFwiKTtcclxudmFyIEJvb2tMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tMaXN0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcGFnZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UgPSBfaHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5wYWdlclNlcnZpY2UgPSBwYWdlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5pc0FkZFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhZ2VyID0ge307XHJcbiAgICB9XHJcbiAgICBCb29rTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRTb3J0aW5nQm9va3MoJ2NhcHRpb24nLCAnQVNDJywgMSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gYm9va19saXN0X21vZGVsXzEuQm9va0xpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICBfdGhpcy5fc2V0UGFnZSgxKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCb29rTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc2h1cmUgP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9odHRwU2VydmljZS5kZWxldGVDdXN0b21lcihpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyBfdGhpcy5uZ09uSW5pdCgpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQm9va0xpc3RDb21wb25lbnQucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoY29sdW1uTmFtZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZGlyZWN0aW9uID09ICdBU0MnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJERVNDXCI7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY29sdW1uID0gY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0Jvb2tzKHRoaXMubW9kZWwuY29sdW1uLCB0aGlzLm1vZGVsLmRpcmVjdGlvbiwgdGhpcy5tb2RlbC5wYWdlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5tb2RlbCA9IGJvb2tfbGlzdF9tb2RlbF8xLkJvb2tMaXN0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRpcmVjdGlvbiA9IFwiQVNDXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFNvcnRpbmdCb29rcyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSBib29rX2xpc3RfbW9kZWxfMS5Cb29rTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCb29rTGlzdENvbXBvbmVudC5wcm90b3R5cGUuX3NldFBhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLm1vZGVsLnRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHRoaXMucGFnZXJTZXJ2aWNlLmdldFBhZ2VyKHRoaXMubW9kZWwucGFnZSwgdGhpcy5tb2RlbC5wYWdlU2l6ZSwgdGhpcy5tb2RlbC50b3RhbFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFNvcnRpbmdCb29rcyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gYm9va19saXN0X21vZGVsXzEuQm9va0xpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEJvb2tMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Jvb2stbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Jvb2stbGlzdC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2Jvb2tfaHR0cF9zZXJ2aWNlXzEuQm9va0h0dHBTZXJ2aWNlLCBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXSlcclxuICAgIF0sIEJvb2tMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBCb29rTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29rTGlzdENvbXBvbmVudCA9IEJvb2tMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBib29rX21vZGVsXzEgPSByZXF1aXJlKCcuL2Jvb2subW9kZWwnKTtcclxudmFyIEJvb2tMaXN0TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va0xpc3RNb2RlbChmaWx0ZXIsIGNvbHVtbiwgZGlyZWN0aW9uLCBoYXNOZXh0UGFnZSwgaGFzUHJlUGFnZSwgcGFnZVNpemUsIHRvdGFsUGFnZSwgcGFnZSwgYm9va01vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5oYXNOZXh0UGFnZSA9IGhhc05leHRQYWdlO1xyXG4gICAgICAgIHRoaXMuaGFzUHJlUGFnZSA9IGhhc1ByZVBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xyXG4gICAgICAgIHRoaXMudG90YWxQYWdlID0gdG90YWxQYWdlO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5ib29rTW9kZWwgPSBib29rTW9kZWw7XHJcbiAgICB9XHJcbiAgICBCb29rTGlzdE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9va0xpc3RNb2RlbChvYmplY3RbJ2ZpbHRlciddLCBvYmplY3RbJ29yZGVyJ11bJ2NvbHVtbiddLCBvYmplY3RbJ29yZGVyJ11bJ2RpcmVjdGlvbiddLCBvYmplY3RbJ2hhc05leHRQYWdlJ10sIG9iamVjdFsnaGFzUHJldmlvdXNQYWdlJ10sIG9iamVjdFsncGFnZVNpemUnXSwgb2JqZWN0Wyd0b3RhbFBhZ2VzJ10sIG9iamVjdFsncGFnZSddLCBib29rX21vZGVsXzEuQm9va01vZGVsLmZyb21KU09OQXJyYXkob2JqZWN0WydpdGVtcyddKSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0xpc3RNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBCb29rTGlzdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb29rTGlzdE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tMaXN0TW9kZWwgPSBCb29rTGlzdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWxpc3QubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL2Jvb2stbGlzdC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciB3cml0ZXJfbW9kZWxfMSA9IHJlcXVpcmUoJy4vd3JpdGVyLm1vZGVsJyk7XHJcbnZhciBCb29rTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va01vZGVsKGlkLCBjYXB0aW9uLCBwdWJsaXNoRGF0ZSwgd3JpdGVyTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gY2FwdGlvbjtcclxuICAgICAgICB0aGlzLnB1Ymxpc2hEYXRlID0gcHVibGlzaERhdGU7XHJcbiAgICAgICAgdGhpcy53cml0ZXJNb2RlbCA9IHdyaXRlck1vZGVsO1xyXG4gICAgfVxyXG4gICAgQm9va01vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9va01vZGVsKG9iamVjdFsnaWQnXSwgb2JqZWN0WydjYXB0aW9uJ10sIG9iamVjdFsncHVibGlzaGVkRGF0ZSddLCB3cml0ZXJfbW9kZWxfMS5Xcml0ZXJNb2RlbC5mcm9tSlNPTkFycmF5KG9iamVjdFsnd3JpdGVycyddKSk7XHJcbiAgICB9O1xyXG4gICAgQm9va01vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIEJvb2tNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9va01vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tNb2RlbCA9IEJvb2tNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vay5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvYm9vay5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBib29rX21vZGVsXzEgPSByZXF1aXJlKCcuL2Jvb2subW9kZWwnKTtcclxudmFyIFdyaXRlck1vZGVsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlck1vZGVsKGlkLCBmdWxsTmFtZSwgZGF0ZU9mQmlydGgsIGJpb2dyYXBoeSwgQm9vaykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XHJcbiAgICAgICAgdGhpcy5kYXRlT2ZCaXJ0aCA9IGRhdGVPZkJpcnRoO1xyXG4gICAgICAgIHRoaXMuYmlvZ3JhcGh5ID0gYmlvZ3JhcGh5O1xyXG4gICAgICAgIHRoaXMuQm9vayA9IEJvb2s7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJNb2RlbC5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFdyaXRlck1vZGVsKG9iamVjdFsnaWQnXSwgb2JqZWN0WydmdWxsTmFtZSddLCBvYmplY3RbJ2RhdGVPZkJpcnRoJ10sIG9iamVjdFsnYmlvZ3JhcGh5J10sIGJvb2tfbW9kZWxfMS5Cb29rTW9kZWwuZnJvbUpTT05BcnJheShvYmplY3RbJ2Jvb2tzJ10pKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBXcml0ZXJNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV3JpdGVyTW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTW9kZWwgPSBXcml0ZXJNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9tb2RlbC93cml0ZXIubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgUGFnZXJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2VyU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIFBhZ2VyU2VydmljZS5wcm90b3R5cGUucmFuZ2UgPSBmdW5jdGlvbiAoc3RhcnQsIGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KDAsIEFycmF5KGNvdW50KSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICsgc3RhcnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUGFnZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYWdlciA9IGZ1bmN0aW9uIChjdXJyZW50UGFnZSwgcGFnZVNpemUsIHRvdGFsUGFnZXMpIHtcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT09IHZvaWQgMCkgeyBjdXJyZW50UGFnZSA9IDE7IH1cclxuICAgICAgICBpZiAocGFnZVNpemUgPT09IHZvaWQgMCkgeyBwYWdlU2l6ZSA9IDU7IH1cclxuICAgICAgICB2YXIgc3RhcnRQYWdlID0gMSwgZW5kUGFnZTtcclxuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemU7XHJcbiAgICAgICAgdmFyIGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHBhZ2VTaXplO1xyXG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMucmFuZ2Uoc3RhcnRQYWdlLCB0b3RhbFBhZ2VzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgc3RhcnRQYWdlOiBzdGFydFBhZ2UsXHJcbiAgICAgICAgICAgIGVuZFBhZ2U6IGVuZFBhZ2UsXHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgIGVuZEluZGV4OiBlbmRJbmRleCxcclxuICAgICAgICAgICAgcGFnZXM6IHBhZ2VzXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGFnZXJTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlBhZ2VyU2VydmljZSA9IFBhZ2VyU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnaW5hdG9yLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxicj5cXHJcXG48cD5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBbcm91dGVyTGlua109XFxcIlsnLi4vJywgJ2FkZCddXFxcIj5BZGQgYm9vazwvYnV0dG9uPlxcclxcbjwvcD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjdXN0b21lci1saXN0LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtbmFtZVxcXCIgKGNsaWNrKT1cXFwic29ydCgnY2FwdGlvbicpO1xcXCI+Q2FwdGlvbjwvdGg+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtZGF0ZVxcXCIgKGNsaWNrKT1cXFwic29ydCgnZGF0ZScpO1xcXCI+UHVibGlzaCBEYXRlPC90aD5cXHJcXG4gICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGUtY2VsbCB0YWJsZS1zdGF0dXNcXFwiPkF1dGhvcnM8L3RoPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keSBjbGFzcz1cXFwidGFibGUtcm93XFxcIiAqbmdGb3I9XFxcImxldCBjdXN0b21lciBvZiBtb2RlbD8uYm9va01vZGVsXFxcIj5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyPy5jYXB0aW9ufX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3tjdXN0b21lcj8ucHVibGlzaERhdGUgfCBkYXRlOiAnZGQvTU0veXl5eSd9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD4gPHNwYW4gKm5nRm9yPVxcXCJsZXQgYXV0aG9yIG9mIGN1c3RvbWVyPy53cml0ZXJNb2RlbFxcXCI+e3thdXRob3IuZnVsbE5hbWV9fTwvc3Bhbj4gPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uLycsIGN1c3RvbWVyLmlkLCAnZWRpdCddXFxcIj5FZGl0PC9hPnxcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImRlbGV0ZShjdXN0b21lci5pZClcXFwiPkRlbGV0ZTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT4gICAgXFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6aW5saW5lLWJsb2NrO1xcXCI+XFxyXFxuICAgICAgICA8dWwgKm5nSWY9XFxcInBhZ2VyPy5wYWdlcyAmJiBwYWdlcj8ucGFnZXM/Lmxlbmd0aFxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IDF9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UoMSlcXFwiPkZpcnN0PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gMX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlcj8uY3VycmVudFBhZ2UgLSAxKVxcXCI+UHJldmlvdXM8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwYWdlci5wYWdlc1xcXCIgW25nQ2xhc3NdPVxcXCJ7YWN0aXZlOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gcGFnZX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlKVxcXCI+e3twYWdlfX08L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IG1vZGVsPy50b3RhbFBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UocGFnZXIuY3VycmVudFBhZ2UgKyAxKVxcXCI+TmV4dDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IG1vZGVsPy50b3RhbFBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UobW9kZWw/LnRvdGFsUGFnZSlcXFwiPkxhc3Q8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ib29rLWxpc3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGgge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYmxlLXN0YXR1cyB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgQm9va3NDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va3NDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBCb29rc0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQm9va3NDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9vay5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Jvb2suY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQm9va3NDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEJvb2tzQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tzQ29tcG9uZW50ID0gQm9va3NDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2suY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2suY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2suY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgYm9va19hZGRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQnKTtcclxudmFyIGJvb2tfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50Jyk7XHJcbnZhciBib29rX2VkaXRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50Jyk7XHJcbnZhciBib29rX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9ib29rLmNvbXBvbmVudCcpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxuZXhwb3J0cy5ib29rc1JvdXRlcyA9IFt7XHJcbiAgICAgICAgcGF0aDogJ3NwYS9ib29rcycsXHJcbiAgICAgICAgY29tcG9uZW50OiBib29rX2NvbXBvbmVudF8xLkJvb2tzQ29tcG9uZW50LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdsaXN0JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogYm9va19saXN0X2NvbXBvbmVudF8xLkJvb2tMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJzppZC9lZGl0JywgY29tcG9uZW50OiBib29rX2VkaXRfY29tcG9uZW50XzEuQm9va0VkaXRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYWRkJywgY29tcG9uZW50OiBib29rX2FkZF9jb21wb25lbnRfMS5Cb29rQWRkQ29tcG9uZW50IH1cclxuICAgICAgICBdXHJcbiAgICB9XTtcclxuZXhwb3J0cy5hcHBSb3V0aW5nUHJvdmlkZXJzID0gW107XHJcbmV4cG9ydHMuYm9va3NSb3V0aW5nID0gcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvckNoaWxkKGV4cG9ydHMuYm9va3NSb3V0ZXMpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rcy5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHdyaXRlcl9lZGl0X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudCcpO1xyXG52YXIgd3JpdGVyX2FkZF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGZvcm1zXzEgPSByZXF1aXJlKCdAYW5ndWxhci9mb3JtcycpO1xyXG52YXIgY29tbW9uXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21tb24nKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciB3cml0ZXJfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciB3cml0ZXJzX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vd3JpdGVycy5jb21wb25lbnRcIik7XHJcbnZhciB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgcGFnaW5hdG9yX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC1jb21wb25lbnQvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnRcIik7XHJcbnZhciBXcml0ZXJzTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlcnNNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJzTW9kdWxlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLk5nTW9kdWxlKHtcclxuICAgICAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICAgICAgY29tbW9uXzEuQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgcm91dGVyXzEuUm91dGVyTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgZm9ybXNfMS5Gb3Jtc01vZHVsZVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIHdyaXRlcnNfY29tcG9uZW50XzEuV3JpdGVyc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIHdyaXRlcl9saXN0X2NvbXBvbmVudF8xLldyaXRlckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXJfZWRpdF9jb21wb25lbnRfMS5Xcml0ZXJFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgd3JpdGVyX2FkZF9jb21wb25lbnRfMS5Xcml0ZXJBZGRDb21wb25lbnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEuV3JpdGVySHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIFdyaXRlcnNNb2R1bGUpO1xyXG4gICAgcmV0dXJuIFdyaXRlcnNNb2R1bGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyc01vZHVsZSA9IFdyaXRlcnNNb2R1bGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlcnMubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHdyaXRlcl9lZGl0X21vZGVsXzEgPSByZXF1aXJlKCcuLy4uLy4uLy4uL21vZGVsL3dyaXRlci1lZGl0Lm1vZGVsJyk7XHJcbnZhciB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCcpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgV3JpdGVyRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJFZGl0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGUsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIFdyaXRlckVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBfdGhpcy5pZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0V3JpdGVyQnlJZCh0aGlzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfZWRpdF9tb2RlbF8xLldyaXRlckVkaXRNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckVkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnB1dEN1c3RvbWVyKHRoaXMuaWQsIHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9lZGl0X21vZGVsXzEuV3JpdGVyRWRpdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3NwYS93cml0ZXJzL2xpc3RcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyRWRpdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXItZWRpdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlci1lZGl0LmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbd3JpdGVyX2h0dHBfc2VydmljZV8xLldyaXRlckh0dHBTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIFdyaXRlckVkaXRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlckVkaXRDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyRWRpdENvbXBvbmVudCA9IFdyaXRlckVkaXRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1lZGl0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIFdyaXRlckVkaXRNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJFZGl0TW9kZWwoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZGF0ZU9mQmlydGgsIGJpb2dyYXBoeSkge1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICB0aGlzLmRhdGVPZkJpcnRoID0gZGF0ZU9mQmlydGg7XHJcbiAgICAgICAgdGhpcy5iaW9ncmFwaHkgPSBiaW9ncmFwaHk7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJFZGl0TW9kZWwuZnJvbUpTT04gPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXcml0ZXJFZGl0TW9kZWwob2JqZWN0WydmaXJzdE5hbWUnXSwgb2JqZWN0WydsYXN0TmFtZSddLCBvYmplY3RbJ2RhdGVPZkJpcnRoJ10sIG9iamVjdFsnYmlvZ3JhcGh5J10pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckVkaXRNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBXcml0ZXJFZGl0TW9kZWwuZnJvbUpTT04ob2JqKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdyaXRlckVkaXRNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJFZGl0TW9kZWwgPSBXcml0ZXJFZGl0TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1lZGl0Lm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9tb2RlbC93cml0ZXItZWRpdC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCIpO1xyXG52YXIgaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2VcIik7XHJcbnJlcXVpcmUoJ3J4anMvUngnKTtcclxudmFyIFdyaXRlckh0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckh0dHBTZXJ2aWNlKF9odHRwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLmdldFdyaXRlckJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlciArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLmdldFNvcnRpbmdDdXN0b21lcnMgPSBmdW5jdGlvbiAoc29ydEJ5LCBvcmRlckJ5LCBwYWdlTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmdldChjb25maWdfMS5BcHBDb25maWcudXJscy53cml0ZXJcclxuICAgICAgICAgICAgKyBcIj9zb3J0T3JkZXI9XCIgKyBzb3J0QnkgKyBcIiZkaXJlY3Rpb249XCIgKyBvcmRlckJ5ICsgXCImcGFnZT1cIiArIHBhZ2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLmdldFdyaXRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmdldChjb25maWdfMS5BcHBDb25maWcudXJscy53cml0ZXIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLnBvc3RDdXN0b21lciA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3QoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyLCBkYXRhKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5wdXRDdXN0b21lciA9IGZ1bmN0aW9uIChpZCwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5wdXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyICsgXCIvXCIgKyBpZCwgZGF0YSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUuZGVsZXRlQ3VzdG9tZXIgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZGVsZXRlKGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlciArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBfc2VydmljZV8xLkh0dHBTZXJ2aWNlXSlcclxuICAgIF0sIFdyaXRlckh0dHBTZXJ2aWNlKTtcclxuICAgIHJldHVybiBXcml0ZXJIdHRwU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJIdHRwU2VydmljZSA9IFdyaXRlckh0dHBTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItaHR0cC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIChzdWJtaXQpPVxcXCJvblN1Ym1pdEZvcm0oKVxcXCIgKm5nSWY9XFxcIm1vZGVsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IG5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5maXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGVzdFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIj5MYXN0IG5hbWU6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwubGFzdE5hbWVcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZGF0ZU9mQmlydGhcXFwiPkRhdGUgb2YgYmlydGg6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XFxcIm1vZGVsLmRhdGVPZkJpcnRofCBkYXRlOid5eXl5LU1NLWRkJ1xcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJtb2RlbC5kYXRlT2ZCaXJ0aCA9ICRldmVudFxcXCIgbmFtZT1cXFwiZGF0ZU9mQmlydGhcXFwiIHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJiaW9ncmFwaHlcXFwiPkJpb2dyYXBoeTo8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIFsobmdNb2RlbCldPVxcXCJtb2RlbC5iaW9ncmFwaHlcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImJpb2dyYXBoeVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93cml0ZXItZWRpdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZVwiKTtcclxudmFyIHdyaXRlcl9hZGRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9tb2RlbC93cml0ZXItYWRkLm1vZGVsXCIpO1xyXG52YXIgV3JpdGVyQWRkQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckFkZENvbXBvbmVudChfaHR0cFNlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG4gICAgV3JpdGVyQWRkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IHdyaXRlcl9hZGRfbW9kZWxfMS5Xcml0ZXJBZGRNb2RlbChudWxsLCBudWxsLCBudWxsLCBudWxsKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJBZGRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3RDdXN0b21lcih0aGlzLm1vZGVsKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvc3BhL3dyaXRlcnMvbGlzdFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJBZGRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JpdGVyLWFkZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlci1hZGQuY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFt3cml0ZXJfaHR0cF9zZXJ2aWNlXzEuV3JpdGVySHR0cFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlcl0pXHJcbiAgICBdLCBXcml0ZXJBZGRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlckFkZENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJBZGRDb21wb25lbnQgPSBXcml0ZXJBZGRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1hZGQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgV3JpdGVyQWRkTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyQWRkTW9kZWwoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZGF0ZU9mQmlydGgsIGJpb2dyYXBoeSkge1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICB0aGlzLmRhdGVPZkJpcnRoID0gZGF0ZU9mQmlydGg7XHJcbiAgICAgICAgdGhpcy5iaW9ncmFwaHkgPSBiaW9ncmFwaHk7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJBZGRNb2RlbC5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFdyaXRlckFkZE1vZGVsKG9iamVjdFsnZmlyc3ROYW1lJ10sIG9iamVjdFsnbGFzdE5hbWUnXSwgb2JqZWN0WydkYXRlT2ZCaXJ0aCddLCBvYmplY3RbJ2Jpb2dyYXBoeSddKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJBZGRNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBXcml0ZXJBZGRNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV3JpdGVyQWRkTW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyQWRkTW9kZWwgPSBXcml0ZXJBZGRNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLWFkZC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWFkZC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIChzdWJtaXQpPVxcXCJvblN1Ym1pdEZvcm0oKVxcXCIgPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImZpcnN0TmFtZVxcXCI+Rmlyc3QgbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgbmFtZTo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5sYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJkYXRlT2ZCaXJ0aFxcXCI+RGF0ZSBvZiBiaXJ0aDo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5kYXRlT2ZCaXJ0aFxcXCIgbmFtZT1cXFwiZGF0ZU9mQmlydGhcXFwiIHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJiaW9ncmFwaHlcXFwiPkJpb2dyYXBoeTo8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIFsobmdNb2RlbCldPVxcXCJtb2RlbC5iaW9ncmFwaHlcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImJpb2dyYXBoeVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXHJcXG48L2Zvcm0+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93cml0ZXItYWRkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgd3JpdGVyX2xpc3RfbW9kZWxfMSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vbW9kZWwvd3JpdGVyLWxpc3QubW9kZWwnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIHdyaXRlcl9odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgcGFnaW5hdG9yX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC1jb21wb25lbnQvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnRcIik7XHJcbnZhciBXcml0ZXJMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckxpc3RDb21wb25lbnQoX2h0dHBTZXJ2aWNlLCBwYWdlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZSA9IF9odHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLnBhZ2VyU2VydmljZSA9IHBhZ2VyU2VydmljZTtcclxuICAgICAgICB0aGlzLmlzQWRkVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGFnZXIgPSB7fTtcclxuICAgIH1cclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0V3JpdGVycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9saXN0X21vZGVsXzEuV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgICAgIF90aGlzLl9zZXRQYWdlKDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHNodXJlID9cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZGVsZXRlQ3VzdG9tZXIoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHsgX3RoaXMubmdPbkluaXQoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoY29sdW1uTmFtZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZGlyZWN0aW9uID09ICdBU0MnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJERVNDXCI7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY29sdW1uID0gY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJBU0NcIjtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUuX3NldFBhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLm1vZGVsLnRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHRoaXMucGFnZXJTZXJ2aWNlLmdldFBhZ2VyKHRoaXMubW9kZWwucGFnZSwgdGhpcy5tb2RlbC5wYWdlU2l6ZSwgdGhpcy5tb2RlbC50b3RhbFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFNvcnRpbmdDdXN0b21lcnModGhpcy5tb2RlbC5jb2x1bW4sIHRoaXMubW9kZWwuZGlyZWN0aW9uLCB0aGlzLm1vZGVsLnBhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9saXN0X21vZGVsXzEuV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXItbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlci1saXN0LmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbd3JpdGVyX2h0dHBfc2VydmljZV8xLldyaXRlckh0dHBTZXJ2aWNlLCBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXSlcclxuICAgIF0sIFdyaXRlckxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTGlzdENvbXBvbmVudCA9IFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgd3JpdGVyX21vZGVsXzEgPSByZXF1aXJlKCcuL3dyaXRlci5tb2RlbCcpO1xyXG52YXIgV3JpdGVyTGlzdE1vZGVsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckxpc3RNb2RlbChmaWx0ZXIsIGNvbHVtbiwgZGlyZWN0aW9uLCBoYXNOZXh0UGFnZSwgaGFzUHJlUGFnZSwgcGFnZVNpemUsIHRvdGFsUGFnZSwgcGFnZSwgd3JpdGVyTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcclxuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmhhc05leHRQYWdlID0gaGFzTmV4dFBhZ2U7XHJcbiAgICAgICAgdGhpcy5oYXNQcmVQYWdlID0gaGFzUHJlUGFnZTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XHJcbiAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSB0b3RhbFBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLndyaXRlck1vZGVsID0gd3JpdGVyTW9kZWw7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJMaXN0TW9kZWwuZnJvbUpTT04gPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXcml0ZXJMaXN0TW9kZWwob2JqZWN0WydmaWx0ZXInXSwgb2JqZWN0WydvcmRlciddWydjb2x1bW4nXSwgb2JqZWN0WydvcmRlciddWydkaXJlY3Rpb24nXSwgb2JqZWN0WydoYXNOZXh0UGFnZSddLCBvYmplY3RbJ2hhc1ByZXZpb3VzUGFnZSddLCBvYmplY3RbJ3BhZ2VTaXplJ10sIG9iamVjdFsndG90YWxQYWdlcyddLCBvYmplY3RbJ3BhZ2UnXSwgd3JpdGVyX21vZGVsXzEuV3JpdGVyTW9kZWwuZnJvbUpTT05BcnJheShvYmplY3RbJ2l0ZW1zJ10pKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJMaXN0TW9kZWwuZnJvbUpTT05BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJMaXN0TW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTGlzdE1vZGVsID0gV3JpdGVyTGlzdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItbGlzdC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWxpc3QubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8YnI+XFxyXFxuPHA+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uLycsICdhZGQnXVxcXCI+QWRkIHdyaXRlcjwvYnV0dG9uPlxcclxcbjwvcD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjdXN0b21lci1saXN0LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtbmFtZVxcXCIgKGNsaWNrKT1cXFwic29ydCgnZnVsbE5hbWUnKTtcXFwiPkZ1bGwgTmFtZTwvdGg+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtZGF0ZVxcXCIgKGNsaWNrKT1cXFwic29ydCgnZGF0ZScpO1xcXCI+QmlydGhkYXRlPC90aD5cXHJcXG4gICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGUtY2VsbCB0YWJsZS1zdGF0dXNcXFwiPkJpb2dyYXBoeTwvdGg+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRib2R5IGNsYXNzPVxcXCJ0YWJsZS1yb3dcXFwiICpuZ0Zvcj1cXFwibGV0IGN1c3RvbWVyIG9mIG1vZGVsPy53cml0ZXJNb2RlbFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3tjdXN0b21lcj8uZnVsbE5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyPy5kYXRlT2ZCaXJ0aCB8IGRhdGU6ICdkZC9NTS95eXl5J319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7Y3VzdG9tZXI/LmJpb2dyYXBoeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uLycsIGN1c3RvbWVyLmlkLCAnZWRpdCddXFxcIj5FZGl0PC9hPnxcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImRlbGV0ZShjdXN0b21lci5pZClcXFwiPkRlbGV0ZTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT4gICAgXFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6aW5saW5lLWJsb2NrO1xcXCI+XFxyXFxuICAgICAgICA8dWwgKm5nSWY9XFxcInBhZ2VyPy5wYWdlcyAmJiBwYWdlcj8ucGFnZXM/Lmxlbmd0aFxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IDF9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UoMSlcXFwiPkZpcnN0PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gMX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlcj8uY3VycmVudFBhZ2UgLSAxKVxcXCI+UHJldmlvdXM8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwYWdlci5wYWdlc1xcXCIgW25nQ2xhc3NdPVxcXCJ7YWN0aXZlOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gcGFnZX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlKVxcXCI+e3twYWdlfX08L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IG1vZGVsPy50b3RhbFBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UocGFnZXIuY3VycmVudFBhZ2UgKyAxKVxcXCI+TmV4dDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IG1vZGVsPy50b3RhbFBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UobW9kZWw/LnRvdGFsUGFnZSlcXFwiPkxhc3Q8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG50aCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFibGUtc3RhdHVzIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBXcml0ZXJzQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlcnNDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJzQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBXcml0ZXJzQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyaXRlcnMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93cml0ZXJzLmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIFdyaXRlcnNDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlcnNDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyc0NvbXBvbmVudCA9IFdyaXRlcnNDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlcnMuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93cml0ZXJzLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciB3cml0ZXJfYWRkX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudCcpO1xyXG52YXIgd3JpdGVyX2VkaXRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50Jyk7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xyXG52YXIgd3JpdGVyX2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50XCIpO1xyXG52YXIgd3JpdGVyc19jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMuY29tcG9uZW50XCIpO1xyXG5leHBvcnRzLndyaXRlcnNSb3V0ZXMgPSBbe1xyXG4gICAgICAgIHBhdGg6ICdzcGEvd3JpdGVycycsXHJcbiAgICAgICAgY29tcG9uZW50OiB3cml0ZXJzX2NvbXBvbmVudF8xLldyaXRlcnNDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2xpc3QnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdsaXN0JywgY29tcG9uZW50OiB3cml0ZXJfbGlzdF9jb21wb25lbnRfMS5Xcml0ZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJzppZC9lZGl0JywgY29tcG9uZW50OiB3cml0ZXJfZWRpdF9jb21wb25lbnRfMS5Xcml0ZXJFZGl0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2FkZCcsIGNvbXBvbmVudDogd3JpdGVyX2FkZF9jb21wb25lbnRfMS5Xcml0ZXJBZGRDb21wb25lbnQgfVxyXG4gICAgICAgIF1cclxuICAgIH1dO1xyXG5leHBvcnRzLmFwcFJvdXRpbmdQcm92aWRlcnMgPSBbXTtcclxuZXhwb3J0cy53cml0ZXJzUm91dGluZyA9IHJvdXRlcl8xLlJvdXRlck1vZHVsZS5mb3JDaGlsZChleHBvcnRzLndyaXRlcnNSb3V0ZXMpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXJzLnJvdXRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIEFwcENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHBDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBBcHBDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQXBwQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBBcHBDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwQ29tcG9uZW50ID0gQXBwQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIE5hdk1lbnVDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmF2TWVudUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIE5hdk1lbnVDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICduYXYtbWVudScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIE5hdk1lbnVDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIE5hdk1lbnVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTmF2TWVudUNvbXBvbmVudCA9IE5hdk1lbnVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5hdm1lbnUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxyXFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9zcGEnXVxcXCI+V3JpdGVycyBJbmZvIExpc3Q8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3NwYS93cml0ZXJzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gV3JpdGVyc1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zcGEvYm9va3MnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCc+PC9zcGFuPiBCb29rc1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxubGkubGluay1hY3RpdmUgYSxcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxuLm1haW4tbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxuICAgIC5tYWluLW5hdiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXG4gICAgfVxcbiAgICAubmF2YmFyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciB1bCB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSBhIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGEge1xcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBIb21lQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEhvbWVDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBIb21lQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgSG9tZUNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gSG9tZUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Ib21lQ29tcG9uZW50ID0gSG9tZUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9tZS5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5Ib21lIG1vZGVsPC9oMT5cXHJcXG48aDI+V2VsY29tZSB0byBXcml0ZXJgcyBsaXN0IGFwcGxpY2F0aW9uPC9oMj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==