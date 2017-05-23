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
	        if (this.model.writerIds.length > 0)
	            this.isActive = true;
	        else
	            this.isActive = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWU4N2JjZDJmYTZhZDI5MDUzNGEiLCJ3ZWJwYWNrOi8vLy4vU1BBL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MubW9kdWxlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3NlbGVjdC1saXN0LWl0ZW0ubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcz8wYTBkIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3Mtc2hhcmVkL2Jvb2staHR0cC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLWJhc2UtdXJsLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktc2VydmVycy5lbnVtLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktcmVxdWVzdC11cmxzLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1J4XCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC9ib29rLWFkZC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtYWRkL2Jvb2stYWRkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50LmNzcz8xYzY4Iiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC9ib29rLWVkaXQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmNzcz9iYjZmIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLWVkaXQvYm9vay1lZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL2Jvb2stbGlzdC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL2Jvb2subW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC93cml0ZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcz80MmJlIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuY3NzPzM5OWQiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2suY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMubW9kdWxlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWVkaXQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcz8zZDNjIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3dyaXRlci1hZGQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5jc3M/ZDc3NiIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3dyaXRlci1saXN0Lm1vZGVsLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50LmNzcz81ODg5Iiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzP2U5MzgiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMucm91dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kMjNmIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWQ4ZSIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFD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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDOzs7Ozs7QUN0SkEsNkM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsNEM7Ozs7OztBQzlDQSxtRDs7Ozs7O0FDQUEscUQ7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsbUJBQW1CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0NBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQXlDLHlCQUF5QixHQUFHLHFIQUFxSCxnQ0FBZ0MsbUJBQW1CLEdBQUcsMkZBQTJGLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxpQkFBaUIsR0FBRywrQkFBK0IseUZBQXlGLHVCQUF1QixrQ0FBa0MsT0FBTyxlQUFlLDZCQUE2Qiw0QkFBNEIsdUJBQXVCLE9BQU8sc0JBQXNCLHNCQUFzQixPQUFPLHdCQUF3QixxQ0FBcUMsdUJBQXVCLE9BQU8sa0JBQWtCLHNCQUFzQixPQUFPLGtCQUFrQixzQkFBc0IsMEJBQTBCLHNCQUFzQixPQUFPLG9CQUFvQiw2QkFBNkIsNkJBQTZCLE9BQU8saUJBQWlCLG9GQUFvRiw4QkFBOEIsMkJBQTJCLGtDQUFrQyxPQUFPLEdBQUc7O0FBRXh2Qzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsMkM7Ozs7OztBQ3hCQSx3RiIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDllODdiY2QyZmE2YWQyOTA1MzRhIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vU1BBL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgYm9va3NfbW9kdWxlXzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYm9va3MvYm9va3MubW9kdWxlJyk7XHJcbnZhciBib29rc19yb3V0aW5nXzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYm9va3MvYm9va3Mucm91dGluZycpO1xyXG52YXIgc3RvcmFnZV9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlJyk7XHJcbnZhciBodHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UnKTtcclxudmFyIHdyaXRlcnNfbW9kdWxlXzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLm1vZHVsZScpO1xyXG52YXIgd3JpdGVyc19yb3V0aW5nXzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLnJvdXRpbmcnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBhbmd1bGFyMl91bml2ZXJzYWxfMSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXVuaXZlcnNhbCcpO1xyXG52YXIgYXBwX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Jyk7XHJcbnZhciBuYXZtZW51X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnKTtcclxudmFyIGhvbWVfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCcpO1xyXG52YXIgQXBwTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcE1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIEFwcE1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgICAgICAgICAgYXBwX2NvbXBvbmVudF8xLkFwcENvbXBvbmVudFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIGFwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBuYXZtZW51X2NvbXBvbmVudF8xLk5hdk1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBob21lX2NvbXBvbmVudF8xLkhvbWVDb21wb25lbnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBodHRwX3NlcnZpY2VfMS5IdHRwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2Vfc2VydmljZV8xLlN0b3JhZ2VTZXJ2aWNlXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgIGFuZ3VsYXIyX3VuaXZlcnNhbF8xLlVuaXZlcnNhbE1vZHVsZSxcclxuICAgICAgICAgICAgICAgIHdyaXRlcnNfbW9kdWxlXzEuV3JpdGVyc01vZHVsZSxcclxuICAgICAgICAgICAgICAgIGJvb2tzX21vZHVsZV8xLkJvb2tzTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdzcGEnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJ3NwYScsIGNvbXBvbmVudDogaG9tZV9jb21wb25lbnRfMS5Ib21lQ29tcG9uZW50IH1cclxuICAgICAgICAgICAgICAgIF0uY29uY2F0KHdyaXRlcnNfcm91dGluZ18xLndyaXRlcnNSb3V0ZXMsIGJvb2tzX3JvdXRpbmdfMS5ib29rc1JvdXRlcywgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ3NwYScgfVxyXG4gICAgICAgICAgICAgICAgXSkpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIEFwcE1vZHVsZSk7XHJcbiAgICByZXR1cm4gQXBwTW9kdWxlO1xyXG59KCkpO1xyXG5leHBvcnRzLkFwcE1vZHVsZSA9IEFwcE1vZHVsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLm1vZHVsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvYXBwLm1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBhdXRvY29tcGxldGVfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuLy4uLy4uL3NoYXJlZC1jb21wb25lbnQvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnKTtcclxudmFyIGJvb2tfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuL2Jvb2tzLXNoYXJlZC9ib29rLWh0dHAuc2VydmljZScpO1xyXG52YXIgYm9va19hZGRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQnKTtcclxudmFyIGJvb2tfZWRpdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQnKTtcclxudmFyIGJvb2tfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50Jyk7XHJcbnZhciBib29rX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9ib29rLmNvbXBvbmVudCcpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgZm9ybXNfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2Zvcm1zJyk7XHJcbnZhciBjb21tb25fMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbW1vbicpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIHBhZ2luYXRvcl9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQtY29tcG9uZW50L3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50XCIpO1xyXG52YXIgQm9va3NNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va3NNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBCb29rc01vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgIGNvbW1vbl8xLkNvbW1vbk1vZHVsZSxcclxuICAgICAgICAgICAgICAgIHJvdXRlcl8xLlJvdXRlck1vZHVsZSxcclxuICAgICAgICAgICAgICAgIGZvcm1zXzEuRm9ybXNNb2R1bGVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBib29rX2NvbXBvbmVudF8xLkJvb2tzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgYm9va19saXN0X2NvbXBvbmVudF8xLkJvb2tMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgYm9va19lZGl0X2NvbXBvbmVudF8xLkJvb2tFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgYm9va19hZGRfY29tcG9uZW50XzEuQm9va0FkZENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZV9jb21wb25lbnRfMS5BdXRvY29tcGxldGVDb21wb25lbnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBib29rX2h0dHBfc2VydmljZV8xLkJvb2tIdHRwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRvcl9jb21wb25lbnRfMS5QYWdlclNlcnZpY2VcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQm9va3NNb2R1bGUpO1xyXG4gICAgcmV0dXJuIEJvb2tzTW9kdWxlO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tzTW9kdWxlID0gQm9va3NNb2R1bGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2tzLm1vZHVsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgc2VsZWN0X2xpc3RfaXRlbV9tb2RlbF8xID0gcmVxdWlyZSgnLi8uLi8uLi9tb2RlbC9zZWxlY3QtbGlzdC1pdGVtLm1vZGVsJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBBdXRvY29tcGxldGVDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXV0b2NvbXBsZXRlQ29tcG9uZW50KG15RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuSWRzID0gW107XHJcbiAgICAgICAgdGhpcy53cml0ZXJzSWRzQ2hhbmdlZCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy53cml0ZXJJZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gJyc7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gbXlFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJZHggPSAtMTtcclxuICAgIH1cclxuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuSWRzICE9PSBudWxsICYmIHRoaXMuaXRlbXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMuSWRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuaXRlbXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHcudmFsdWUgPT0gdGhpcy5JZHNbX2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChuZXcgc2VsZWN0X2xpc3RfaXRlbV9tb2RlbF8xLlNlbGVjdExpc3RJdGVtKHcudmFsdWUsIHcudGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbC50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUuY2hlY2tlciA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuc2VsZWN0ZWQ7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gX2FbX2ldO1xyXG4gICAgICAgICAgICBpZiAoZS52YWx1ZSA9PSBpdGVtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9ICcnO1xyXG4gICAgICAgIHRoaXMud3JpdGVySWRzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuc2VsZWN0ZWQ7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB3ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlcklkcy5wdXNoKHcudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyaXRlcnNJZHNDaGFuZ2VkLmVtaXQodGhpcy53cml0ZXJJZHMpO1xyXG4gICAgfTtcclxuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLnNwbGljZSh0aGlzLnNlbGVjdGVkLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5pdGVtcztcclxuICAgICAgICB0aGlzLndyaXRlcklkcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLnNlbGVjdGVkOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgdyA9IF9hW19pXTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZXJJZHMucHVzaCh3LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZXJzSWRzQ2hhbmdlZC5lbWl0KHRoaXMud3JpdGVySWRzKTtcclxuICAgIH07XHJcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJZHggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5maWx0ZXJlZExpc3RbdGhpcy5zZWxlY3RlZElkeF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJZHggPSAtMTtcclxuICAgIH07XHJcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIHZhciBjbGlja2VkQ29tcG9uZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHZhciBpbnNpZGUgPSBmYWxzZTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmIChjbGlja2VkQ29tcG9uZW50ID09PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW5zaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50ID0gY2xpY2tlZENvbXBvbmVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH0gd2hpbGUgKGNsaWNrZWRDb21wb25lbnQpO1xyXG4gICAgICAgIGlmICghaW5zaWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJZHggPSAtMTtcclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5wdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBBcnJheSlcclxuICAgIF0sIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiaXRlbXNcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbnB1dCgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246dHlwZScsIEFycmF5KVxyXG4gICAgXSwgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJJZHNcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5PdXRwdXQoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnR5cGUnLCBPYmplY3QpXHJcbiAgICBdLCBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLCBcIndyaXRlcnNJZHNDaGFuZ2VkXCIsIHZvaWQgMCk7XHJcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdhcHAtYXV0b2NvbXBsZXRlJyxcclxuICAgICAgICAgICAgaG9zdDoge1xyXG4gICAgICAgICAgICAgICAgJyhkb2N1bWVudDpjbGljayknOiAnaGFuZGxlQ2xpY2soJGV2ZW50KScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2NvcmVfMS5FbGVtZW50UmVmXSlcclxuICAgIF0sIEF1dG9jb21wbGV0ZUNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gQXV0b2NvbXBsZXRlQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkF1dG9jb21wbGV0ZUNvbXBvbmVudCA9IEF1dG9jb21wbGV0ZUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIFNlbGVjdExpc3RJdGVtID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNlbGVjdExpc3RJdGVtKHZhbHVlLCB0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbiAgICBTZWxlY3RMaXN0SXRlbS5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdExpc3RJdGVtKCtvYmplY3RbJ3ZhbHVlJ10sIG9iamVjdFsndGV4dCddKTtcclxuICAgIH07XHJcbiAgICBTZWxlY3RMaXN0SXRlbS5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBTZWxlY3RMaXN0SXRlbS5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VsZWN0TGlzdEl0ZW07XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2VsZWN0TGlzdEl0ZW0gPSBTZWxlY3RMaXN0SXRlbTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VsZWN0LWxpc3QtaXRlbS5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvc2VsZWN0LWxpc3QtaXRlbS5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaW5wdXQtZmllbGQgY29sIHMxMlxcXCI+XFxyXFxuICAgIDxpbnB1dCBpZD1cXFwiY291bnRyeVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcInZhbGlkYXRlIGZpbHRlci1pbnB1dFxcXCIgWyhuZ01vZGVsKV09cXVlcnkgKGtleXVwKT1maWx0ZXIoKT5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJzdWdnZXN0aW9uc1xcXCIgKm5nSWY9XFxcImZpbHRlcmVkTGlzdD8ubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgIDx1bCAgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBmaWx0ZXJlZExpc3RcXFwiPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXSA9XFxcInsnZGlzYWJsZWQnOiBjaGVja2VyKGl0ZW0pfVxcXCIgKGNsaWNrKT1cXFwic2VsZWN0KGl0ZW0pXFxcIj57e2l0ZW0udGV4dH19PC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2Ygc2VsZWN0ZWRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3RlZFxcXCI+XFxyXFxuICAgICAgICA8c3Bhbj57e2l0ZW0udGV4dH19PC9zcGFuPlxcclxcbiAgICAgICAgPGEgKGNsaWNrKT1cXFwicmVtb3ZlKGl0ZW0pXFxcIj54PC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdWdnZXN0aW9uc3tcXHJcXG5cXHRib3JkZXI6c29saWQgMXB4ICNmMWYxZjE7XFxyXFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxyXFxuXFx0d2lkdGg6NjAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogLTI1cHggMCAwcHggMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWdnZXN0aW9ucyB1bHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJ7XFxyXFxuXFx0d2lkdGg6NjAwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6MTBweDtcXHJcXG5cXHRtYXJnaW4tdG9wOjEwcHg7XFxyXFxufVxcclxcbi5zdWdnZXN0aW9ucyB1bCBsaXtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Z2dlc3Rpb25zIHVsIGxpIGF7XFxyXFxuXFx0cGFkZGluZzo1cHg7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGNvbG9yOiM3RTdFN0U7XFxyXFxufVxcclxcblxcclxcbi5zdWdnZXN0aW9ucyB1bCBsaSBhOmhvdmVye1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcbi5zZWxlY3RlZCBhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbnVsIGF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRpc2FibGVke1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNlMGUwZTAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiKTtcclxudmFyIGh0dHBfc2VydmljZV8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvaHR0cC5zZXJ2aWNlXCIpO1xyXG5yZXF1aXJlKCdyeGpzL1J4Jyk7XHJcbnZhciBCb29rSHR0cFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va0h0dHBTZXJ2aWNlKF9odHRwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgQm9va0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRCb29rQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5nZXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMuYm9va3MgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIEJvb2tIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0U29ydGluZ0Jvb2tzID0gZnVuY3Rpb24gKHNvcnRCeSwgb3JkZXJCeSwgcGFnZU51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5nZXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMuZ2V0QWxsQm9va1xyXG4gICAgICAgICAgICArIFwiP3NvcnRPcmRlcj1cIiArIHNvcnRCeSArIFwiJmRpcmVjdGlvbj1cIiArIG9yZGVyQnkgKyBcIiZwYWdlPVwiICsgcGFnZU51bWJlcilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBCb29rSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldEJvb2tzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5nZXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMuY3JlYXRlQm9vaylcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBCb29rSHR0cFNlcnZpY2UucHJvdG90eXBlLnBvc3RDdXN0b21lciA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3QoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMuYm9va3MsIGRhdGEpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzOyB9KTtcclxuICAgIH07XHJcbiAgICBCb29rSHR0cFNlcnZpY2UucHJvdG90eXBlLnB1dEN1c3RvbWVyID0gZnVuY3Rpb24gKGlkLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLnB1dChjb25maWdfMS5BcHBDb25maWcudXJscy5ib29rcyArIFwiL1wiICsgaWQsIGRhdGEpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzOyB9KTtcclxuICAgIH07XHJcbiAgICBCb29rSHR0cFNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZUN1c3RvbWVyID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmRlbGV0ZShjb25maWdfMS5BcHBDb25maWcudXJscy5ib29rcyArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzOyB9KTtcclxuICAgIH07XHJcbiAgICBCb29rSHR0cFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtodHRwX3NlcnZpY2VfMS5IdHRwU2VydmljZV0pXHJcbiAgICBdLCBCb29rSHR0cFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIEJvb2tIdHRwU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29rSHR0cFNlcnZpY2UgPSBCb29rSHR0cFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2staHR0cC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLXNoYXJlZC9ib29rLWh0dHAuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhcGlfYmFzZV91cmxfMSA9IHJlcXVpcmUoJy4vc2hhcmVkL2FwaS1iYXNlLXVybCcpO1xyXG52YXIgYXBpX3JlcXVlc3RfdXJsc18xID0gcmVxdWlyZSgnLi9zaGFyZWQvYXBpLXJlcXVlc3QtdXJscycpO1xyXG52YXIgYXBpX3NlcnZlcnNfZW51bV8xID0gcmVxdWlyZShcIi4vc2hhcmVkL2FwaS1zZXJ2ZXJzLmVudW1cIik7XHJcbnZhciBBcHBDb25maWcgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwQ29uZmlnKCkge1xyXG4gICAgfVxyXG4gICAgQXBwQ29uZmlnLmFwaVVybCA9IGFwaV9iYXNlX3VybF8xLkFwaUJhc2VVcmwuZ2V0KGFwaV9zZXJ2ZXJzX2VudW1fMS5BcGlTZXJ2ZXJzLmRldik7XHJcbiAgICBBcHBDb25maWcudXJscyA9IGFwaV9yZXF1ZXN0X3VybHNfMS5BcGlSZXF1ZXN0VXJscy51cmxzO1xyXG4gICAgQXBwQ29uZmlnLnByb2plY3ROYW1lID0gJ1dyaXRlckFwcCc7XHJcbiAgICByZXR1cm4gQXBwQ29uZmlnO1xyXG59KCkpO1xyXG5leHBvcnRzLkFwcENvbmZpZyA9IEFwcENvbmZpZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb25maWcvY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGFwaV9zZXJ2ZXJzX2VudW1fMSA9IHJlcXVpcmUoXCIuL2FwaS1zZXJ2ZXJzLmVudW1cIik7XHJcbnZhciBBcGlCYXNlVXJsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwaUJhc2VVcmwoKSB7XHJcbiAgICB9XHJcbiAgICBBcGlCYXNlVXJsLmdldCA9IGZ1bmN0aW9uIChlbnYpIHtcclxuICAgICAgICBzd2l0Y2ggKGVudikge1xyXG4gICAgICAgICAgICBjYXNlIGFwaV9zZXJ2ZXJzX2VudW1fMS5BcGlTZXJ2ZXJzLmRldjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcvYXBpLyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwaUJhc2VVcmw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBpQmFzZVVybCA9IEFwaUJhc2VVcmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS1iYXNlLXVybC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktYmFzZS11cmwuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG4oZnVuY3Rpb24gKEFwaVNlcnZlcnMpIHtcclxuICAgIEFwaVNlcnZlcnNbQXBpU2VydmVyc1tcInN0YWlnaW5nXCJdID0gMV0gPSBcInN0YWlnaW5nXCI7XHJcbiAgICBBcGlTZXJ2ZXJzW0FwaVNlcnZlcnNbXCJ0ZXN0XCJdID0gMl0gPSBcInRlc3RcIjtcclxuICAgIEFwaVNlcnZlcnNbQXBpU2VydmVyc1tcImRldlwiXSA9IDNdID0gXCJkZXZcIjtcclxufSkoZXhwb3J0cy5BcGlTZXJ2ZXJzIHx8IChleHBvcnRzLkFwaVNlcnZlcnMgPSB7fSkpO1xyXG52YXIgQXBpU2VydmVycyA9IGV4cG9ydHMuQXBpU2VydmVycztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLXNlcnZlcnMuZW51bS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktc2VydmVycy5lbnVtLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIEFwaVJlcXVlc3RVcmxzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwaVJlcXVlc3RVcmxzKCkge1xyXG4gICAgfVxyXG4gICAgQXBpUmVxdWVzdFVybHMudXJscyA9IHtcclxuICAgICAgICAnd3JpdGVyJzogJ3dyaXRlcicsXHJcbiAgICAgICAgJ2Jvb2tzJzogJ2Jvb2tzJyxcclxuICAgICAgICAnY3JlYXRlQm9vayc6ICdib29rcy9jcmVhdGUnLFxyXG4gICAgICAgICdnZXRBbGxCb29rJzogJ2Jvb2tzL2dldCdcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBpUmVxdWVzdFVybHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBpUmVxdWVzdFVybHMgPSBBcGlSZXF1ZXN0VXJscztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLXJlcXVlc3QtdXJscy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktcmVxdWVzdC11cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCdyeGpzL09ic2VydmFibGUnKTtcclxudmFyIGNvbmZpZ18xID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcvY29uZmlnJyk7XHJcbnZhciBzdG9yYWdlX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vc3RvcmFnZS5zZXJ2aWNlJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL21hcCcpO1xyXG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCcpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2h0dHAnKTtcclxudmFyIEh0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEh0dHBTZXJ2aWNlKF9odHRwLCBfc3RvcmFnZSwgX3JvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHAgPSBfaHR0cDtcclxuICAgICAgICB0aGlzLl9zdG9yYWdlID0gX3N0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyID0gX3JvdXRlcjtcclxuICAgIH1cclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5wcmVwYXJlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzUmF3KSB7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcclxuICAgICAgICBpZiAoaGVhZGVyc1JhdyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyc1Jhdy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChpdGVtLmtleSwgaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fc3RvcmFnZS5rZXlzLmFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdiZWFyZXIgJyArIHRva2VuKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH07XHJcbiAgICAvKiA9PT09PT09PT09PT09PT0gTUVUSE9EUyA9PT09PT09PT09PT09PT1cclxuICAgIGRhdGFSYXcgICAgIC0gcmVndWxhciBKUyBvYmplY3RcclxuICAgIGhlYWRlcnNSYXcgIC0gb2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyBoZWFkZXJzXHJcbiAgICAqL1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5oZWFkZXJzUmF3LCBoZWFkZXJzUmF3ID0gX2MgPT09IHZvaWQgMCA/IG51bGwgOiBfYywgX2QgPSBfYi5zaG93TG9hZGVyLCBzaG93TG9hZGVyID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZDtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHRoaXMucHJlcGFyZUhlYWRlcnMoaGVhZGVyc1Jhdyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLmdldChjb25maWdfMS5BcHBDb25maWcuYXBpVXJsICsgdXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW50ZXJjZXB0KGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGFSYXcsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5oZWFkZXJzUmF3LCBoZWFkZXJzUmF3ID0gX2MgPT09IHZvaWQgMCA/IG51bGwgOiBfYywgX2QgPSBfYi5zaG93TG9hZGVyLCBzaG93TG9hZGVyID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZCwgX2UgPSBfYi5zdHJpbmdpZnlEYXRhLCBzdHJpbmdpZnlEYXRhID0gX2UgPT09IHZvaWQgMCA/IHRydWUgOiBfZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHRoaXMucHJlcGFyZUhlYWRlcnMoaGVhZGVyc1Jhdyk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xyXG4gICAgICAgIGlmIChzdHJpbmdpZnlEYXRhKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhUmF3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLnBvc3QoY29uZmlnXzEuQXBwQ29uZmlnLmFwaVVybCArIHVybCwgZGF0YSB8fCBkYXRhUmF3LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW50ZXJjZXB0KGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKHVybCwgZGF0YVJhdywgX2EpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLmhlYWRlcnNSYXcsIGhlYWRlcnNSYXcgPSBfYyA9PT0gdm9pZCAwID8gbnVsbCA6IF9jLCBfZCA9IF9iLnNob3dMb2FkZXIsIHNob3dMb2FkZXIgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5wcmVwYXJlSGVhZGVycyhoZWFkZXJzUmF3KTtcclxuICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGFSYXcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgICAgICAgIC5wdXQoY29uZmlnXzEuQXBwQ29uZmlnLmFwaVVybCArIHVybCwgZGF0YSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmludGVyY2VwdChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmwsIF9hKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2IgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLnNob3dMb2FkZXIsIHNob3dMb2FkZXIgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5wcmVwYXJlSGVhZGVycyhudWxsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAgICAgICAuZGVsZXRlKGNvbmZpZ18xLkFwcENvbmZpZy5hcGlVcmwgKyB1cmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5pbnRlcmNlcHQoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvc3BhJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3N0b3JhZ2Uua2V5cy51c2VyKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3N0b3JhZ2Uua2V5cy5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9zdG9yYWdlLmtleXMuZXhwaXJlc0luKTtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3NwYSddKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUuZm9ybUVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSAnT29wcywgc29tZXRoaW5nIHdyb25nISc7XHJcbiAgICAgICAgdmFyIHNlcnZlckVycm9ycyA9IFtdO1xyXG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5fYm9keSkge1xyXG4gICAgICAgICAgICBzZXJ2ZXJFcnJvcnMgPSBKU09OLnBhcnNlKGVycm9yLl9ib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZXMgPSBbXTtcclxuICAgICAgICBpZiAoISFzZXJ2ZXJFcnJvcnMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzZXJ2ZXJFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXJFcnJvcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNlcnZlckVycm9yc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goc2VydmVyRXJyb3JzW2ldWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VzLmpvaW4oJywgJyk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBfMS5IdHRwLCBzdG9yYWdlX3NlcnZpY2VfMS5TdG9yYWdlU2VydmljZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIEh0dHBTZXJ2aWNlKTtcclxuICAgIHJldHVybiBIdHRwU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5IdHRwU2VydmljZSA9IEh0dHBTZXJ2aWNlO1xyXG47XHJcbjtcclxuO1xyXG47XHJcbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL2h0dHAuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvbmZpZ18xID0gcmVxdWlyZSgnLi8uLi8uLi9jb25maWcvY29uZmlnJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBTdG9yYWdlU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdG9yYWdlU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmtleXMgPSB7XHJcbiAgICAgICAgICAgICd1c2VyJzogJ3VzZXInLFxyXG4gICAgICAgICAgICAnYWNjZXNzVG9rZW4nOiAnQWNjZXNzVG9rZW4nLFxyXG4gICAgICAgICAgICAnZXhwaXJlc0luJzogJ0V4cGlyZXNJbicsXHJcbiAgICAgICAgICAgICdsYW5ndWFnZSc6ICdsYW5nJyxcclxuICAgICAgICAgICAgJ2xvZ2luQ3JlZGVudGlhbHMnOiAnbG9naW5DcmVkZW50aWFscydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMua2V5UHJlZml4ID0gY29uZmlnXzEuQXBwQ29uZmlnLnByb2plY3ROYW1lO1xyXG4gICAgfVxyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLl9nZXRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAga2V5ID0ga2V5LnRyaW0oKTtcclxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlQcmVmaXggKyBcIl9cIiArIGtleTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuc2V0SXRlbSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fZ2V0S2V5KGtleSksIHZhbHVlKTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9O1xyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fZ2V0S2V5KGtleSkpO1xyXG4gICAgfTtcclxuICAgIFN0b3JhZ2VTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIFN0b3JhZ2VTZXJ2aWNlKTtcclxuICAgIHJldHVybiBTdG9yYWdlU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5TdG9yYWdlU2VydmljZSA9IFN0b3JhZ2VTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdG9yYWdlLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9SeFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGJvb2tfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vYm9va3Mtc2hhcmVkL2Jvb2staHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgYm9va19hZGRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9tb2RlbC9ib29rLWFkZC5tb2RlbFwiKTtcclxudmFyIEJvb2tBZGRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va0FkZENvbXBvbmVudChfaHR0cFNlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG4gICAgQm9va0FkZENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IGJvb2tfYWRkX21vZGVsXzEuQm9va0FkZE1vZGVsKG51bGwsIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldEJvb2tzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gYm9va19hZGRfbW9kZWxfMS5Cb29rQWRkTW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCb29rQWRkQ29tcG9uZW50LnByb3RvdHlwZS5nZXRJZHMgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC53cml0ZXJJZHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbF8xID0gdmFsOyBfaSA8IHZhbF8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgYSA9IHZhbF8xW19pXTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC53cml0ZXJJZHMucHVzaChhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwud3JpdGVySWRzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEJvb2tBZGRDb21wb25lbnQucHJvdG90eXBlLmNoZWNrZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwud3JpdGVySWRzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLndyaXRlcklkcy5sZW5ndGggPiAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIEJvb2tBZGRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLndyaXRlcklkcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLndyaXRlcklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0Q3VzdG9tZXIodGhpcy5tb2RlbClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9zcGEvYm9va3MvbGlzdFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nob29zZSB3cml0ZXJgcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnQ2hvb3NlIHdyaXRlcmBzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tBZGRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9vay1hZGQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ib29rLWFkZC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2Jvb2tfaHR0cF9zZXJ2aWNlXzEuQm9va0h0dHBTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG4gICAgXSwgQm9va0FkZENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gQm9va0FkZENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29rQWRkQ29tcG9uZW50ID0gQm9va0FkZENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vay1hZGQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgc2VsZWN0X2xpc3RfaXRlbV9tb2RlbF8xID0gcmVxdWlyZSgnLi9zZWxlY3QtbGlzdC1pdGVtLm1vZGVsJyk7XHJcbnZhciBCb29rQWRkTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va0FkZE1vZGVsKGNhcHRpb24sIHB1Ymxpc2hlZERhdGUsIHdyaXRlcklkcywgd3JpdGVycykge1xyXG4gICAgICAgIGlmICh3cml0ZXJJZHMgPT09IHZvaWQgMCkgeyB3cml0ZXJJZHMgPSBbXTsgfVxyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IGNhcHRpb247XHJcbiAgICAgICAgdGhpcy5wdWJsaXNoZWREYXRlID0gcHVibGlzaGVkRGF0ZTtcclxuICAgICAgICB0aGlzLndyaXRlcklkcyA9IHdyaXRlcklkcztcclxuICAgICAgICB0aGlzLndyaXRlcnMgPSB3cml0ZXJzO1xyXG4gICAgfVxyXG4gICAgQm9va0FkZE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9va0FkZE1vZGVsKG9iamVjdFsnY2FwdGlvbiddLCBvYmplY3RbJ3B1Ymxpc2hEYXRlJ10sIG9iamVjdFsnd3JpdGVySWRzJ10sIHNlbGVjdF9saXN0X2l0ZW1fbW9kZWxfMS5TZWxlY3RMaXN0SXRlbS5mcm9tSlNPTkFycmF5KG9iamVjdFsnd3JpdGVycyddKSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0FkZE1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIEJvb2tBZGRNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9va0FkZE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tBZGRNb2RlbCA9IEJvb2tBZGRNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vay1hZGQubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL2Jvb2stYWRkLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gKHN1Ym1pdCk9XFxcIm9uU3VibWl0Rm9ybSgpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkNhcHRpb246PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwuY2FwdGlvblxcXCIgbmFtZT1cXFwiY2FwdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIj5QdWJsaXNoIGRhdGU6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwucHVibGlzaGVkRGF0ZVxcXCIgbmFtZT1cXFwicHVibGlzaGVkRGF0ZVxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJpb2dyYXBoeVxcXCI+V3JpdGVyczo8L2xhYmVsPlxcclxcbiAgICAgICAgPGFwcC1hdXRvY29tcGxldGUgKHdyaXRlcnNJZHNDaGFuZ2VkKT1cXFwiZ2V0SWRzKCRldmVudClcXFwiIFtJZHNdID0gXFxcIm1vZGVsLndyaXRlcklkc1xcXCIgW2l0ZW1zXT1cXFwibW9kZWwud3JpdGVyc1xcXCIgcmVxdWlyZWQ+PC9hcHAtYXV0b2NvbXBsZXRlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2stYWRkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgYm9va19lZGl0X21vZGVsXzEgPSByZXF1aXJlKCcuLy4uLy4uLy4uL21vZGVsL2Jvb2stZWRpdC5tb2RlbCcpO1xyXG52YXIgYm9va19odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9ib29rcy1zaGFyZWQvYm9vay1odHRwLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xyXG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIEJvb2tFZGl0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tFZGl0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGUsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIEJvb2tFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgX3RoaXMuaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldEJvb2tCeUlkKHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IGJvb2tfZWRpdF9tb2RlbF8xLkJvb2tFZGl0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCb29rRWRpdENvbXBvbmVudC5wcm90b3R5cGUuZ2V0SWRzID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwud3JpdGVySWRzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWxfMSA9IHZhbDsgX2kgPCB2YWxfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGEgPSB2YWxfMVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwud3JpdGVySWRzLnB1c2goYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC53cml0ZXJJZHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC53cml0ZXJJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucHV0Q3VzdG9tZXIodGhpcy5pZCwgdGhpcy5tb2RlbClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9zcGEvYm9va3MvbGlzdFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nob29zZSB3cml0ZXJgcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnQ2hvb3NlIHdyaXRlcmBzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Jvb2stZWRpdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Jvb2stZWRpdC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2Jvb2tfaHR0cF9zZXJ2aWNlXzEuQm9va0h0dHBTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIEJvb2tFZGl0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBCb29rRWRpdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29rRWRpdENvbXBvbmVudCA9IEJvb2tFZGl0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWVkaXQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIHNlbGVjdF9saXN0X2l0ZW1fbW9kZWxfMSA9IHJlcXVpcmUoJy4vc2VsZWN0LWxpc3QtaXRlbS5tb2RlbCcpO1xyXG52YXIgQm9va0VkaXRNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb29rRWRpdE1vZGVsKGlkLCBjYXB0aW9uLCBwdWJsaXNoZWREYXRlLCB3cml0ZXJJZHMsIHdyaXRlck1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IGNhcHRpb247XHJcbiAgICAgICAgdGhpcy5wdWJsaXNoZWREYXRlID0gcHVibGlzaGVkRGF0ZTtcclxuICAgICAgICB0aGlzLndyaXRlcklkcyA9IHdyaXRlcklkcztcclxuICAgICAgICB0aGlzLndyaXRlck1vZGVsID0gd3JpdGVyTW9kZWw7XHJcbiAgICB9XHJcbiAgICBCb29rRWRpdE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9va0VkaXRNb2RlbChvYmplY3RbJ2lkJ10sIG9iamVjdFsnY2FwdGlvbiddLCBvYmplY3RbJ3B1Ymxpc2hlZERhdGUnXSwgb2JqZWN0Wyd3cml0ZXJJZHMnXSwgc2VsZWN0X2xpc3RfaXRlbV9tb2RlbF8xLlNlbGVjdExpc3RJdGVtLmZyb21KU09OQXJyYXkob2JqZWN0Wyd3cml0ZXJzJ10pKTtcclxuICAgIH07XHJcbiAgICBCb29rRWRpdE1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIEJvb2tFZGl0TW9kZWwuZnJvbUpTT04ob2JqKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJvb2tFZGl0TW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQm9va0VkaXRNb2RlbCA9IEJvb2tFZGl0TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2stZWRpdC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvYm9vay1lZGl0Lm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxmb3JtIChzdWJtaXQpPVxcXCJvblN1Ym1pdEZvcm0oKVxcXCIgKm5nSWY9XFxcIm1vZGVsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkNhcHRpb246PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwuY2FwdGlvblxcXCIgbmFtZT1cXFwiY2FwdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInB1Ymxpc2hlZERhdGVcXFwiPlB1Ymxpc2ggZGF0ZTo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cXFwibW9kZWwucHVibGlzaGVkRGF0ZXwgZGF0ZToneXl5eS1NTS1kZCdcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwibW9kZWwucHVibGlzaGVkRGF0ZSA9ICRldmVudFxcXCIgbmFtZT1cXFwicHVibGlzaGVkRGF0ZVxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcIndyaXRlcnNcXFwiPldyaXRlcnM6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxhcHAtYXV0b2NvbXBsZXRlICh3cml0ZXJzSWRzQ2hhbmdlZCk9XFxcImdldElkcygkZXZlbnQpXFxcIiBbSWRzXSA9IFxcXCJtb2RlbC53cml0ZXJJZHNcXFwiIFtpdGVtc109XFxcIm1vZGVsLndyaXRlck1vZGVsXFxcIj48L2FwcC1hdXRvY29tcGxldGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+U3VibWl0PC9idXR0b24+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2stZWRpdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLWVkaXQvYm9vay1lZGl0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgYm9va19odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4vLi4vYm9va3Mtc2hhcmVkL2Jvb2staHR0cC5zZXJ2aWNlJyk7XHJcbnZhciBib29rX2xpc3RfbW9kZWxfMSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vbW9kZWwvYm9vay1saXN0Lm1vZGVsJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBwYWdpbmF0b3JfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudFwiKTtcclxudmFyIEJvb2tMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tMaXN0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcGFnZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UgPSBfaHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5wYWdlclNlcnZpY2UgPSBwYWdlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5pc0FkZFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhZ2VyID0ge307XHJcbiAgICB9XHJcbiAgICBCb29rTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRTb3J0aW5nQm9va3MoJ2NhcHRpb24nLCAnQVNDJywgMSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gYm9va19saXN0X21vZGVsXzEuQm9va0xpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICBfdGhpcy5fc2V0UGFnZSgxKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCb29rTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc2h1cmUgP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9odHRwU2VydmljZS5kZWxldGVDdXN0b21lcihpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykgeyBfdGhpcy5uZ09uSW5pdCgpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQm9va0xpc3RDb21wb25lbnQucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoY29sdW1uTmFtZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZGlyZWN0aW9uID09ICdBU0MnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJERVNDXCI7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY29sdW1uID0gY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0Jvb2tzKHRoaXMubW9kZWwuY29sdW1uLCB0aGlzLm1vZGVsLmRpcmVjdGlvbiwgdGhpcy5tb2RlbC5wYWdlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5tb2RlbCA9IGJvb2tfbGlzdF9tb2RlbF8xLkJvb2tMaXN0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRpcmVjdGlvbiA9IFwiQVNDXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFNvcnRpbmdCb29rcyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSBib29rX2xpc3RfbW9kZWxfMS5Cb29rTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCb29rTGlzdENvbXBvbmVudC5wcm90b3R5cGUuX3NldFBhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLm1vZGVsLnRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHRoaXMucGFnZXJTZXJ2aWNlLmdldFBhZ2VyKHRoaXMubW9kZWwucGFnZSwgdGhpcy5tb2RlbC5wYWdlU2l6ZSwgdGhpcy5tb2RlbC50b3RhbFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFNvcnRpbmdCb29rcyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gYm9va19saXN0X21vZGVsXzEuQm9va0xpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEJvb2tMaXN0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Jvb2stbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Jvb2stbGlzdC5jb21wb25lbnQuY3NzJyldXHJcbiAgICAgICAgfSksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2Jvb2tfaHR0cF9zZXJ2aWNlXzEuQm9va0h0dHBTZXJ2aWNlLCBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXSlcclxuICAgIF0sIEJvb2tMaXN0Q29tcG9uZW50KTtcclxuICAgIHJldHVybiBCb29rTGlzdENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29rTGlzdENvbXBvbmVudCA9IEJvb2tMaXN0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWxpc3QuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBib29rX21vZGVsXzEgPSByZXF1aXJlKCcuL2Jvb2subW9kZWwnKTtcclxudmFyIEJvb2tMaXN0TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va0xpc3RNb2RlbChmaWx0ZXIsIGNvbHVtbiwgZGlyZWN0aW9uLCBoYXNOZXh0UGFnZSwgaGFzUHJlUGFnZSwgcGFnZVNpemUsIHRvdGFsUGFnZSwgcGFnZSwgYm9va01vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5oYXNOZXh0UGFnZSA9IGhhc05leHRQYWdlO1xyXG4gICAgICAgIHRoaXMuaGFzUHJlUGFnZSA9IGhhc1ByZVBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xyXG4gICAgICAgIHRoaXMudG90YWxQYWdlID0gdG90YWxQYWdlO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5ib29rTW9kZWwgPSBib29rTW9kZWw7XHJcbiAgICB9XHJcbiAgICBCb29rTGlzdE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9va0xpc3RNb2RlbChvYmplY3RbJ2ZpbHRlciddLCBvYmplY3RbJ29yZGVyJ11bJ2NvbHVtbiddLCBvYmplY3RbJ29yZGVyJ11bJ2RpcmVjdGlvbiddLCBvYmplY3RbJ2hhc05leHRQYWdlJ10sIG9iamVjdFsnaGFzUHJldmlvdXNQYWdlJ10sIG9iamVjdFsncGFnZVNpemUnXSwgb2JqZWN0Wyd0b3RhbFBhZ2VzJ10sIG9iamVjdFsncGFnZSddLCBib29rX21vZGVsXzEuQm9va01vZGVsLmZyb21KU09OQXJyYXkob2JqZWN0WydpdGVtcyddKSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0xpc3RNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBCb29rTGlzdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb29rTGlzdE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tMaXN0TW9kZWwgPSBCb29rTGlzdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWxpc3QubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL2Jvb2stbGlzdC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciB3cml0ZXJfbW9kZWxfMSA9IHJlcXVpcmUoJy4vd3JpdGVyLm1vZGVsJyk7XHJcbnZhciBCb29rTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va01vZGVsKGlkLCBjYXB0aW9uLCBwdWJsaXNoRGF0ZSwgd3JpdGVyTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gY2FwdGlvbjtcclxuICAgICAgICB0aGlzLnB1Ymxpc2hEYXRlID0gcHVibGlzaERhdGU7XHJcbiAgICAgICAgdGhpcy53cml0ZXJNb2RlbCA9IHdyaXRlck1vZGVsO1xyXG4gICAgfVxyXG4gICAgQm9va01vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9va01vZGVsKG9iamVjdFsnaWQnXSwgb2JqZWN0WydjYXB0aW9uJ10sIG9iamVjdFsncHVibGlzaGVkRGF0ZSddLCB3cml0ZXJfbW9kZWxfMS5Xcml0ZXJNb2RlbC5mcm9tSlNPTkFycmF5KG9iamVjdFsnd3JpdGVycyddKSk7XHJcbiAgICB9O1xyXG4gICAgQm9va01vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIEJvb2tNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9va01vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tNb2RlbCA9IEJvb2tNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vay5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvYm9vay5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBib29rX21vZGVsXzEgPSByZXF1aXJlKCcuL2Jvb2subW9kZWwnKTtcclxudmFyIFdyaXRlck1vZGVsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlck1vZGVsKGlkLCBmdWxsTmFtZSwgZGF0ZU9mQmlydGgsIGJpb2dyYXBoeSwgQm9vaykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmZ1bGxOYW1lID0gZnVsbE5hbWU7XHJcbiAgICAgICAgdGhpcy5kYXRlT2ZCaXJ0aCA9IGRhdGVPZkJpcnRoO1xyXG4gICAgICAgIHRoaXMuYmlvZ3JhcGh5ID0gYmlvZ3JhcGh5O1xyXG4gICAgICAgIHRoaXMuQm9vayA9IEJvb2s7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJNb2RlbC5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFdyaXRlck1vZGVsKG9iamVjdFsnaWQnXSwgb2JqZWN0WydmdWxsTmFtZSddLCBvYmplY3RbJ2RhdGVPZkJpcnRoJ10sIG9iamVjdFsnYmlvZ3JhcGh5J10sIGJvb2tfbW9kZWxfMS5Cb29rTW9kZWwuZnJvbUpTT05BcnJheShvYmplY3RbJ2Jvb2tzJ10pKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBXcml0ZXJNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV3JpdGVyTW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTW9kZWwgPSBXcml0ZXJNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9tb2RlbC93cml0ZXIubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgUGFnZXJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2VyU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIFBhZ2VyU2VydmljZS5wcm90b3R5cGUucmFuZ2UgPSBmdW5jdGlvbiAoc3RhcnQsIGNvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KDAsIEFycmF5KGNvdW50KSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICsgc3RhcnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUGFnZXJTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYWdlciA9IGZ1bmN0aW9uIChjdXJyZW50UGFnZSwgcGFnZVNpemUsIHRvdGFsUGFnZXMpIHtcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT09IHZvaWQgMCkgeyBjdXJyZW50UGFnZSA9IDE7IH1cclxuICAgICAgICBpZiAocGFnZVNpemUgPT09IHZvaWQgMCkgeyBwYWdlU2l6ZSA9IDU7IH1cclxuICAgICAgICB2YXIgc3RhcnRQYWdlID0gMSwgZW5kUGFnZTtcclxuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemU7XHJcbiAgICAgICAgdmFyIGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHBhZ2VTaXplO1xyXG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMucmFuZ2Uoc3RhcnRQYWdlLCB0b3RhbFBhZ2VzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgc3RhcnRQYWdlOiBzdGFydFBhZ2UsXHJcbiAgICAgICAgICAgIGVuZFBhZ2U6IGVuZFBhZ2UsXHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgIGVuZEluZGV4OiBlbmRJbmRleCxcclxuICAgICAgICAgICAgcGFnZXM6IHBhZ2VzXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGFnZXJTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlBhZ2VyU2VydmljZSA9IFBhZ2VyU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnaW5hdG9yLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxicj5cXHJcXG48cD5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBbcm91dGVyTGlua109XFxcIlsnLi4vJywgJ2FkZCddXFxcIj5BZGQgYm9vazwvYnV0dG9uPlxcclxcbjwvcD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjdXN0b21lci1saXN0LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtbmFtZVxcXCIgKGNsaWNrKT1cXFwic29ydCgnY2FwdGlvbicpO1xcXCI+Q2FwdGlvbjwvdGg+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtZGF0ZVxcXCIgKGNsaWNrKT1cXFwic29ydCgnZGF0ZScpO1xcXCI+UHVibGlzaCBEYXRlPC90aD5cXHJcXG4gICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGUtY2VsbCB0YWJsZS1zdGF0dXNcXFwiPkF1dGhvcnM8L3RoPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keSBjbGFzcz1cXFwidGFibGUtcm93XFxcIiAqbmdGb3I9XFxcImxldCBjdXN0b21lciBvZiBtb2RlbD8uYm9va01vZGVsXFxcIj5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyPy5jYXB0aW9ufX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3tjdXN0b21lcj8ucHVibGlzaERhdGUgfCBkYXRlOiAnZGQvTU0veXl5eSd9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD4gPHNwYW4gKm5nRm9yPVxcXCJsZXQgYXV0aG9yIG9mIGN1c3RvbWVyPy53cml0ZXJNb2RlbFxcXCI+e3thdXRob3IuZnVsbE5hbWV9fTwvc3Bhbj4gPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uLycsIGN1c3RvbWVyLmlkLCAnZWRpdCddXFxcIj5FZGl0PC9hPnxcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImRlbGV0ZShjdXN0b21lci5pZClcXFwiPkRlbGV0ZTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT4gICAgXFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6aW5saW5lLWJsb2NrO1xcXCI+XFxyXFxuICAgICAgICA8dWwgKm5nSWY9XFxcInBhZ2VyPy5wYWdlcyAmJiBwYWdlcj8ucGFnZXM/Lmxlbmd0aFxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IDF9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UoMSlcXFwiPkZpcnN0PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gMX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlcj8uY3VycmVudFBhZ2UgLSAxKVxcXCI+UHJldmlvdXM8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwYWdlci5wYWdlc1xcXCIgW25nQ2xhc3NdPVxcXCJ7YWN0aXZlOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gcGFnZX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlKVxcXCI+e3twYWdlfX08L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IG1vZGVsPy50b3RhbFBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UocGFnZXIuY3VycmVudFBhZ2UgKyAxKVxcXCI+TmV4dDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IG1vZGVsPy50b3RhbFBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UobW9kZWw/LnRvdGFsUGFnZSlcXFwiPkxhc3Q8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ib29rLWxpc3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGgge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYmxlLXN0YXR1cyB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgQm9va3NDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va3NDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBCb29rc0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgQm9va3NDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9vay5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Jvb2suY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQm9va3NDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEJvb2tzQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tzQ29tcG9uZW50ID0gQm9va3NDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2suY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2suY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2suY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgYm9va19hZGRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQnKTtcclxudmFyIGJvb2tfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50Jyk7XHJcbnZhciBib29rX2VkaXRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50Jyk7XHJcbnZhciBib29rX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi9ib29rLmNvbXBvbmVudCcpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcclxuZXhwb3J0cy5ib29rc1JvdXRlcyA9IFt7XHJcbiAgICAgICAgcGF0aDogJ3NwYS9ib29rcycsXHJcbiAgICAgICAgY29tcG9uZW50OiBib29rX2NvbXBvbmVudF8xLkJvb2tzQ29tcG9uZW50LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdsaXN0JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogYm9va19saXN0X2NvbXBvbmVudF8xLkJvb2tMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJzppZC9lZGl0JywgY29tcG9uZW50OiBib29rX2VkaXRfY29tcG9uZW50XzEuQm9va0VkaXRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYWRkJywgY29tcG9uZW50OiBib29rX2FkZF9jb21wb25lbnRfMS5Cb29rQWRkQ29tcG9uZW50IH1cclxuICAgICAgICBdXHJcbiAgICB9XTtcclxuZXhwb3J0cy5hcHBSb3V0aW5nUHJvdmlkZXJzID0gW107XHJcbmV4cG9ydHMuYm9va3NSb3V0aW5nID0gcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvckNoaWxkKGV4cG9ydHMuYm9va3NSb3V0ZXMpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rcy5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHdyaXRlcl9lZGl0X2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudCcpO1xyXG52YXIgd3JpdGVyX2FkZF9jb21wb25lbnRfMSA9IHJlcXVpcmUoJy4vd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIGZvcm1zXzEgPSByZXF1aXJlKCdAYW5ndWxhci9mb3JtcycpO1xyXG52YXIgY29tbW9uXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21tb24nKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciB3cml0ZXJfbGlzdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciB3cml0ZXJzX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vd3JpdGVycy5jb21wb25lbnRcIik7XHJcbnZhciB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgcGFnaW5hdG9yX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC1jb21wb25lbnQvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnRcIik7XHJcbnZhciBXcml0ZXJzTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlcnNNb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJzTW9kdWxlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLk5nTW9kdWxlKHtcclxuICAgICAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICAgICAgY29tbW9uXzEuQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgcm91dGVyXzEuUm91dGVyTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgZm9ybXNfMS5Gb3Jtc01vZHVsZVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgIHdyaXRlcnNfY29tcG9uZW50XzEuV3JpdGVyc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIHdyaXRlcl9saXN0X2NvbXBvbmVudF8xLldyaXRlckxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICB3cml0ZXJfZWRpdF9jb21wb25lbnRfMS5Xcml0ZXJFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgd3JpdGVyX2FkZF9jb21wb25lbnRfMS5Xcml0ZXJBZGRDb21wb25lbnRcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEuV3JpdGVySHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIFdyaXRlcnNNb2R1bGUpO1xyXG4gICAgcmV0dXJuIFdyaXRlcnNNb2R1bGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyc01vZHVsZSA9IFdyaXRlcnNNb2R1bGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlcnMubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHdyaXRlcl9lZGl0X21vZGVsXzEgPSByZXF1aXJlKCcuLy4uLy4uLy4uL21vZGVsL3dyaXRlci1lZGl0Lm1vZGVsJyk7XHJcbnZhciB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCcpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG52YXIgV3JpdGVyRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJFZGl0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGUsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIFdyaXRlckVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBfdGhpcy5pZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0V3JpdGVyQnlJZCh0aGlzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfZWRpdF9tb2RlbF8xLldyaXRlckVkaXRNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckVkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnB1dEN1c3RvbWVyKHRoaXMuaWQsIHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9lZGl0X21vZGVsXzEuV3JpdGVyRWRpdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3NwYS93cml0ZXJzL2xpc3RcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyRWRpdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXItZWRpdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlci1lZGl0LmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbd3JpdGVyX2h0dHBfc2VydmljZV8xLldyaXRlckh0dHBTZXJ2aWNlLCByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSwgcm91dGVyXzEuUm91dGVyXSlcclxuICAgIF0sIFdyaXRlckVkaXRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlckVkaXRDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyRWRpdENvbXBvbmVudCA9IFdyaXRlckVkaXRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1lZGl0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIFdyaXRlckVkaXRNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJFZGl0TW9kZWwoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZGF0ZU9mQmlydGgsIGJpb2dyYXBoeSkge1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICB0aGlzLmRhdGVPZkJpcnRoID0gZGF0ZU9mQmlydGg7XHJcbiAgICAgICAgdGhpcy5iaW9ncmFwaHkgPSBiaW9ncmFwaHk7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJFZGl0TW9kZWwuZnJvbUpTT04gPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXcml0ZXJFZGl0TW9kZWwob2JqZWN0WydmaXJzdE5hbWUnXSwgb2JqZWN0WydsYXN0TmFtZSddLCBvYmplY3RbJ2RhdGVPZkJpcnRoJ10sIG9iamVjdFsnYmlvZ3JhcGh5J10pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckVkaXRNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBXcml0ZXJFZGl0TW9kZWwuZnJvbUpTT04ob2JqKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdyaXRlckVkaXRNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJFZGl0TW9kZWwgPSBXcml0ZXJFZGl0TW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1lZGl0Lm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9tb2RlbC93cml0ZXItZWRpdC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCIpO1xyXG52YXIgaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2VcIik7XHJcbnJlcXVpcmUoJ3J4anMvUngnKTtcclxudmFyIFdyaXRlckh0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckh0dHBTZXJ2aWNlKF9odHRwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLmdldFdyaXRlckJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlciArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLmdldFNvcnRpbmdDdXN0b21lcnMgPSBmdW5jdGlvbiAoc29ydEJ5LCBvcmRlckJ5LCBwYWdlTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmdldChjb25maWdfMS5BcHBDb25maWcudXJscy53cml0ZXJcclxuICAgICAgICAgICAgKyBcIj9zb3J0T3JkZXI9XCIgKyBzb3J0QnkgKyBcIiZkaXJlY3Rpb249XCIgKyBvcmRlckJ5ICsgXCImcGFnZT1cIiArIHBhZ2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLmdldFdyaXRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmdldChjb25maWdfMS5BcHBDb25maWcudXJscy53cml0ZXIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLnBvc3RDdXN0b21lciA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3QoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyLCBkYXRhKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5wdXRDdXN0b21lciA9IGZ1bmN0aW9uIChpZCwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5wdXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyICsgXCIvXCIgKyBpZCwgZGF0YSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUuZGVsZXRlQ3VzdG9tZXIgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZGVsZXRlKGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlciArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxyXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBfc2VydmljZV8xLkh0dHBTZXJ2aWNlXSlcclxuICAgIF0sIFdyaXRlckh0dHBTZXJ2aWNlKTtcclxuICAgIHJldHVybiBXcml0ZXJIdHRwU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJIdHRwU2VydmljZSA9IFdyaXRlckh0dHBTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItaHR0cC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIChzdWJtaXQpPVxcXCJvblN1Ym1pdEZvcm0oKVxcXCIgKm5nSWY9XFxcIm1vZGVsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IG5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5maXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGVzdFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIj5MYXN0IG5hbWU6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwubGFzdE5hbWVcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZGF0ZU9mQmlydGhcXFwiPkRhdGUgb2YgYmlydGg6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XFxcIm1vZGVsLmRhdGVPZkJpcnRofCBkYXRlOid5eXl5LU1NLWRkJ1xcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJtb2RlbC5kYXRlT2ZCaXJ0aCA9ICRldmVudFxcXCIgbmFtZT1cXFwiZGF0ZU9mQmlydGhcXFwiIHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJiaW9ncmFwaHlcXFwiPkJpb2dyYXBoeTo8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIFsobmdNb2RlbCldPVxcXCJtb2RlbC5iaW9ncmFwaHlcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImJpb2dyYXBoeVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93cml0ZXItZWRpdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZVwiKTtcclxudmFyIHdyaXRlcl9hZGRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9tb2RlbC93cml0ZXItYWRkLm1vZGVsXCIpO1xyXG52YXIgV3JpdGVyQWRkQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckFkZENvbXBvbmVudChfaHR0cFNlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG4gICAgV3JpdGVyQWRkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IHdyaXRlcl9hZGRfbW9kZWxfMS5Xcml0ZXJBZGRNb2RlbChudWxsLCBudWxsLCBudWxsLCBudWxsKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJBZGRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3RDdXN0b21lcih0aGlzLm1vZGVsKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvc3BhL3dyaXRlcnMvbGlzdFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJBZGRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JpdGVyLWFkZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlci1hZGQuY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFt3cml0ZXJfaHR0cF9zZXJ2aWNlXzEuV3JpdGVySHR0cFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlcl0pXHJcbiAgICBdLCBXcml0ZXJBZGRDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlckFkZENvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJBZGRDb21wb25lbnQgPSBXcml0ZXJBZGRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1hZGQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgV3JpdGVyQWRkTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyQWRkTW9kZWwoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZGF0ZU9mQmlydGgsIGJpb2dyYXBoeSkge1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICB0aGlzLmRhdGVPZkJpcnRoID0gZGF0ZU9mQmlydGg7XHJcbiAgICAgICAgdGhpcy5iaW9ncmFwaHkgPSBiaW9ncmFwaHk7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJBZGRNb2RlbC5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFdyaXRlckFkZE1vZGVsKG9iamVjdFsnZmlyc3ROYW1lJ10sIG9iamVjdFsnbGFzdE5hbWUnXSwgb2JqZWN0WydkYXRlT2ZCaXJ0aCddLCBvYmplY3RbJ2Jpb2dyYXBoeSddKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJBZGRNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBXcml0ZXJBZGRNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV3JpdGVyQWRkTW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyQWRkTW9kZWwgPSBXcml0ZXJBZGRNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLWFkZC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWFkZC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxmb3JtIChzdWJtaXQpPVxcXCJvblN1Ym1pdEZvcm0oKVxcXCIgPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImZpcnN0TmFtZVxcXCI+Rmlyc3QgbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgbmFtZTo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5sYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJkYXRlT2ZCaXJ0aFxcXCI+RGF0ZSBvZiBiaXJ0aDo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5kYXRlT2ZCaXJ0aFxcXCIgbmFtZT1cXFwiZGF0ZU9mQmlydGhcXFwiIHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJiaW9ncmFwaHlcXFwiPkJpb2dyYXBoeTo8L2xhYmVsPlxcclxcbiAgICAgICAgPHRleHRhcmVhIFsobmdNb2RlbCldPVxcXCJtb2RlbC5iaW9ncmFwaHlcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImJpb2dyYXBoeVxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXHJcXG48L2Zvcm0+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93cml0ZXItYWRkLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgd3JpdGVyX2xpc3RfbW9kZWxfMSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vbW9kZWwvd3JpdGVyLWxpc3QubW9kZWwnKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIHdyaXRlcl9odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgcGFnaW5hdG9yX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC1jb21wb25lbnQvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnRcIik7XHJcbnZhciBXcml0ZXJMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckxpc3RDb21wb25lbnQoX2h0dHBTZXJ2aWNlLCBwYWdlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZSA9IF9odHRwU2VydmljZTtcclxuICAgICAgICB0aGlzLnBhZ2VyU2VydmljZSA9IHBhZ2VyU2VydmljZTtcclxuICAgICAgICB0aGlzLmlzQWRkVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGFnZXIgPSB7fTtcclxuICAgIH1cclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0V3JpdGVycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9saXN0X21vZGVsXzEuV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgICAgIF90aGlzLl9zZXRQYWdlKDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHNodXJlID9cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZGVsZXRlQ3VzdG9tZXIoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHsgX3RoaXMubmdPbkluaXQoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoY29sdW1uTmFtZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZGlyZWN0aW9uID09ICdBU0MnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJERVNDXCI7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY29sdW1uID0gY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJBU0NcIjtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUuX3NldFBhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLm1vZGVsLnRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHRoaXMucGFnZXJTZXJ2aWNlLmdldFBhZ2VyKHRoaXMubW9kZWwucGFnZSwgdGhpcy5tb2RlbC5wYWdlU2l6ZSwgdGhpcy5tb2RlbC50b3RhbFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFNvcnRpbmdDdXN0b21lcnModGhpcy5tb2RlbC5jb2x1bW4sIHRoaXMubW9kZWwuZGlyZWN0aW9uLCB0aGlzLm1vZGVsLnBhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9saXN0X21vZGVsXzEuV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXItbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlci1saXN0LmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbd3JpdGVyX2h0dHBfc2VydmljZV8xLldyaXRlckh0dHBTZXJ2aWNlLCBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXSlcclxuICAgIF0sIFdyaXRlckxpc3RDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTGlzdENvbXBvbmVudCA9IFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgd3JpdGVyX21vZGVsXzEgPSByZXF1aXJlKCcuL3dyaXRlci5tb2RlbCcpO1xyXG52YXIgV3JpdGVyTGlzdE1vZGVsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlckxpc3RNb2RlbChmaWx0ZXIsIGNvbHVtbiwgZGlyZWN0aW9uLCBoYXNOZXh0UGFnZSwgaGFzUHJlUGFnZSwgcGFnZVNpemUsIHRvdGFsUGFnZSwgcGFnZSwgd3JpdGVyTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcclxuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmhhc05leHRQYWdlID0gaGFzTmV4dFBhZ2U7XHJcbiAgICAgICAgdGhpcy5oYXNQcmVQYWdlID0gaGFzUHJlUGFnZTtcclxuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XHJcbiAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSB0b3RhbFBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLndyaXRlck1vZGVsID0gd3JpdGVyTW9kZWw7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJMaXN0TW9kZWwuZnJvbUpTT04gPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBXcml0ZXJMaXN0TW9kZWwob2JqZWN0WydmaWx0ZXInXSwgb2JqZWN0WydvcmRlciddWydjb2x1bW4nXSwgb2JqZWN0WydvcmRlciddWydkaXJlY3Rpb24nXSwgb2JqZWN0WydoYXNOZXh0UGFnZSddLCBvYmplY3RbJ2hhc1ByZXZpb3VzUGFnZSddLCBvYmplY3RbJ3BhZ2VTaXplJ10sIG9iamVjdFsndG90YWxQYWdlcyddLCBvYmplY3RbJ3BhZ2UnXSwgd3JpdGVyX21vZGVsXzEuV3JpdGVyTW9kZWwuZnJvbUpTT05BcnJheShvYmplY3RbJ2l0ZW1zJ10pKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJMaXN0TW9kZWwuZnJvbUpTT05BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJMaXN0TW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyTGlzdE1vZGVsID0gV3JpdGVyTGlzdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItbGlzdC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWxpc3QubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8YnI+XFxyXFxuPHA+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uLycsICdhZGQnXVxcXCI+QWRkIHdyaXRlcjwvYnV0dG9uPlxcclxcbjwvcD5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjdXN0b21lci1saXN0LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgICAgICA8dGhlYWQgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtbmFtZVxcXCIgKGNsaWNrKT1cXFwic29ydCgnZnVsbE5hbWUnKTtcXFwiPkZ1bGwgTmFtZTwvdGg+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtZGF0ZVxcXCIgKGNsaWNrKT1cXFwic29ydCgnZGF0ZScpO1xcXCI+QmlydGhkYXRlPC90aD5cXHJcXG4gICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGUtY2VsbCB0YWJsZS1zdGF0dXNcXFwiPkJpb2dyYXBoeTwvdGg+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRib2R5IGNsYXNzPVxcXCJ0YWJsZS1yb3dcXFwiICpuZ0Zvcj1cXFwibGV0IGN1c3RvbWVyIG9mIG1vZGVsPy53cml0ZXJNb2RlbFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3tjdXN0b21lcj8uZnVsbE5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyPy5kYXRlT2ZCaXJ0aCB8IGRhdGU6ICdkZC9NTS95eXl5J319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7Y3VzdG9tZXI/LmJpb2dyYXBoeX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uLycsIGN1c3RvbWVyLmlkLCAnZWRpdCddXFxcIj5FZGl0PC9hPnxcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImRlbGV0ZShjdXN0b21lci5pZClcXFwiPkRlbGV0ZTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT4gICAgXFxyXFxuICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6aW5saW5lLWJsb2NrO1xcXCI+XFxyXFxuICAgICAgICA8dWwgKm5nSWY9XFxcInBhZ2VyPy5wYWdlcyAmJiBwYWdlcj8ucGFnZXM/Lmxlbmd0aFxcXCIgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IDF9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UoMSlcXFwiPkZpcnN0PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gMX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlcj8uY3VycmVudFBhZ2UgLSAxKVxcXCI+UHJldmlvdXM8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwYWdlci5wYWdlc1xcXCIgW25nQ2xhc3NdPVxcXCJ7YWN0aXZlOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gcGFnZX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlKVxcXCI+e3twYWdlfX08L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IG1vZGVsPy50b3RhbFBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UocGFnZXIuY3VycmVudFBhZ2UgKyAxKVxcXCI+TmV4dDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IG1vZGVsPy50b3RhbFBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UobW9kZWw/LnRvdGFsUGFnZSlcXFwiPkxhc3Q8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG50aCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFibGUtc3RhdHVzIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBXcml0ZXJzQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdyaXRlcnNDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJzQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBXcml0ZXJzQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyaXRlcnMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93cml0ZXJzLmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIFdyaXRlcnNDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIFdyaXRlcnNDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyc0NvbXBvbmVudCA9IFdyaXRlcnNDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlcnMuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93cml0ZXJzLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciB3cml0ZXJfYWRkX2NvbXBvbmVudF8xID0gcmVxdWlyZSgnLi93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudCcpO1xyXG52YXIgd3JpdGVyX2VkaXRfY29tcG9uZW50XzEgPSByZXF1aXJlKCcuL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50Jyk7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xyXG52YXIgd3JpdGVyX2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50XCIpO1xyXG52YXIgd3JpdGVyc19jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMuY29tcG9uZW50XCIpO1xyXG5leHBvcnRzLndyaXRlcnNSb3V0ZXMgPSBbe1xyXG4gICAgICAgIHBhdGg6ICdzcGEvd3JpdGVycycsXHJcbiAgICAgICAgY29tcG9uZW50OiB3cml0ZXJzX2NvbXBvbmVudF8xLldyaXRlcnNDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2xpc3QnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdsaXN0JywgY29tcG9uZW50OiB3cml0ZXJfbGlzdF9jb21wb25lbnRfMS5Xcml0ZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJzppZC9lZGl0JywgY29tcG9uZW50OiB3cml0ZXJfZWRpdF9jb21wb25lbnRfMS5Xcml0ZXJFZGl0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2FkZCcsIGNvbXBvbmVudDogd3JpdGVyX2FkZF9jb21wb25lbnRfMS5Xcml0ZXJBZGRDb21wb25lbnQgfVxyXG4gICAgICAgIF1cclxuICAgIH1dO1xyXG5leHBvcnRzLmFwcFJvdXRpbmdQcm92aWRlcnMgPSBbXTtcclxuZXhwb3J0cy53cml0ZXJzUm91dGluZyA9IHJvdXRlcl8xLlJvdXRlck1vZHVsZS5mb3JDaGlsZChleHBvcnRzLndyaXRlcnNSb3V0ZXMpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXJzLnJvdXRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIEFwcENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcHBDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBBcHBDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgQXBwQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBBcHBDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBwQ29tcG9uZW50ID0gQXBwQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxudmFyIE5hdk1lbnVDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmF2TWVudUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIE5hdk1lbnVDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICduYXYtbWVudScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcclxuICAgIF0sIE5hdk1lbnVDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIE5hdk1lbnVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTmF2TWVudUNvbXBvbmVudCA9IE5hdk1lbnVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5hdm1lbnUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxyXFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9zcGEnXVxcXCI+V3JpdGVycyBJbmZvIExpc3Q8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3NwYS93cml0ZXJzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gV3JpdGVyc1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zcGEvYm9va3MnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCc+PC9zcGFuPiBCb29rc1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxubGkubGluay1hY3RpdmUgYSxcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxuLm1haW4tbmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxuICAgIC5tYWluLW5hdiB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXG4gICAgfVxcbiAgICAubmF2YmFyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciB1bCB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSBhIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGEge1xcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbnZhciBIb21lQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEhvbWVDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBIb21lQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxyXG4gICAgXSwgSG9tZUNvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gSG9tZUNvbXBvbmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5Ib21lQ29tcG9uZW50ID0gSG9tZUNvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9tZS5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5Ib21lIG1vZGVsPC9oMT5cXHJcXG48aDI+V2VsY29tZSB0byBXcml0ZXJgcyBsaXN0IGFwcGxpY2F0aW9uPC9oMj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==