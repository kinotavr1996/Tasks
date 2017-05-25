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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    return AppModule;
	}());
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
	    })
	], AppModule);
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    return BooksModule;
	}());
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
	    })
	], BooksModule);
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	                for (var _a = 0, _b = this.items; _a < _b.length; _a++) {
	                    var w = _b[_a];
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
	        for (var _a = 0, _b = this.selected; _a < _b.length; _a++) {
	            var e = _b[_a];
	            if (e.value == item.value)
	                return true;
	        }
	    };
	    AutocompleteComponent.prototype.select = function (item) {
	        this.selected.push(item);
	        this.query = '';
	        this.writerIds = [];
	        for (var _a = 0, _b = this.selected; _a < _b.length; _a++) {
	            var w = _b[_a];
	            this.writerIds.push(w.value);
	        }
	        this.writersIdsChanged.emit(this.writerIds);
	    };
	    AutocompleteComponent.prototype.remove = function (item) {
	        this.selected.splice(this.selected.indexOf(item), 1);
	        this.filteredList = this.items;
	        this.writerIds = [];
	        for (var _a = 0, _b = this.selected; _a < _b.length; _a++) {
	            var w = _b[_a];
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
	    return AutocompleteComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], AutocompleteComponent.prototype, "items", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], AutocompleteComponent.prototype, "Ids", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
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
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], AutocompleteComponent);
	exports.AutocompleteComponent = AutocompleteComponent;
	//# sourceMappingURL=autocomplete.component.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    BookHttpService.prototype.postBook = function (data) {
	        return this._httpService.post(config_1.AppConfig.urls.books, data)
	            .map(function (res) { return res; });
	    };
	    BookHttpService.prototype.putBook = function (id, data) {
	        return this._httpService.put(config_1.AppConfig.urls.books + "/" + id, data)
	            .map(function (res) { return res; });
	    };
	    BookHttpService.prototype.deleteBook = function (id) {
	        return this._httpService.delete(config_1.AppConfig.urls.books + "/" + id)
	            .map(function (res) { return res; });
	    };
	    return BookHttpService;
	}());
	BookHttpService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_service_1.HttpService])
	], BookHttpService);
	exports.BookHttpService = BookHttpService;
	//# sourceMappingURL=book-http.service.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var api_base_url_1 = __webpack_require__(15);
	var api_request_urls_1 = __webpack_require__(17);
	var api_servers_enum_1 = __webpack_require__(16);
	var AppConfig = (function () {
	    function AppConfig() {
	    }
	    return AppConfig;
	}());
	AppConfig.apiUrl = api_base_url_1.ApiBaseUrl.get(api_servers_enum_1.ApiServers.dev);
	AppConfig.urls = api_request_urls_1.ApiRequestUrls.urls;
	AppConfig.projectName = 'WriterApp';
	exports.AppConfig = AppConfig;
	//# sourceMappingURL=config.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var ApiServers;
	(function (ApiServers) {
	    ApiServers[ApiServers["staiging"] = 1] = "staiging";
	    ApiServers[ApiServers["test"] = 2] = "test";
	    ApiServers[ApiServers["dev"] = 3] = "dev";
	})(ApiServers = exports.ApiServers || (exports.ApiServers = {}));
	//# sourceMappingURL=api-servers.enum.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ApiRequestUrls = (function () {
	    function ApiRequestUrls() {
	    }
	    return ApiRequestUrls;
	}());
	ApiRequestUrls.urls = {
	    'writer': 'writer',
	    'books': 'books',
	    'createBook': 'books/create',
	    'getAllBook': 'books/get'
	};
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    return HttpService;
	}());
	HttpService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http,
	        storage_service_1.StorageService,
	        router_1.Router])
	], HttpService);
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    return StorageService;
	}());
	StorageService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], StorageService);
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	                this._httpService.postBook(this.model)
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
	    return BookAddComponent;
	}());
	BookAddComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(28),
	        styles: [__webpack_require__(29)]
	    }),
	    __metadata("design:paramtypes", [book_http_service_1.BookHttpService, router_1.Router])
	], BookAddComponent);
	exports.BookAddComponent = BookAddComponent;
	//# sourceMappingURL=book-add.component.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	                this._httpService.putBook(this.id, this.model)
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
	    return BookEditComponent;
	}());
	BookEditComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(34),
	        styles: [__webpack_require__(35)]
	    }),
	    __metadata("design:paramtypes", [book_http_service_1.BookHttpService,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], BookEditComponent);
	exports.BookEditComponent = BookEditComponent;
	//# sourceMappingURL=book-edit.component.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	            this._httpService.deleteBook(id)
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
	    return BookListComponent;
	}());
	BookListComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(42),
	        styles: [__webpack_require__(43)]
	    }),
	    __metadata("design:paramtypes", [book_http_service_1.BookHttpService, paginator_component_1.PagerService])
	], BookListComponent);
	exports.BookListComponent = BookListComponent;
	//# sourceMappingURL=book-list.component.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
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

	module.exports = "<br>\r\n<p>\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['../', 'add']\">Add book</button>\r\n    <input type=\"text\" class=\"validate filter-input\" [(ngModel)]=query>\r\n    <input type=\"submit\" value=\"Search\" class=\"btn btn-default\" /> |\r\n\r\n</p>\r\n<div class=\"customer-list-container\">\r\n    <table class=\"table table-responsive\">\r\n        <thead class=\"table-header\">\r\n        <th class=\"table-cell table-name\" (click)=\"sort('caption');\">Caption</th>\r\n        <th class=\"table-cell table-date\" (click)=\"sort('date');\">Publish Date</th>\r\n        <th class=\"table-cell table-status\">Authors</th>\r\n        </thead>\r\n        <tbody class=\"table-row\" *ngFor=\"let customer of model?.bookModel\">\r\n            <tr>\r\n                <td>{{customer?.caption}}</td>\r\n                <td>{{customer?.publishDate | date: 'dd/MM/yyyy'}}</td>\r\n                <td> <span *ngFor=\"let author of customer?.writerModel\">{{author.fullName}}</span> </td>\r\n                <td>\r\n                    <a [routerLink]=\"['../', customer.id, 'edit']\">Edit</a>|\r\n                    <a (click)=\"delete(customer.id)\">Delete</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>    \r\n    <div style=\"display:inline-block;\">\r\n        <ul *ngIf=\"pager?.pages && pager?.pages?.length\" class=\"pagination\">\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\r\n                <a (click)=\"_setPage(1)\">First</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === 1}\">\r\n                <a (click)=\"_setPage(pager?.currentPage - 1)\">Previous</a>\r\n            </li>\r\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager?.currentPage === page}\">\r\n                <a (click)=\"_setPage(page)\">{{page}}</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager.currentPage === model?.totalPage}\">\r\n                <a (click)=\"_setPage(pager.currentPage + 1)\">Next</a>\r\n            </li>\r\n            <li [ngClass]=\"{disabled:pager?.currentPage === model?.totalPage}\">\r\n                <a (click)=\"_setPage(model?.totalPage)\">Last</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var BooksComponent = (function () {
	    function BooksComponent() {
	    }
	    BooksComponent.prototype.ngOnInit = function () {
	    };
	    return BooksComponent;
	}());
	BooksComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(46),
	        styles: [__webpack_require__(47)]
	    }),
	    __metadata("design:paramtypes", [])
	], BooksComponent);
	exports.BooksComponent = BooksComponent;
	//# sourceMappingURL=book.component.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = "<router-outlet></router-outlet>\r\n"

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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    return WritersModule;
	}());
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
	    })
	], WritersModule);
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	        this._httpService.putWriter(this.id, this.model)
	            .subscribe(function (res) {
	            _this.model = writer_edit_model_1.WriterEditModel.fromJSON(res);
	            _this.router.navigateByUrl("/spa/writers/list");
	        });
	    };
	    return WriterEditComponent;
	}());
	WriterEditComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(56),
	        styles: [__webpack_require__(57)]
	    }),
	    __metadata("design:paramtypes", [writer_http_service_1.WriterHttpService,
	        router_1.ActivatedRoute,
	        router_1.Router])
	], WriterEditComponent);
	exports.WriterEditComponent = WriterEditComponent;
	//# sourceMappingURL=writer-edit.component.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	    WriterHttpService.prototype.postWriter = function (data) {
	        return this._httpService.post(config_1.AppConfig.urls.writer, data)
	            .map(function (res) { return res.json(); });
	    };
	    WriterHttpService.prototype.putWriter = function (id, data) {
	        return this._httpService.put(config_1.AppConfig.urls.writer + "/" + id, data)
	            .map(function (res) { return res.json(); });
	    };
	    WriterHttpService.prototype.deleteWriter = function (id) {
	        return this._httpService.delete(config_1.AppConfig.urls.writer + "/" + id)
	            .map(function (res) { return res; });
	    };
	    return WriterHttpService;
	}());
	WriterHttpService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_service_1.HttpService])
	], WriterHttpService);
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	        this._httpService.postWriter(this.model)
	            .subscribe(function (res) {
	            _this.router.navigateByUrl("/spa/writers/list");
	        });
	    };
	    return WriterAddComponent;
	}());
	WriterAddComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(61),
	        styles: [__webpack_require__(62)]
	    }),
	    __metadata("design:paramtypes", [writer_http_service_1.WriterHttpService, router_1.Router])
	], WriterAddComponent);
	exports.WriterAddComponent = WriterAddComponent;
	//# sourceMappingURL=writer-add.component.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	            this._httpService.deleteWriter(id)
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
	    return WriterListComponent;
	}());
	WriterListComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(66),
	        styles: [__webpack_require__(67)]
	    }),
	    __metadata("design:paramtypes", [writer_http_service_1.WriterHttpService, paginator_component_1.PagerService])
	], WriterListComponent);
	exports.WriterListComponent = WriterListComponent;
	//# sourceMappingURL=writer-list.component.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var WritersComponent = (function () {
	    function WritersComponent() {
	    }
	    WritersComponent.prototype.ngOnInit = function () {
	    };
	    return WritersComponent;
	}());
	WritersComponent = __decorate([
	    core_1.Component({
	        template: __webpack_require__(70),
	        styles: [__webpack_require__(71)]
	    }),
	    __metadata("design:paramtypes", [])
	], WritersComponent);
	exports.WritersComponent = WritersComponent;
	//# sourceMappingURL=writers.component.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = "<router-outlet></router-outlet>\r\n"

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
	Object.defineProperty(exports, "__esModule", { value: true });
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(75),
	        styles: [__webpack_require__(76)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;
	//# sourceMappingURL=app.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
	exports.push([module.id, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(79),
	        styles: [__webpack_require__(80)]
	    })
	], NavMenuComponent);
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
	exports.push([module.id, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);
	
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(83)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;
	//# sourceMappingURL=home.component.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = "<h1>Home model</h1>\r\n<h2>Welcome to Writer`s list application</h2>"

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTY5MTY1ZDMzOWI2NDQ1YjcyYmUiLCJ3ZWJwYWNrOi8vLy4vU1BBL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvYXBwLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MubW9kdWxlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3NlbGVjdC1saXN0LWl0ZW0ubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcz8wYTBkIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3Mtc2hhcmVkL2Jvb2staHR0cC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbmZpZy9zaGFyZWQvYXBpLWJhc2UtdXJsLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktc2VydmVycy5lbnVtLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktcmVxdWVzdC11cmxzLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1J4XCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC9ib29rLWFkZC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtYWRkL2Jvb2stYWRkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50LmNzcz8xYzY4Iiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC9ib29rLWVkaXQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmNzcz9iYjZmIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLWVkaXQvYm9vay1lZGl0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL2Jvb2stbGlzdC5tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL2Jvb2subW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9tb2RlbC93cml0ZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcz80MmJlIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuY3NzPzM5OWQiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2suY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy5yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMubW9kdWxlLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWVkaXQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcz8zZDNjIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3dyaXRlci1hZGQubW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5jc3M/ZDc3NiIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL21vZGVsL3dyaXRlci1saXN0Lm1vZGVsLmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50LmNzcz81ODg5Iiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzP2U5MzgiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMucm91dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kMjNmIiwid2VicGFjazovLy8uL1NQQS9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWQ4ZSIsIndlYnBhY2s6Ly8vLi9TUEEvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vU1BBL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFD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LFNBQVMsS0FBSzs7QUFFNTJDOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0EsK0NBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsMkM7Ozs7OztBQ3JCQSx3RiIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU2OTE2NWQzMzliNjQ0NWI3MmJlIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcclxuaW1wb3J0ICd6b25lLmpzJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9TUEEvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYm9va3NfbW9kdWxlXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLm1vZHVsZVwiKTtcclxudmFyIGJvb2tzX3JvdXRpbmdfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYm9va3MvYm9va3Mucm91dGluZ1wiKTtcclxudmFyIHN0b3JhZ2Vfc2VydmljZV8xID0gcmVxdWlyZShcIi4vc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2VcIik7XHJcbnZhciBodHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvaHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgd3JpdGVyc19tb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLm1vZHVsZVwiKTtcclxudmFyIHdyaXRlcnNfcm91dGluZ18xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMucm91dGluZ1wiKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgYW5ndWxhcjJfdW5pdmVyc2FsXzEgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xyXG52YXIgYXBwX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudFwiKTtcclxudmFyIG5hdm1lbnVfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnRcIik7XHJcbnZhciBob21lX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCIpO1xyXG52YXIgQXBwTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcE1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBBcHBNb2R1bGU7XHJcbn0oKSk7XHJcbkFwcE1vZHVsZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLk5nTW9kdWxlKHtcclxuICAgICAgICBib290c3RyYXA6IFtcclxuICAgICAgICAgICAgYXBwX2NvbXBvbmVudF8xLkFwcENvbXBvbmVudFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgIGFwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnQsXHJcbiAgICAgICAgICAgIG5hdm1lbnVfY29tcG9uZW50XzEuTmF2TWVudUNvbXBvbmVudCxcclxuICAgICAgICAgICAgaG9tZV9jb21wb25lbnRfMS5Ib21lQ29tcG9uZW50XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgaHR0cF9zZXJ2aWNlXzEuSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgIHN0b3JhZ2Vfc2VydmljZV8xLlN0b3JhZ2VTZXJ2aWNlXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAgIGFuZ3VsYXIyX3VuaXZlcnNhbF8xLlVuaXZlcnNhbE1vZHVsZSxcclxuICAgICAgICAgICAgd3JpdGVyc19tb2R1bGVfMS5Xcml0ZXJzTW9kdWxlLFxyXG4gICAgICAgICAgICBib29rc19tb2R1bGVfMS5Cb29rc01vZHVsZSxcclxuICAgICAgICAgICAgcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ3NwYScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdzcGEnLCBjb21wb25lbnQ6IGhvbWVfY29tcG9uZW50XzEuSG9tZUNvbXBvbmVudCB9XHJcbiAgICAgICAgICAgIF0uY29uY2F0KHdyaXRlcnNfcm91dGluZ18xLndyaXRlcnNSb3V0ZXMsIGJvb2tzX3JvdXRpbmdfMS5ib29rc1JvdXRlcywgW1xyXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnc3BhJyB9XHJcbiAgICAgICAgICAgIF0pKVxyXG4gICAgICAgIF1cclxuICAgIH0pXHJcbl0sIEFwcE1vZHVsZSk7XHJcbmV4cG9ydHMuQXBwTW9kdWxlID0gQXBwTW9kdWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9hcHAubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhdXRvY29tcGxldGVfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi8uLi8uLi9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50XCIpO1xyXG52YXIgYm9va19odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL2Jvb2tzLXNoYXJlZC9ib29rLWh0dHAuc2VydmljZVwiKTtcclxudmFyIGJvb2tfYWRkX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vYm9va3MtYWRkL2Jvb2stYWRkLmNvbXBvbmVudFwiKTtcclxudmFyIGJvb2tfZWRpdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50XCIpO1xyXG52YXIgYm9va19saXN0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50XCIpO1xyXG52YXIgYm9va19jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2Jvb2suY29tcG9uZW50XCIpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgY29tbW9uXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgcGFnaW5hdG9yX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC1jb21wb25lbnQvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnRcIik7XHJcbnZhciBCb29rc01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb29rc01vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBCb29rc01vZHVsZTtcclxufSgpKTtcclxuQm9va3NNb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICBjb21tb25fMS5Db21tb25Nb2R1bGUsXHJcbiAgICAgICAgICAgIHJvdXRlcl8xLlJvdXRlck1vZHVsZSxcclxuICAgICAgICAgICAgZm9ybXNfMS5Gb3Jtc01vZHVsZVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgIGJvb2tfY29tcG9uZW50XzEuQm9va3NDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGJvb2tfbGlzdF9jb21wb25lbnRfMS5Cb29rTGlzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgYm9va19lZGl0X2NvbXBvbmVudF8xLkJvb2tFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBib29rX2FkZF9jb21wb25lbnRfMS5Cb29rQWRkQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBhdXRvY29tcGxldGVfY29tcG9uZW50XzEuQXV0b2NvbXBsZXRlQ29tcG9uZW50XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgYm9va19odHRwX3NlcnZpY2VfMS5Cb29rSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgIHBhZ2luYXRvcl9jb21wb25lbnRfMS5QYWdlclNlcnZpY2VcclxuICAgICAgICBdXHJcbiAgICB9KVxyXG5dLCBCb29rc01vZHVsZSk7XHJcbmV4cG9ydHMuQm9va3NNb2R1bGUgPSBCb29rc01vZHVsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9va3MubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLm1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNlbGVjdF9saXN0X2l0ZW1fbW9kZWxfMSA9IHJlcXVpcmUoXCIuLy4uLy4uL21vZGVsL3NlbGVjdC1saXN0LWl0ZW0ubW9kZWxcIik7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIEF1dG9jb21wbGV0ZUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBdXRvY29tcGxldGVDb21wb25lbnQobXlFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5JZHMgPSBbXTtcclxuICAgICAgICB0aGlzLndyaXRlcnNJZHNDaGFuZ2VkID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB0aGlzLndyaXRlcklkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSAnJztcclxuICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBteUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkeCA9IC0xO1xyXG4gICAgfVxyXG4gICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5JZHMgIT09IG51bGwgJiYgdGhpcy5pdGVtcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5JZHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIF9iID0gdGhpcy5pdGVtczsgX2EgPCBfYi5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IF9iW19hXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAody52YWx1ZSA9PSB0aGlzLklkc1tfaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKG5ldyBzZWxlY3RfbGlzdF9pdGVtX21vZGVsXzEuU2VsZWN0TGlzdEl0ZW0ody52YWx1ZSwgdy50ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlcnkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMucXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZS5jaGVja2VyID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIF9iID0gdGhpcy5zZWxlY3RlZDsgX2EgPCBfYi5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgdmFyIGUgPSBfYltfYV07XHJcbiAgICAgICAgICAgIGlmIChlLnZhbHVlID09IGl0ZW0udmFsdWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gJyc7XHJcbiAgICAgICAgdGhpcy53cml0ZXJJZHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIF9iID0gdGhpcy5zZWxlY3RlZDsgX2EgPCBfYi5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgdmFyIHcgPSBfYltfYV07XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVySWRzLnB1c2gody52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVyc0lkc0NoYW5nZWQuZW1pdCh0aGlzLndyaXRlcklkcyk7XHJcbiAgICB9O1xyXG4gICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIHRoaXMud3JpdGVySWRzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBfYiA9IHRoaXMuc2VsZWN0ZWQ7IF9hIDwgX2IubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB3ID0gX2JbX2FdO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlcklkcy5wdXNoKHcudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndyaXRlcnNJZHNDaGFuZ2VkLmVtaXQodGhpcy53cml0ZXJJZHMpO1xyXG4gICAgfTtcclxuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZElkeCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmZpbHRlcmVkTGlzdFt0aGlzLnNlbGVjdGVkSWR4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkeCA9IC0xO1xyXG4gICAgfTtcclxuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IHRoaXMuaXRlbXM7XHJcbiAgICAgICAgdmFyIGNsaWNrZWRDb21wb25lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdmFyIGluc2lkZSA9IGZhbHNlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKGNsaWNrZWRDb21wb25lbnQgPT09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbnNpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsaWNrZWRDb21wb25lbnQgPSBjbGlja2VkQ29tcG9uZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfSB3aGlsZSAoY2xpY2tlZENvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKCFpbnNpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkeCA9IC0xO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBdXRvY29tcGxldGVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLklucHV0KCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXHJcbl0sIEF1dG9jb21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUsIFwiaXRlbXNcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5wdXQoKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcclxuXSwgQXV0b2NvbXBsZXRlQ29tcG9uZW50LnByb3RvdHlwZSwgXCJJZHNcIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuT3V0cHV0KCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgT2JqZWN0KVxyXG5dLCBBdXRvY29tcGxldGVDb21wb25lbnQucHJvdG90eXBlLCBcIndyaXRlcnNJZHNDaGFuZ2VkXCIsIHZvaWQgMCk7XHJcbkF1dG9jb21wbGV0ZUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtYXV0b2NvbXBsZXRlJyxcclxuICAgICAgICBob3N0OiB7XHJcbiAgICAgICAgICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ2hhbmRsZUNsaWNrKCRldmVudCknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2NvcmVfMS5FbGVtZW50UmVmXSlcclxuXSwgQXV0b2NvbXBsZXRlQ29tcG9uZW50KTtcclxuZXhwb3J0cy5BdXRvY29tcGxldGVDb21wb25lbnQgPSBBdXRvY29tcGxldGVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1dG9jb21wbGV0ZS5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNlbGVjdExpc3RJdGVtID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNlbGVjdExpc3RJdGVtKHZhbHVlLCB0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcbiAgICBTZWxlY3RMaXN0SXRlbS5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdExpc3RJdGVtKCtvYmplY3RbJ3ZhbHVlJ10sIG9iamVjdFsndGV4dCddKTtcclxuICAgIH07XHJcbiAgICBTZWxlY3RMaXN0SXRlbS5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBTZWxlY3RMaXN0SXRlbS5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VsZWN0TGlzdEl0ZW07XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2VsZWN0TGlzdEl0ZW0gPSBTZWxlY3RMaXN0SXRlbTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VsZWN0LWxpc3QtaXRlbS5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvc2VsZWN0LWxpc3QtaXRlbS5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaW5wdXQtZmllbGQgY29sIHMxMlxcXCI+XFxyXFxuICAgIDxpbnB1dCBpZD1cXFwiY291bnRyeVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcInZhbGlkYXRlIGZpbHRlci1pbnB1dFxcXCIgWyhuZ01vZGVsKV09cXVlcnkgKGtleXVwKT1maWx0ZXIoKT5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJzdWdnZXN0aW9uc1xcXCIgKm5nSWY9XFxcImZpbHRlcmVkTGlzdD8ubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgIDx1bCAgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBmaWx0ZXJlZExpc3RcXFwiPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXSA9XFxcInsnZGlzYWJsZWQnOiBjaGVja2VyKGl0ZW0pfVxcXCIgKGNsaWNrKT1cXFwic2VsZWN0KGl0ZW0pXFxcIj57e2l0ZW0udGV4dH19PC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2ICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2Ygc2VsZWN0ZWRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3RlZFxcXCI+XFxyXFxuICAgICAgICA8c3Bhbj57e2l0ZW0udGV4dH19PC9zcGFuPlxcclxcbiAgICAgICAgPGEgKGNsaWNrKT1cXFwicmVtb3ZlKGl0ZW0pXFxcIj54PC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdWdnZXN0aW9uc3tcXHJcXG5cXHRib3JkZXI6c29saWQgMXB4ICNmMWYxZjE7XFxyXFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxyXFxuXFx0d2lkdGg6NjAwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogLTI1cHggMCAwcHggMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWdnZXN0aW9ucyB1bHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJ7XFxyXFxuXFx0d2lkdGg6NjAwcHg7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6MTBweDtcXHJcXG5cXHRtYXJnaW4tdG9wOjEwcHg7XFxyXFxufVxcclxcbi5zdWdnZXN0aW9ucyB1bCBsaXtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Z2dlc3Rpb25zIHVsIGxpIGF7XFxyXFxuXFx0cGFkZGluZzo1cHg7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdGNvbG9yOiM3RTdFN0U7XFxyXFxufVxcclxcblxcclxcbi5zdWdnZXN0aW9ucyB1bCBsaSBhOmhvdmVye1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcbi5zZWxlY3RlZCBhe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbnVsIGF7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRpc2FibGVke1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNlMGUwZTAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvc2hhcmVkLWNvbXBvbmVudC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCIpO1xyXG52YXIgaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2VcIik7XHJcbnJlcXVpcmUoXCJyeGpzL1J4XCIpO1xyXG52YXIgQm9va0h0dHBTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tIdHRwU2VydmljZShfaHR0cFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZSA9IF9odHRwU2VydmljZTtcclxuICAgIH1cclxuICAgIEJvb2tIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0Qm9va0J5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLmJvb2tzICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBCb29rSHR0cFNlcnZpY2UucHJvdG90eXBlLmdldFNvcnRpbmdCb29rcyA9IGZ1bmN0aW9uIChzb3J0QnksIG9yZGVyQnksIHBhZ2VOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLmdldEFsbEJvb2tcclxuICAgICAgICAgICAgKyBcIj9zb3J0T3JkZXI9XCIgKyBzb3J0QnkgKyBcIiZkaXJlY3Rpb249XCIgKyBvcmRlckJ5ICsgXCImcGFnZT1cIiArIHBhZ2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5nZXRCb29rcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLmNyZWF0ZUJvb2spXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0h0dHBTZXJ2aWNlLnByb3RvdHlwZS5wb3N0Qm9vayA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3QoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMuYm9va3MsIGRhdGEpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzOyB9KTtcclxuICAgIH07XHJcbiAgICBCb29rSHR0cFNlcnZpY2UucHJvdG90eXBlLnB1dEJvb2sgPSBmdW5jdGlvbiAoaWQsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UucHV0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLmJvb2tzICsgXCIvXCIgKyBpZCwgZGF0YSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXM7IH0pO1xyXG4gICAgfTtcclxuICAgIEJvb2tIdHRwU2VydmljZS5wcm90b3R5cGUuZGVsZXRlQm9vayA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5kZWxldGUoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMuYm9va3MgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlczsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJvb2tIdHRwU2VydmljZTtcclxufSgpKTtcclxuQm9va0h0dHBTZXJ2aWNlID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtodHRwX3NlcnZpY2VfMS5IdHRwU2VydmljZV0pXHJcbl0sIEJvb2tIdHRwU2VydmljZSk7XHJcbmV4cG9ydHMuQm9va0h0dHBTZXJ2aWNlID0gQm9va0h0dHBTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWh0dHAuc2VydmljZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1zaGFyZWQvYm9vay1odHRwLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhcGlfYmFzZV91cmxfMSA9IHJlcXVpcmUoXCIuL3NoYXJlZC9hcGktYmFzZS11cmxcIik7XHJcbnZhciBhcGlfcmVxdWVzdF91cmxzXzEgPSByZXF1aXJlKFwiLi9zaGFyZWQvYXBpLXJlcXVlc3QtdXJsc1wiKTtcclxudmFyIGFwaV9zZXJ2ZXJzX2VudW1fMSA9IHJlcXVpcmUoXCIuL3NoYXJlZC9hcGktc2VydmVycy5lbnVtXCIpO1xyXG52YXIgQXBwQ29uZmlnID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcENvbmZpZygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBBcHBDb25maWc7XHJcbn0oKSk7XHJcbkFwcENvbmZpZy5hcGlVcmwgPSBhcGlfYmFzZV91cmxfMS5BcGlCYXNlVXJsLmdldChhcGlfc2VydmVyc19lbnVtXzEuQXBpU2VydmVycy5kZXYpO1xyXG5BcHBDb25maWcudXJscyA9IGFwaV9yZXF1ZXN0X3VybHNfMS5BcGlSZXF1ZXN0VXJscy51cmxzO1xyXG5BcHBDb25maWcucHJvamVjdE5hbWUgPSAnV3JpdGVyQXBwJztcclxuZXhwb3J0cy5BcHBDb25maWcgPSBBcHBDb25maWc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29uZmlnL2NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGFwaV9zZXJ2ZXJzX2VudW1fMSA9IHJlcXVpcmUoXCIuL2FwaS1zZXJ2ZXJzLmVudW1cIik7XHJcbnZhciBBcGlCYXNlVXJsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwaUJhc2VVcmwoKSB7XHJcbiAgICB9XHJcbiAgICBBcGlCYXNlVXJsLmdldCA9IGZ1bmN0aW9uIChlbnYpIHtcclxuICAgICAgICBzd2l0Y2ggKGVudikge1xyXG4gICAgICAgICAgICBjYXNlIGFwaV9zZXJ2ZXJzX2VudW1fMS5BcGlTZXJ2ZXJzLmRldjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcvYXBpLyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwaUJhc2VVcmw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBpQmFzZVVybCA9IEFwaUJhc2VVcmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS1iYXNlLXVybC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktYmFzZS11cmwuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBBcGlTZXJ2ZXJzO1xyXG4oZnVuY3Rpb24gKEFwaVNlcnZlcnMpIHtcclxuICAgIEFwaVNlcnZlcnNbQXBpU2VydmVyc1tcInN0YWlnaW5nXCJdID0gMV0gPSBcInN0YWlnaW5nXCI7XHJcbiAgICBBcGlTZXJ2ZXJzW0FwaVNlcnZlcnNbXCJ0ZXN0XCJdID0gMl0gPSBcInRlc3RcIjtcclxuICAgIEFwaVNlcnZlcnNbQXBpU2VydmVyc1tcImRldlwiXSA9IDNdID0gXCJkZXZcIjtcclxufSkoQXBpU2VydmVycyA9IGV4cG9ydHMuQXBpU2VydmVycyB8fCAoZXhwb3J0cy5BcGlTZXJ2ZXJzID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLXNlcnZlcnMuZW51bS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29uZmlnL3NoYXJlZC9hcGktc2VydmVycy5lbnVtLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQXBpUmVxdWVzdFVybHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBpUmVxdWVzdFVybHMoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBpUmVxdWVzdFVybHM7XHJcbn0oKSk7XHJcbkFwaVJlcXVlc3RVcmxzLnVybHMgPSB7XHJcbiAgICAnd3JpdGVyJzogJ3dyaXRlcicsXHJcbiAgICAnYm9va3MnOiAnYm9va3MnLFxyXG4gICAgJ2NyZWF0ZUJvb2snOiAnYm9va3MvY3JlYXRlJyxcclxuICAgICdnZXRBbGxCb29rJzogJ2Jvb2tzL2dldCdcclxufTtcclxuZXhwb3J0cy5BcGlSZXF1ZXN0VXJscyA9IEFwaVJlcXVlc3RVcmxzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcGktcmVxdWVzdC11cmxzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb25maWcvc2hhcmVkL2FwaS1yZXF1ZXN0LXVybHMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKTtcclxudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiKTtcclxudmFyIHN0b3JhZ2Vfc2VydmljZV8xID0gcmVxdWlyZShcIi4vc3RvcmFnZS5zZXJ2aWNlXCIpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xyXG52YXIgSHR0cFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSHR0cFNlcnZpY2UoX2h0dHAsIF9zdG9yYWdlLCBfcm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cCA9IF9odHRwO1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2UgPSBfc3RvcmFnZTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIgPSBfcm91dGVyO1xyXG4gICAgfVxyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLnByZXBhcmVIZWFkZXJzID0gZnVuY3Rpb24gKGhlYWRlcnNSYXcpIHtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBodHRwXzEuSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgIGlmIChoZWFkZXJzUmF3ID09IG51bGwpIHtcclxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXJzUmF3LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKGl0ZW0ua2V5LCBpdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9zdG9yYWdlLmtleXMuYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ2JlYXJlciAnICsgdG9rZW4pO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfTtcclxuICAgIC8qID09PT09PT09PT09PT09PSBNRVRIT0RTID09PT09PT09PT09PT09PVxyXG4gICAgZGF0YVJhdyAgICAgLSByZWd1bGFyIEpTIG9iamVjdFxyXG4gICAgaGVhZGVyc1JhdyAgLSBvYmplY3QgbGl0ZXJhbCBjb250YWluaW5nIGhlYWRlcnNcclxuICAgICovXHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCwgX2EpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLmhlYWRlcnNSYXcsIGhlYWRlcnNSYXcgPSBfYyA9PT0gdm9pZCAwID8gbnVsbCA6IF9jLCBfZCA9IF9iLnNob3dMb2FkZXIsIHNob3dMb2FkZXIgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5wcmVwYXJlSGVhZGVycyhoZWFkZXJzUmF3KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAgICAgICAuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy5hcGlVcmwgKyB1cmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5pbnRlcmNlcHQoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKHVybCwgZGF0YVJhdywgX2EpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLmhlYWRlcnNSYXcsIGhlYWRlcnNSYXcgPSBfYyA9PT0gdm9pZCAwID8gbnVsbCA6IF9jLCBfZCA9IF9iLnNob3dMb2FkZXIsIHNob3dMb2FkZXIgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kLCBfZSA9IF9iLnN0cmluZ2lmeURhdGEsIHN0cmluZ2lmeURhdGEgPSBfZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9lO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5wcmVwYXJlSGVhZGVycyhoZWFkZXJzUmF3KTtcclxuICAgICAgICB2YXIgZGF0YSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0cmluZ2lmeURhdGEpIHtcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGFSYXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxyXG4gICAgICAgICAgICAucG9zdChjb25maWdfMS5BcHBDb25maWcuYXBpVXJsICsgdXJsLCBkYXRhIHx8IGRhdGFSYXcsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5pbnRlcmNlcHQoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAodXJsLCBkYXRhUmF3LCBfYSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIF9jID0gX2IuaGVhZGVyc1JhdywgaGVhZGVyc1JhdyA9IF9jID09PSB2b2lkIDAgPyBudWxsIDogX2MsIF9kID0gX2Iuc2hvd0xvYWRlciwgc2hvd0xvYWRlciA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2Q7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB0aGlzLnByZXBhcmVIZWFkZXJzKGhlYWRlcnNSYXcpO1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YVJhdyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcclxuICAgICAgICAgICAgLnB1dChjb25maWdfMS5BcHBDb25maWcuYXBpVXJsICsgdXJsLCBkYXRhLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMuaW50ZXJjZXB0KGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwU2VydmljZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHVybCwgX2EpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBfYiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuc2hvd0xvYWRlciwgc2hvd0xvYWRlciA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB0aGlzLnByZXBhcmVIZWFkZXJzKG51bGwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgICAgICAgIC5kZWxldGUoY29uZmlnXzEuQXBwQ29uZmlnLmFwaVVybCArIHVybCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmludGVyY2VwdChlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cFNlcnZpY2UucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9zcGEnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fc3RvcmFnZS5rZXlzLnVzZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fc3RvcmFnZS5rZXlzLmFjY2Vzc1Rva2VuKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX3N0b3JhZ2Uua2V5cy5leHBpcmVzSW4pO1xyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvc3BhJ10pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEh0dHBTZXJ2aWNlLnByb3RvdHlwZS5mb3JtRXJyb3JNZXNzYWdlID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9ICdPb3BzLCBzb21ldGhpbmcgd3JvbmchJztcclxuICAgICAgICB2YXIgc2VydmVyRXJyb3JzID0gW107XHJcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLl9ib2R5KSB7XHJcbiAgICAgICAgICAgIHNlcnZlckVycm9ycyA9IEpTT04ucGFyc2UoZXJyb3IuX2JvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIGlmICghIXNlcnZlckVycm9ycykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHNlcnZlckVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlckVycm9ycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2VydmVyRXJyb3JzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucHVzaChzZXJ2ZXJFcnJvcnNbaV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZXMuam9pbignLCAnKTtcclxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIdHRwU2VydmljZTtcclxufSgpKTtcclxuSHR0cFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbmplY3RhYmxlKCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2h0dHBfMS5IdHRwLFxyXG4gICAgICAgIHN0b3JhZ2Vfc2VydmljZV8xLlN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgICAgIHJvdXRlcl8xLlJvdXRlcl0pXHJcbl0sIEh0dHBTZXJ2aWNlKTtcclxuZXhwb3J0cy5IdHRwU2VydmljZSA9IEh0dHBTZXJ2aWNlO1xyXG47XHJcbjtcclxuO1xyXG47XHJcbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC5zZXJ2aWNlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9zaGFyZWQtY29tcG9uZW50L3NlcnZpY2VzL2h0dHAuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi8uLi8uLi9jb25maWcvY29uZmlnXCIpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBTdG9yYWdlU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdG9yYWdlU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmtleXMgPSB7XHJcbiAgICAgICAgICAgICd1c2VyJzogJ3VzZXInLFxyXG4gICAgICAgICAgICAnYWNjZXNzVG9rZW4nOiAnQWNjZXNzVG9rZW4nLFxyXG4gICAgICAgICAgICAnZXhwaXJlc0luJzogJ0V4cGlyZXNJbicsXHJcbiAgICAgICAgICAgICdsYW5ndWFnZSc6ICdsYW5nJyxcclxuICAgICAgICAgICAgJ2xvZ2luQ3JlZGVudGlhbHMnOiAnbG9naW5DcmVkZW50aWFscydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMua2V5UHJlZml4ID0gY29uZmlnXzEuQXBwQ29uZmlnLnByb2plY3ROYW1lO1xyXG4gICAgfVxyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLl9nZXRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAga2V5ID0ga2V5LnRyaW0oKTtcclxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlQcmVmaXggKyBcIl9cIiArIGtleTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuc2V0SXRlbSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fZ2V0S2V5KGtleSksIHZhbHVlKTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9O1xyXG4gICAgU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fZ2V0S2V5KGtleSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTdG9yYWdlU2VydmljZTtcclxufSgpKTtcclxuU3RvcmFnZVNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbmplY3RhYmxlKCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXHJcbl0sIFN0b3JhZ2VTZXJ2aWNlKTtcclxuZXhwb3J0cy5TdG9yYWdlU2VydmljZSA9IFN0b3JhZ2VTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdG9yYWdlLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9SeFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUnhcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIGJvb2tfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vYm9va3Mtc2hhcmVkL2Jvb2staHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgYm9va19hZGRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9tb2RlbC9ib29rLWFkZC5tb2RlbFwiKTtcclxudmFyIEJvb2tBZGRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va0FkZENvbXBvbmVudChfaHR0cFNlcnZpY2UsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG4gICAgQm9va0FkZENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IGJvb2tfYWRkX21vZGVsXzEuQm9va0FkZE1vZGVsKG51bGwsIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldEJvb2tzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gYm9va19hZGRfbW9kZWxfMS5Cb29rQWRkTW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCb29rQWRkQ29tcG9uZW50LnByb3RvdHlwZS5nZXRJZHMgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC53cml0ZXJJZHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbF8xID0gdmFsOyBfaSA8IHZhbF8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgYSA9IHZhbF8xW19pXTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC53cml0ZXJJZHMucHVzaChhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQm9va0FkZENvbXBvbmVudC5wcm90b3R5cGUuY2hlY2tlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC53cml0ZXJJZHMgIT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwud3JpdGVySWRzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgQm9va0FkZENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwud3JpdGVySWRzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwud3JpdGVySWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3RCb29rKHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvc3BhL2Jvb2tzL2xpc3RcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdDaG9vc2Ugd3JpdGVyYHMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0Nob29zZSB3cml0ZXJgcycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9va0FkZENvbXBvbmVudDtcclxufSgpKTtcclxuQm9va0FkZENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9vay1hZGQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Jvb2stYWRkLmNvbXBvbmVudC5jc3MnKV1cclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtib29rX2h0dHBfc2VydmljZV8xLkJvb2tIdHRwU2VydmljZSwgcm91dGVyXzEuUm91dGVyXSlcclxuXSwgQm9va0FkZENvbXBvbmVudCk7XHJcbmV4cG9ydHMuQm9va0FkZENvbXBvbmVudCA9IEJvb2tBZGRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2stYWRkLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1hZGQvYm9vay1hZGQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2VsZWN0X2xpc3RfaXRlbV9tb2RlbF8xID0gcmVxdWlyZShcIi4vc2VsZWN0LWxpc3QtaXRlbS5tb2RlbFwiKTtcclxudmFyIEJvb2tBZGRNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb29rQWRkTW9kZWwoY2FwdGlvbiwgcHVibGlzaGVkRGF0ZSwgd3JpdGVySWRzLCB3cml0ZXJzKSB7XHJcbiAgICAgICAgaWYgKHdyaXRlcklkcyA9PT0gdm9pZCAwKSB7IHdyaXRlcklkcyA9IFtdOyB9XHJcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gY2FwdGlvbjtcclxuICAgICAgICB0aGlzLnB1Ymxpc2hlZERhdGUgPSBwdWJsaXNoZWREYXRlO1xyXG4gICAgICAgIHRoaXMud3JpdGVySWRzID0gd3JpdGVySWRzO1xyXG4gICAgICAgIHRoaXMud3JpdGVycyA9IHdyaXRlcnM7XHJcbiAgICB9XHJcbiAgICBCb29rQWRkTW9kZWwuZnJvbUpTT04gPSBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb29rQWRkTW9kZWwob2JqZWN0WydjYXB0aW9uJ10sIG9iamVjdFsncHVibGlzaERhdGUnXSwgb2JqZWN0Wyd3cml0ZXJJZHMnXSwgc2VsZWN0X2xpc3RfaXRlbV9tb2RlbF8xLlNlbGVjdExpc3RJdGVtLmZyb21KU09OQXJyYXkob2JqZWN0Wyd3cml0ZXJzJ10pKTtcclxuICAgIH07XHJcbiAgICBCb29rQWRkTW9kZWwuZnJvbUpTT05BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gQm9va0FkZE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb29rQWRkTW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQm9va0FkZE1vZGVsID0gQm9va0FkZE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWFkZC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvYm9vay1hZGQubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSAoc3VibWl0KT1cXFwib25TdWJtaXRGb3JtKClcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImZpcnN0TmFtZVxcXCI+Q2FwdGlvbjo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5jYXB0aW9uXFxcIiBuYW1lPVxcXCJjYXB0aW9uXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdE5hbWVcXFwiPlB1Ymxpc2ggZGF0ZTo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5wdWJsaXNoZWREYXRlXFxcIiBuYW1lPVxcXCJwdWJsaXNoZWREYXRlXFxcIiB0eXBlPVxcXCJkYXRlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYmlvZ3JhcGh5XFxcIj5Xcml0ZXJzOjwvbGFiZWw+XFxyXFxuICAgICAgICA8YXBwLWF1dG9jb21wbGV0ZSAod3JpdGVyc0lkc0NoYW5nZWQpPVxcXCJnZXRJZHMoJGV2ZW50KVxcXCIgW0lkc10gPSBcXFwibW9kZWwud3JpdGVySWRzXFxcIiBbaXRlbXNdPVxcXCJtb2RlbC53cml0ZXJzXFxcIiByZXF1aXJlZD48L2FwcC1hdXRvY29tcGxldGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+U3VibWl0PC9idXR0b24+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtYWRkL2Jvb2stYWRkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9vay1hZGQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtYWRkL2Jvb2stYWRkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJvb2tfZWRpdF9tb2RlbF8xID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbW9kZWwvYm9vay1lZGl0Lm1vZGVsXCIpO1xyXG52YXIgYm9va19odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9ib29rcy1zaGFyZWQvYm9vay1odHRwLnNlcnZpY2VcIik7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIik7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIEJvb2tFZGl0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tFZGl0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGUsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIEJvb2tFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgX3RoaXMuaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldEJvb2tCeUlkKHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IGJvb2tfZWRpdF9tb2RlbF8xLkJvb2tFZGl0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCb29rRWRpdENvbXBvbmVudC5wcm90b3R5cGUuZ2V0SWRzID0gZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwud3JpdGVySWRzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWxfMSA9IHZhbDsgX2kgPCB2YWxfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGEgPSB2YWxfMVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwud3JpdGVySWRzLnB1c2goYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5vblN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC53cml0ZXJJZHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC53cml0ZXJJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucHV0Qm9vayh0aGlzLmlkLCB0aGlzLm1vZGVsKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3NwYS9ib29rcy9saXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnQ2hvb3NlIHdyaXRlcmBzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdDaG9vc2Ugd3JpdGVyYHMnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJvb2tFZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5Cb29rRWRpdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9vay1lZGl0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ib29rLWVkaXQuY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2Jvb2tfaHR0cF9zZXJ2aWNlXzEuQm9va0h0dHBTZXJ2aWNlLFxyXG4gICAgICAgIHJvdXRlcl8xLkFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHJvdXRlcl8xLlJvdXRlcl0pXHJcbl0sIEJvb2tFZGl0Q29tcG9uZW50KTtcclxuZXhwb3J0cy5Cb29rRWRpdENvbXBvbmVudCA9IEJvb2tFZGl0Q29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWVkaXQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2VsZWN0X2xpc3RfaXRlbV9tb2RlbF8xID0gcmVxdWlyZShcIi4vc2VsZWN0LWxpc3QtaXRlbS5tb2RlbFwiKTtcclxudmFyIEJvb2tFZGl0TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va0VkaXRNb2RlbChpZCwgY2FwdGlvbiwgcHVibGlzaGVkRGF0ZSwgd3JpdGVySWRzLCB3cml0ZXJNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNhcHRpb24gPSBjYXB0aW9uO1xyXG4gICAgICAgIHRoaXMucHVibGlzaGVkRGF0ZSA9IHB1Ymxpc2hlZERhdGU7XHJcbiAgICAgICAgdGhpcy53cml0ZXJJZHMgPSB3cml0ZXJJZHM7XHJcbiAgICAgICAgdGhpcy53cml0ZXJNb2RlbCA9IHdyaXRlck1vZGVsO1xyXG4gICAgfVxyXG4gICAgQm9va0VkaXRNb2RlbC5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJvb2tFZGl0TW9kZWwob2JqZWN0WydpZCddLCBvYmplY3RbJ2NhcHRpb24nXSwgb2JqZWN0WydwdWJsaXNoZWREYXRlJ10sIG9iamVjdFsnd3JpdGVySWRzJ10sIHNlbGVjdF9saXN0X2l0ZW1fbW9kZWxfMS5TZWxlY3RMaXN0SXRlbS5mcm9tSlNPTkFycmF5KG9iamVjdFsnd3JpdGVycyddKSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0VkaXRNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBCb29rRWRpdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb29rRWRpdE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tFZGl0TW9kZWwgPSBCb29rRWRpdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWVkaXQubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL2Jvb2stZWRpdC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCJcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48Zm9ybSAoc3VibWl0KT1cXFwib25TdWJtaXRGb3JtKClcXFwiICpuZ0lmPVxcXCJtb2RlbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5DYXB0aW9uOjwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmNhcHRpb25cXFwiIG5hbWU9XFxcImNhcHRpb25cXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJwdWJsaXNoZWREYXRlXFxcIj5QdWJsaXNoIGRhdGU6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XFxcIm1vZGVsLnB1Ymxpc2hlZERhdGV8IGRhdGU6J3l5eXktTU0tZGQnXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcIm1vZGVsLnB1Ymxpc2hlZERhdGUgPSAkZXZlbnRcXFwiIG5hbWU9XFxcInB1Ymxpc2hlZERhdGVcXFwiIHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ3cml0ZXJzXFxcIj5Xcml0ZXJzOjwvbGFiZWw+XFxyXFxuICAgICAgICA8YXBwLWF1dG9jb21wbGV0ZSAod3JpdGVyc0lkc0NoYW5nZWQpPVxcXCJnZXRJZHMoJGV2ZW50KVxcXCIgW0lkc10gPSBcXFwibW9kZWwud3JpdGVySWRzXFxcIiBbaXRlbXNdPVxcXCJtb2RlbC53cml0ZXJNb2RlbFxcXCI+PC9hcHAtYXV0b2NvbXBsZXRlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ib29rLWVkaXQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay1lZGl0L2Jvb2stZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLWVkaXQvYm9vay1lZGl0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYm9va19odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLy4uL2Jvb2tzLXNoYXJlZC9ib29rLWh0dHAuc2VydmljZVwiKTtcclxudmFyIGJvb2tfbGlzdF9tb2RlbF8xID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbW9kZWwvYm9vay1saXN0Lm1vZGVsXCIpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBwYWdpbmF0b3JfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudFwiKTtcclxudmFyIEJvb2tMaXN0Q29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tMaXN0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcGFnZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UgPSBfaHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5wYWdlclNlcnZpY2UgPSBwYWdlclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5pc0FkZFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRWRpdFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhZ2VyID0ge307XHJcbiAgICB9XHJcbiAgICBCb29rTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRTb3J0aW5nQm9va3MoJ2NhcHRpb24nLCAnQVNDJywgMSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gYm9va19saXN0X21vZGVsXzEuQm9va0xpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICBfdGhpcy5fc2V0UGFnZSgxKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBCb29rTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc2h1cmUgP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9odHRwU2VydmljZS5kZWxldGVCb29rKGlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7IF90aGlzLm5nT25Jbml0KCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCb29rTGlzdENvbXBvbmVudC5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIChjb2x1bW5OYW1lKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5kaXJlY3Rpb24gPT0gJ0FTQycpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5kaXJlY3Rpb24gPSBcIkRFU0NcIjtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5jb2x1bW4gPSBjb2x1bW5OYW1lO1xyXG4gICAgICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRTb3J0aW5nQm9va3ModGhpcy5tb2RlbC5jb2x1bW4sIHRoaXMubW9kZWwuZGlyZWN0aW9uLCB0aGlzLm1vZGVsLnBhZ2UpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm1vZGVsID0gYm9va19saXN0X21vZGVsXzEuQm9va0xpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJBU0NcIjtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0Jvb2tzKHRoaXMubW9kZWwuY29sdW1uLCB0aGlzLm1vZGVsLmRpcmVjdGlvbiwgdGhpcy5tb2RlbC5wYWdlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5tb2RlbCA9IGJvb2tfbGlzdF9tb2RlbF8xLkJvb2tMaXN0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tMaXN0Q29tcG9uZW50LnByb3RvdHlwZS5fc2V0UGFnZSA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAocGFnZSA8IDEgfHwgcGFnZSA+IHRoaXMubW9kZWwudG90YWxQYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLnBhZ2VyID0gdGhpcy5wYWdlclNlcnZpY2UuZ2V0UGFnZXIodGhpcy5tb2RlbC5wYWdlLCB0aGlzLm1vZGVsLnBhZ2VTaXplLCB0aGlzLm1vZGVsLnRvdGFsUGFnZSk7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0Jvb2tzKHRoaXMubW9kZWwuY29sdW1uLCB0aGlzLm1vZGVsLmRpcmVjdGlvbiwgdGhpcy5tb2RlbC5wYWdlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSBib29rX2xpc3RfbW9kZWxfMS5Cb29rTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJvb2tMaXN0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5Cb29rTGlzdENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9vay1saXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ib29rLWxpc3QuY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2Jvb2tfaHR0cF9zZXJ2aWNlXzEuQm9va0h0dHBTZXJ2aWNlLCBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXSlcclxuXSwgQm9va0xpc3RDb21wb25lbnQpO1xyXG5leHBvcnRzLkJvb2tMaXN0Q29tcG9uZW50ID0gQm9va0xpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2stbGlzdC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MtbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgYm9va19tb2RlbF8xID0gcmVxdWlyZShcIi4vYm9vay5tb2RlbFwiKTtcclxudmFyIEJvb2tMaXN0TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va0xpc3RNb2RlbChmaWx0ZXIsIGNvbHVtbiwgZGlyZWN0aW9uLCBoYXNOZXh0UGFnZSwgaGFzUHJlUGFnZSwgcGFnZVNpemUsIHRvdGFsUGFnZSwgcGFnZSwgYm9va01vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5oYXNOZXh0UGFnZSA9IGhhc05leHRQYWdlO1xyXG4gICAgICAgIHRoaXMuaGFzUHJlUGFnZSA9IGhhc1ByZVBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xyXG4gICAgICAgIHRoaXMudG90YWxQYWdlID0gdG90YWxQYWdlO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5ib29rTW9kZWwgPSBib29rTW9kZWw7XHJcbiAgICB9XHJcbiAgICBCb29rTGlzdE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9va0xpc3RNb2RlbChvYmplY3RbJ2ZpbHRlciddLCBvYmplY3RbJ29yZGVyJ11bJ2NvbHVtbiddLCBvYmplY3RbJ29yZGVyJ11bJ2RpcmVjdGlvbiddLCBvYmplY3RbJ2hhc05leHRQYWdlJ10sIG9iamVjdFsnaGFzUHJldmlvdXNQYWdlJ10sIG9iamVjdFsncGFnZVNpemUnXSwgb2JqZWN0Wyd0b3RhbFBhZ2VzJ10sIG9iamVjdFsncGFnZSddLCBib29rX21vZGVsXzEuQm9va01vZGVsLmZyb21KU09OQXJyYXkob2JqZWN0WydpdGVtcyddKSk7XHJcbiAgICB9O1xyXG4gICAgQm9va0xpc3RNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBCb29rTGlzdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb29rTGlzdE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tMaXN0TW9kZWwgPSBCb29rTGlzdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rLWxpc3QubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL2Jvb2stbGlzdC5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdyaXRlcl9tb2RlbF8xID0gcmVxdWlyZShcIi4vd3JpdGVyLm1vZGVsXCIpO1xyXG52YXIgQm9va01vZGVsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJvb2tNb2RlbChpZCwgY2FwdGlvbiwgcHVibGlzaERhdGUsIHdyaXRlck1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IGNhcHRpb247XHJcbiAgICAgICAgdGhpcy5wdWJsaXNoRGF0ZSA9IHB1Ymxpc2hEYXRlO1xyXG4gICAgICAgIHRoaXMud3JpdGVyTW9kZWwgPSB3cml0ZXJNb2RlbDtcclxuICAgIH1cclxuICAgIEJvb2tNb2RlbC5mcm9tSlNPTiA9IGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJvb2tNb2RlbChvYmplY3RbJ2lkJ10sIG9iamVjdFsnY2FwdGlvbiddLCBvYmplY3RbJ3B1Ymxpc2hlZERhdGUnXSwgd3JpdGVyX21vZGVsXzEuV3JpdGVyTW9kZWwuZnJvbUpTT05BcnJheShvYmplY3RbJ3dyaXRlcnMnXSkpO1xyXG4gICAgfTtcclxuICAgIEJvb2tNb2RlbC5mcm9tSlNPTkFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBCb29rTW9kZWwuZnJvbUpTT04ob2JqKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJvb2tNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29rTW9kZWwgPSBCb29rTW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2subW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL2Jvb2subW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBib29rX21vZGVsXzEgPSByZXF1aXJlKFwiLi9ib29rLm1vZGVsXCIpO1xyXG52YXIgV3JpdGVyTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyTW9kZWwoaWQsIGZ1bGxOYW1lLCBkYXRlT2ZCaXJ0aCwgYmlvZ3JhcGh5LCBCb29rKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcclxuICAgICAgICB0aGlzLmRhdGVPZkJpcnRoID0gZGF0ZU9mQmlydGg7XHJcbiAgICAgICAgdGhpcy5iaW9ncmFwaHkgPSBiaW9ncmFwaHk7XHJcbiAgICAgICAgdGhpcy5Cb29rID0gQm9vaztcclxuICAgIH1cclxuICAgIFdyaXRlck1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgV3JpdGVyTW9kZWwob2JqZWN0WydpZCddLCBvYmplY3RbJ2Z1bGxOYW1lJ10sIG9iamVjdFsnZGF0ZU9mQmlydGgnXSwgb2JqZWN0WydiaW9ncmFwaHknXSwgYm9va19tb2RlbF8xLkJvb2tNb2RlbC5mcm9tSlNPTkFycmF5KG9iamVjdFsnYm9va3MnXSkpO1xyXG4gICAgfTtcclxuICAgIFdyaXRlck1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIFdyaXRlck1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJNb2RlbCA9IFdyaXRlck1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXIubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL3dyaXRlci5tb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBhZ2VyU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdlclNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICBQYWdlclNlcnZpY2UucHJvdG90eXBlLnJhbmdlID0gZnVuY3Rpb24gKHN0YXJ0LCBjb3VudCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseSgwLCBBcnJheShjb3VudCkpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCArIHN0YXJ0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFBhZ2VyU2VydmljZS5wcm90b3R5cGUuZ2V0UGFnZXIgPSBmdW5jdGlvbiAoY3VycmVudFBhZ2UsIHBhZ2VTaXplLCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlID09PSB2b2lkIDApIHsgY3VycmVudFBhZ2UgPSAxOyB9XHJcbiAgICAgICAgaWYgKHBhZ2VTaXplID09PSB2b2lkIDApIHsgcGFnZVNpemUgPSA1OyB9XHJcbiAgICAgICAgdmFyIHN0YXJ0UGFnZSA9IDEsIGVuZFBhZ2U7XHJcbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAoY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplO1xyXG4gICAgICAgIHZhciBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBwYWdlU2l6ZTtcclxuICAgICAgICB2YXIgcGFnZXMgPSB0aGlzLnJhbmdlKHN0YXJ0UGFnZSwgdG90YWxQYWdlcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgICAgIHN0YXJ0UGFnZTogc3RhcnRQYWdlLFxyXG4gICAgICAgICAgICBlbmRQYWdlOiBlbmRQYWdlLFxyXG4gICAgICAgICAgICBzdGFydEluZGV4OiBzdGFydEluZGV4LFxyXG4gICAgICAgICAgICBlbmRJbmRleDogZW5kSW5kZXgsXHJcbiAgICAgICAgICAgIHBhZ2VzOiBwYWdlc1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBhZ2VyU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5QYWdlclNlcnZpY2UgPSBQYWdlclNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2luYXRvci5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL3NoYXJlZC1jb21wb25lbnQvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8YnI+XFxyXFxuPHA+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uLycsICdhZGQnXVxcXCI+QWRkIGJvb2s8L2J1dHRvbj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJ2YWxpZGF0ZSBmaWx0ZXItaW5wdXRcXFwiIFsobmdNb2RlbCldPXF1ZXJ5PlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiB2YWx1ZT1cXFwiU2VhcmNoXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAvPiB8XFxyXFxuXFxyXFxuPC9wPlxcclxcbjxkaXYgY2xhc3M9XFxcImN1c3RvbWVyLWxpc3QtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1yZXNwb25zaXZlXFxcIj5cXHJcXG4gICAgICAgIDx0aGVhZCBjbGFzcz1cXFwidGFibGUtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGUtY2VsbCB0YWJsZS1uYW1lXFxcIiAoY2xpY2spPVxcXCJzb3J0KCdjYXB0aW9uJyk7XFxcIj5DYXB0aW9uPC90aD5cXHJcXG4gICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGUtY2VsbCB0YWJsZS1kYXRlXFxcIiAoY2xpY2spPVxcXCJzb3J0KCdkYXRlJyk7XFxcIj5QdWJsaXNoIERhdGU8L3RoPlxcclxcbiAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZS1jZWxsIHRhYmxlLXN0YXR1c1xcXCI+QXV0aG9yczwvdGg+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRib2R5IGNsYXNzPVxcXCJ0YWJsZS1yb3dcXFwiICpuZ0Zvcj1cXFwibGV0IGN1c3RvbWVyIG9mIG1vZGVsPy5ib29rTW9kZWxcXFwiPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7Y3VzdG9tZXI/LmNhcHRpb259fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyPy5wdWJsaXNoRGF0ZSB8IGRhdGU6ICdkZC9NTS95eXl5J319PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPiA8c3BhbiAqbmdGb3I9XFxcImxldCBhdXRob3Igb2YgY3VzdG9tZXI/LndyaXRlck1vZGVsXFxcIj57e2F1dGhvci5mdWxsTmFtZX19PC9zcGFuPiA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnLi4vJywgY3VzdG9tZXIuaWQsICdlZGl0J11cXFwiPkVkaXQ8L2E+fFxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiZGVsZXRlKGN1c3RvbWVyLmlkKVxcXCI+RGVsZXRlPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPiAgICBcXHJcXG4gICAgPGRpdiBzdHlsZT1cXFwiZGlzcGxheTppbmxpbmUtYmxvY2s7XFxcIj5cXHJcXG4gICAgICAgIDx1bCAqbmdJZj1cXFwicGFnZXI/LnBhZ2VzICYmIHBhZ2VyPy5wYWdlcz8ubGVuZ3RoXFxcIiBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gMX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZSgxKVxcXCI+Rmlyc3Q8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXI/LmN1cnJlbnRQYWdlID09PSAxfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKHBhZ2VyPy5jdXJyZW50UGFnZSAtIDEpXFxcIj5QcmV2aW91czwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBwYWdlIG9mIHBhZ2VyLnBhZ2VzXFxcIiBbbmdDbGFzc109XFxcInthY3RpdmU6cGFnZXI/LmN1cnJlbnRQYWdlID09PSBwYWdlfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKHBhZ2UpXFxcIj57e3BhZ2V9fTwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlci5jdXJyZW50UGFnZSA9PT0gbW9kZWw/LnRvdGFsUGFnZX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShwYWdlci5jdXJyZW50UGFnZSArIDEpXFxcIj5OZXh0PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyPy5jdXJyZW50UGFnZSA9PT0gbW9kZWw/LnRvdGFsUGFnZX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJfc2V0UGFnZShtb2RlbD8udG90YWxQYWdlKVxcXCI+TGFzdDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2stbGlzdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG50aCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFibGUtc3RhdHVzIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgQm9va3NDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va3NDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICBCb29rc0NvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJvb2tzQ29tcG9uZW50O1xyXG59KCkpO1xyXG5Cb29rc0NvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9vay5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYm9vay5jb21wb25lbnQuY3NzJyldXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcclxuXSwgQm9va3NDb21wb25lbnQpO1xyXG5leHBvcnRzLkJvb2tzQ29tcG9uZW50ID0gQm9va3NDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2suY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2suY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2suY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9vay5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBib29rX2FkZF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2Jvb2tzLWFkZC9ib29rLWFkZC5jb21wb25lbnRcIik7XHJcbnZhciBib29rX2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9ib29rcy1saXN0L2Jvb2stbGlzdC5jb21wb25lbnRcIik7XHJcbnZhciBib29rX2VkaXRfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9ib29rLWVkaXQvYm9vay1lZGl0LmNvbXBvbmVudFwiKTtcclxudmFyIGJvb2tfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9ib29rLmNvbXBvbmVudFwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxuZXhwb3J0cy5ib29rc1JvdXRlcyA9IFt7XHJcbiAgICAgICAgcGF0aDogJ3NwYS9ib29rcycsXHJcbiAgICAgICAgY29tcG9uZW50OiBib29rX2NvbXBvbmVudF8xLkJvb2tzQ29tcG9uZW50LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdsaXN0JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogYm9va19saXN0X2NvbXBvbmVudF8xLkJvb2tMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJzppZC9lZGl0JywgY29tcG9uZW50OiBib29rX2VkaXRfY29tcG9uZW50XzEuQm9va0VkaXRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnYWRkJywgY29tcG9uZW50OiBib29rX2FkZF9jb21wb25lbnRfMS5Cb29rQWRkQ29tcG9uZW50IH1cclxuICAgICAgICBdXHJcbiAgICB9XTtcclxuZXhwb3J0cy5hcHBSb3V0aW5nUHJvdmlkZXJzID0gW107XHJcbmV4cG9ydHMuYm9va3NSb3V0aW5nID0gcm91dGVyXzEuUm91dGVyTW9kdWxlLmZvckNoaWxkKGV4cG9ydHMuYm9va3NSb3V0ZXMpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib29rcy5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2Jvb2tzL2Jvb2tzLnJvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB3cml0ZXJfZWRpdF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50XCIpO1xyXG52YXIgd3JpdGVyX2FkZF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50XCIpO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBmb3Jtc18xID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xyXG52YXIgY29tbW9uXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xyXG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xyXG52YXIgd3JpdGVyX2xpc3RfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50XCIpO1xyXG52YXIgd3JpdGVyc19jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMuY29tcG9uZW50XCIpO1xyXG52YXIgd3JpdGVyX2h0dHBfc2VydmljZV8xID0gcmVxdWlyZShcIi4vd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZVwiKTtcclxudmFyIHBhZ2luYXRvcl9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQtY29tcG9uZW50L3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50XCIpO1xyXG52YXIgV3JpdGVyc01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJzTW9kdWxlKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFdyaXRlcnNNb2R1bGU7XHJcbn0oKSk7XHJcbldyaXRlcnNNb2R1bGUgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5OZ01vZHVsZSh7XHJcbiAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgICBjb21tb25fMS5Db21tb25Nb2R1bGUsXHJcbiAgICAgICAgICAgIHJvdXRlcl8xLlJvdXRlck1vZHVsZSxcclxuICAgICAgICAgICAgZm9ybXNfMS5Gb3Jtc01vZHVsZVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgIHdyaXRlcnNfY29tcG9uZW50XzEuV3JpdGVyc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgd3JpdGVyX2xpc3RfY29tcG9uZW50XzEuV3JpdGVyTGlzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgd3JpdGVyX2VkaXRfY29tcG9uZW50XzEuV3JpdGVyRWRpdENvbXBvbmVudCxcclxuICAgICAgICAgICAgd3JpdGVyX2FkZF9jb21wb25lbnRfMS5Xcml0ZXJBZGRDb21wb25lbnRcclxuICAgICAgICBdLFxyXG4gICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEuV3JpdGVySHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgIHBhZ2luYXRvcl9jb21wb25lbnRfMS5QYWdlclNlcnZpY2VcclxuICAgICAgICBdXHJcbiAgICB9KVxyXG5dLCBXcml0ZXJzTW9kdWxlKTtcclxuZXhwb3J0cy5Xcml0ZXJzTW9kdWxlID0gV3JpdGVyc01vZHVsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVycy5tb2R1bGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLm1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB3cml0ZXJfZWRpdF9tb2RlbF8xID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbW9kZWwvd3JpdGVyLWVkaXQubW9kZWxcIik7XHJcbnZhciB3cml0ZXJfaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vd3JpdGVycy1zaGFyZWQvd3JpdGVyLWh0dHAuc2VydmljZVwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxucmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgV3JpdGVyRWRpdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJFZGl0Q29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGUsIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIFdyaXRlckVkaXRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBfdGhpcy5pZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0V3JpdGVyQnlJZCh0aGlzLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfZWRpdF9tb2RlbF8xLldyaXRlckVkaXRNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckVkaXRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnB1dFdyaXRlcih0aGlzLmlkLCB0aGlzLm1vZGVsKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfZWRpdF9tb2RlbF8xLldyaXRlckVkaXRNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICBfdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9zcGEvd3JpdGVycy9saXN0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJFZGl0Q29tcG9uZW50O1xyXG59KCkpO1xyXG5Xcml0ZXJFZGl0Q29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXItZWRpdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgICAgIHN0eWxlczogW3JlcXVpcmUoJy4vd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3dyaXRlcl9odHRwX3NlcnZpY2VfMS5Xcml0ZXJIdHRwU2VydmljZSxcclxuICAgICAgICByb3V0ZXJfMS5BY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICByb3V0ZXJfMS5Sb3V0ZXJdKVxyXG5dLCBXcml0ZXJFZGl0Q29tcG9uZW50KTtcclxuZXhwb3J0cy5Xcml0ZXJFZGl0Q29tcG9uZW50ID0gV3JpdGVyRWRpdENvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLWVkaXQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBXcml0ZXJFZGl0TW9kZWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyRWRpdE1vZGVsKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGRhdGVPZkJpcnRoLCBiaW9ncmFwaHkpIHtcclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcclxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5kYXRlT2ZCaXJ0aCA9IGRhdGVPZkJpcnRoO1xyXG4gICAgICAgIHRoaXMuYmlvZ3JhcGh5ID0gYmlvZ3JhcGh5O1xyXG4gICAgfVxyXG4gICAgV3JpdGVyRWRpdE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgV3JpdGVyRWRpdE1vZGVsKG9iamVjdFsnZmlyc3ROYW1lJ10sIG9iamVjdFsnbGFzdE5hbWUnXSwgb2JqZWN0WydkYXRlT2ZCaXJ0aCddLCBvYmplY3RbJ2Jpb2dyYXBoeSddKTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJFZGl0TW9kZWwuZnJvbUpTT05BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gV3JpdGVyRWRpdE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJFZGl0TW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV3JpdGVyRWRpdE1vZGVsID0gV3JpdGVyRWRpdE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItZWRpdC5tb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvbW9kZWwvd3JpdGVyLWVkaXQubW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jb25maWcvY29uZmlnXCIpO1xyXG52YXIgaHR0cF9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9zZXJ2aWNlcy9odHRwLnNlcnZpY2VcIik7XHJcbnJlcXVpcmUoXCJyeGpzL1J4XCIpO1xyXG52YXIgV3JpdGVySHR0cFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVySHR0cFNlcnZpY2UoX2h0dHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UgPSBfaHR0cFNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0V3JpdGVyQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5nZXQoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0U29ydGluZ0N1c3RvbWVycyA9IGZ1bmN0aW9uIChzb3J0QnksIG9yZGVyQnksIHBhZ2VOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlclxyXG4gICAgICAgICAgICArIFwiP3NvcnRPcmRlcj1cIiArIHNvcnRCeSArIFwiJmRpcmVjdGlvbj1cIiArIG9yZGVyQnkgKyBcIiZwYWdlPVwiICsgcGFnZU51bWJlcilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUuZ2V0V3JpdGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UuZ2V0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlcilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcclxuICAgIH07XHJcbiAgICBXcml0ZXJIdHRwU2VydmljZS5wcm90b3R5cGUucG9zdFdyaXRlciA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3QoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyLCBkYXRhKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5qc29uKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckh0dHBTZXJ2aWNlLnByb3RvdHlwZS5wdXRXcml0ZXIgPSBmdW5jdGlvbiAoaWQsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZpY2UucHV0KGNvbmZpZ18xLkFwcENvbmZpZy51cmxzLndyaXRlciArIFwiL1wiICsgaWQsIGRhdGEpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVySHR0cFNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZVdyaXRlciA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5kZWxldGUoY29uZmlnXzEuQXBwQ29uZmlnLnVybHMud3JpdGVyICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXM7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJIdHRwU2VydmljZTtcclxufSgpKTtcclxuV3JpdGVySHR0cFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5JbmplY3RhYmxlKCksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW2h0dHBfc2VydmljZV8xLkh0dHBTZXJ2aWNlXSlcclxuXSwgV3JpdGVySHR0cFNlcnZpY2UpO1xyXG5leHBvcnRzLldyaXRlckh0dHBTZXJ2aWNlID0gV3JpdGVySHR0cFNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1odHRwLnNlcnZpY2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gKHN1Ym1pdCk9XFxcIm9uU3VibWl0Rm9ybSgpXFxcIiAqbmdJZj1cXFwibW9kZWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImZpcnN0TmFtZVxcXCI+Rmlyc3QgbmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXN0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgbmFtZTo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJtb2RlbC5sYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJkYXRlT2ZCaXJ0aFxcXCI+RGF0ZSBvZiBiaXJ0aDo8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cXFwibW9kZWwuZGF0ZU9mQmlydGh8IGRhdGU6J3l5eXktTU0tZGQnXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcIm1vZGVsLmRhdGVPZkJpcnRoID0gJGV2ZW50XFxcIiBuYW1lPVxcXCJkYXRlT2ZCaXJ0aFxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJpb2dyYXBoeVxcXCI+QmlvZ3JhcGh5OjwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmJpb2dyYXBoeVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYmlvZ3JhcGh5XFxcIj48L3RleHRhcmVhPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dyaXRlci1lZGl0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycnMtZWRpdC93cml0ZXItZWRpdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnJzLWVkaXQvd3JpdGVyLWVkaXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIHdyaXRlcl9odHRwX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi93cml0ZXJzLXNoYXJlZC93cml0ZXItaHR0cC5zZXJ2aWNlXCIpO1xyXG52YXIgd3JpdGVyX2FkZF9tb2RlbF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL21vZGVsL3dyaXRlci1hZGQubW9kZWxcIik7XHJcbnZhciBXcml0ZXJBZGRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyQWRkQ29tcG9uZW50KF9odHRwU2VydmljZSwgcm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UgPSBfaHR0cFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBXcml0ZXJBZGRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgd3JpdGVyX2FkZF9tb2RlbF8xLldyaXRlckFkZE1vZGVsKG51bGwsIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckFkZENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdFdyaXRlcih0aGlzLm1vZGVsKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgX3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvc3BhL3dyaXRlcnMvbGlzdFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV3JpdGVyQWRkQ29tcG9uZW50O1xyXG59KCkpO1xyXG5Xcml0ZXJBZGRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyaXRlci1hZGQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3dyaXRlci1hZGQuY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSksXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3dyaXRlcl9odHRwX3NlcnZpY2VfMS5Xcml0ZXJIdHRwU2VydmljZSwgcm91dGVyXzEuUm91dGVyXSlcclxuXSwgV3JpdGVyQWRkQ29tcG9uZW50KTtcclxuZXhwb3J0cy5Xcml0ZXJBZGRDb21wb25lbnQgPSBXcml0ZXJBZGRDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1hZGQuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBXcml0ZXJBZGRNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJBZGRNb2RlbChmaXJzdE5hbWUsIGxhc3ROYW1lLCBkYXRlT2ZCaXJ0aCwgYmlvZ3JhcGh5KSB7XHJcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuZGF0ZU9mQmlydGggPSBkYXRlT2ZCaXJ0aDtcclxuICAgICAgICB0aGlzLmJpb2dyYXBoeSA9IGJpb2dyYXBoeTtcclxuICAgIH1cclxuICAgIFdyaXRlckFkZE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgV3JpdGVyQWRkTW9kZWwob2JqZWN0WydmaXJzdE5hbWUnXSwgb2JqZWN0WydsYXN0TmFtZSddLCBvYmplY3RbJ2RhdGVPZkJpcnRoJ10sIG9iamVjdFsnYmlvZ3JhcGh5J10pO1xyXG4gICAgfTtcclxuICAgIFdyaXRlckFkZE1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIFdyaXRlckFkZE1vZGVsLmZyb21KU09OKG9iaik7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJBZGRNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Xcml0ZXJBZGRNb2RlbCA9IFdyaXRlckFkZE1vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13cml0ZXItYWRkLm1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9tb2RlbC93cml0ZXItYWRkLm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gKHN1Ym1pdCk9XFxcIm9uU3VibWl0Rm9ybSgpXFxcIiA+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwibW9kZWwuZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBuYW1lOjwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImRhdGVPZkJpcnRoXFxcIj5EYXRlIG9mIGJpcnRoOjwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmRhdGVPZkJpcnRoXFxcIiBuYW1lPVxcXCJkYXRlT2ZCaXJ0aFxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJpb2dyYXBoeVxcXCI+QmlvZ3JhcGh5OjwvbGFiZWw+XFxyXFxuICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmJpb2dyYXBoeVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYmlvZ3JhcGh5XFxcIj48L3RleHRhcmVhPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbjwvZm9ybT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dyaXRlci1hZGQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWFkZC93cml0ZXItYWRkLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1hZGQvd3JpdGVyLWFkZC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHdyaXRlcl9saXN0X21vZGVsXzEgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9tb2RlbC93cml0ZXItbGlzdC5tb2RlbFwiKTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgd3JpdGVyX2h0dHBfc2VydmljZV8xID0gcmVxdWlyZShcIi4uL3dyaXRlcnMtc2hhcmVkL3dyaXRlci1odHRwLnNlcnZpY2VcIik7XHJcbnZhciBwYWdpbmF0b3JfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkLWNvbXBvbmVudC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudFwiKTtcclxudmFyIFdyaXRlckxpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyTGlzdENvbXBvbmVudChfaHR0cFNlcnZpY2UsIHBhZ2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlID0gX2h0dHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucGFnZXJTZXJ2aWNlID0gcGFnZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuaXNBZGRWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0VkaXRWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHt9O1xyXG4gICAgfVxyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRXcml0ZXJzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm1vZGVsID0gd3JpdGVyX2xpc3RfbW9kZWxfMS5Xcml0ZXJMaXN0TW9kZWwuZnJvbUpTT04ocmVzKTtcclxuICAgICAgICAgICAgX3RoaXMuX3NldFBhZ2UoMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc2h1cmUgP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9odHRwU2VydmljZS5kZWxldGVXcml0ZXIoaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHsgX3RoaXMubmdPbkluaXQoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFdyaXRlckxpc3RDb21wb25lbnQucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbiAoY29sdW1uTmFtZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZGlyZWN0aW9uID09ICdBU0MnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJERVNDXCI7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY29sdW1uID0gY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gXCJBU0NcIjtcclxuICAgICAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U29ydGluZ0N1c3RvbWVycyh0aGlzLm1vZGVsLmNvbHVtbiwgdGhpcy5tb2RlbC5kaXJlY3Rpb24sIHRoaXMubW9kZWwucGFnZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwgPSB3cml0ZXJfbGlzdF9tb2RlbF8xLldyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdENvbXBvbmVudC5wcm90b3R5cGUuX3NldFBhZ2UgPSBmdW5jdGlvbiAocGFnZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLm1vZGVsLnRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlciA9IHRoaXMucGFnZXJTZXJ2aWNlLmdldFBhZ2VyKHRoaXMubW9kZWwucGFnZSwgdGhpcy5tb2RlbC5wYWdlU2l6ZSwgdGhpcy5tb2RlbC50b3RhbFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFNvcnRpbmdDdXN0b21lcnModGhpcy5tb2RlbC5jb2x1bW4sIHRoaXMubW9kZWwuZGlyZWN0aW9uLCB0aGlzLm1vZGVsLnBhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RlbCA9IHdyaXRlcl9saXN0X21vZGVsXzEuV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbn0oKSk7XHJcbldyaXRlckxpc3RDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyaXRlci1saXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93cml0ZXItbGlzdC5jb21wb25lbnQuY3NzJyldXHJcbiAgICB9KSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbd3JpdGVyX2h0dHBfc2VydmljZV8xLldyaXRlckh0dHBTZXJ2aWNlLCBwYWdpbmF0b3JfY29tcG9uZW50XzEuUGFnZXJTZXJ2aWNlXSlcclxuXSwgV3JpdGVyTGlzdENvbXBvbmVudCk7XHJcbmV4cG9ydHMuV3JpdGVyTGlzdENvbXBvbmVudCA9IFdyaXRlckxpc3RDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdyaXRlci1saXN0LmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy93cml0ZXJzL3dyaXRlcnMtbGlzdC93cml0ZXItbGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB3cml0ZXJfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL3dyaXRlci5tb2RlbFwiKTtcclxudmFyIFdyaXRlckxpc3RNb2RlbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXcml0ZXJMaXN0TW9kZWwoZmlsdGVyLCBjb2x1bW4sIGRpcmVjdGlvbiwgaGFzTmV4dFBhZ2UsIGhhc1ByZVBhZ2UsIHBhZ2VTaXplLCB0b3RhbFBhZ2UsIHBhZ2UsIHdyaXRlck1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5oYXNOZXh0UGFnZSA9IGhhc05leHRQYWdlO1xyXG4gICAgICAgIHRoaXMuaGFzUHJlUGFnZSA9IGhhc1ByZVBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xyXG4gICAgICAgIHRoaXMudG90YWxQYWdlID0gdG90YWxQYWdlO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy53cml0ZXJNb2RlbCA9IHdyaXRlck1vZGVsO1xyXG4gICAgfVxyXG4gICAgV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgV3JpdGVyTGlzdE1vZGVsKG9iamVjdFsnZmlsdGVyJ10sIG9iamVjdFsnb3JkZXInXVsnY29sdW1uJ10sIG9iamVjdFsnb3JkZXInXVsnZGlyZWN0aW9uJ10sIG9iamVjdFsnaGFzTmV4dFBhZ2UnXSwgb2JqZWN0WydoYXNQcmV2aW91c1BhZ2UnXSwgb2JqZWN0WydwYWdlU2l6ZSddLCBvYmplY3RbJ3RvdGFsUGFnZXMnXSwgb2JqZWN0WydwYWdlJ10sIHdyaXRlcl9tb2RlbF8xLldyaXRlck1vZGVsLmZyb21KU09OQXJyYXkob2JqZWN0WydpdGVtcyddKSk7XHJcbiAgICB9O1xyXG4gICAgV3JpdGVyTGlzdE1vZGVsLmZyb21KU09OQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIFdyaXRlckxpc3RNb2RlbC5mcm9tSlNPTihvYmopOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV3JpdGVyTGlzdE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLldyaXRlckxpc3RNb2RlbCA9IFdyaXRlckxpc3RNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVyLWxpc3QubW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL21vZGVsL3dyaXRlci1saXN0Lm1vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGJyPlxcclxcbjxwPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi8nLCAnYWRkJ11cXFwiPkFkZCB3cml0ZXI8L2J1dHRvbj5cXHJcXG48L3A+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY3VzdG9tZXItbGlzdC1jb250YWluZXJcXFwiPlxcclxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkIGNsYXNzPVxcXCJ0YWJsZS1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZS1jZWxsIHRhYmxlLW5hbWVcXFwiIChjbGljayk9XFxcInNvcnQoJ2Z1bGxOYW1lJyk7XFxcIj5GdWxsIE5hbWU8L3RoPlxcclxcbiAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZS1jZWxsIHRhYmxlLWRhdGVcXFwiIChjbGljayk9XFxcInNvcnQoJ2RhdGUnKTtcXFwiPkJpcnRoZGF0ZTwvdGg+XFxyXFxuICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlLWNlbGwgdGFibGUtc3RhdHVzXFxcIj5CaW9ncmFwaHk8L3RoPlxcclxcbiAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDx0Ym9keSBjbGFzcz1cXFwidGFibGUtcm93XFxcIiAqbmdGb3I9XFxcImxldCBjdXN0b21lciBvZiBtb2RlbD8ud3JpdGVyTW9kZWxcXFwiPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPnt7Y3VzdG9tZXI/LmZ1bGxOYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+e3tjdXN0b21lcj8uZGF0ZU9mQmlydGggfCBkYXRlOiAnZGQvTU0veXl5eSd9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyPy5iaW9ncmFwaHl9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi8nLCBjdXN0b21lci5pZCwgJ2VkaXQnXVxcXCI+RWRpdDwvYT58XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJkZWxldGUoY3VzdG9tZXIuaWQpXFxcIj5EZWxldGU8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+ICAgIFxcclxcbiAgICA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OmlubGluZS1ibG9jaztcXFwiPlxcclxcbiAgICAgICAgPHVsICpuZ0lmPVxcXCJwYWdlcj8ucGFnZXMgJiYgcGFnZXI/LnBhZ2VzPy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXI/LmN1cnJlbnRQYWdlID09PSAxfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKDEpXFxcIj5GaXJzdDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbbmdDbGFzc109XFxcIntkaXNhYmxlZDpwYWdlcj8uY3VycmVudFBhZ2UgPT09IDF9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UocGFnZXI/LmN1cnJlbnRQYWdlIC0gMSlcXFwiPlByZXZpb3VzPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IHBhZ2Ugb2YgcGFnZXIucGFnZXNcXFwiIFtuZ0NsYXNzXT1cXFwie2FjdGl2ZTpwYWdlcj8uY3VycmVudFBhZ2UgPT09IHBhZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiX3NldFBhZ2UocGFnZSlcXFwiPnt7cGFnZX19PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIFtuZ0NsYXNzXT1cXFwie2Rpc2FibGVkOnBhZ2VyLmN1cnJlbnRQYWdlID09PSBtb2RlbD8udG90YWxQYWdlfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKHBhZ2VyLmN1cnJlbnRQYWdlICsgMSlcXFwiPk5leHQ8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7ZGlzYWJsZWQ6cGFnZXI/LmN1cnJlbnRQYWdlID09PSBtb2RlbD8udG90YWxQYWdlfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcIl9zZXRQYWdlKG1vZGVsPy50b3RhbFBhZ2UpXFxcIj5MYXN0PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd3JpdGVyLWxpc3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGgge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYmxlLXN0YXR1cyB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLWxpc3Qvd3JpdGVyLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcclxudmFyIFdyaXRlcnNDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV3JpdGVyc0NvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIFdyaXRlcnNDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXcml0ZXJzQ29tcG9uZW50O1xyXG59KCkpO1xyXG5Xcml0ZXJzQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cml0ZXJzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi93cml0ZXJzLmNvbXBvbmVudC5jc3MnKV1cclxuICAgIH0pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxyXG5dLCBXcml0ZXJzQ29tcG9uZW50KTtcclxuZXhwb3J0cy5Xcml0ZXJzQ29tcG9uZW50ID0gV3JpdGVyc0NvbXBvbmVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVycy5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3dyaXRlcnMuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvd3JpdGVycy93cml0ZXJzLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgd3JpdGVyX2FkZF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3dyaXRlcnMtYWRkL3dyaXRlci1hZGQuY29tcG9uZW50XCIpO1xyXG52YXIgd3JpdGVyX2VkaXRfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi93cml0ZXJycy1lZGl0L3dyaXRlci1lZGl0LmNvbXBvbmVudFwiKTtcclxudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcclxudmFyIHdyaXRlcl9saXN0X2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vd3JpdGVycy1saXN0L3dyaXRlci1saXN0LmNvbXBvbmVudFwiKTtcclxudmFyIHdyaXRlcnNfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi93cml0ZXJzLmNvbXBvbmVudFwiKTtcclxuZXhwb3J0cy53cml0ZXJzUm91dGVzID0gW3tcclxuICAgICAgICBwYXRoOiAnc3BhL3dyaXRlcnMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogd3JpdGVyc19jb21wb25lbnRfMS5Xcml0ZXJzQ29tcG9uZW50LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdsaXN0JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogd3JpdGVyX2xpc3RfY29tcG9uZW50XzEuV3JpdGVyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICc6aWQvZWRpdCcsIGNvbXBvbmVudDogd3JpdGVyX2VkaXRfY29tcG9uZW50XzEuV3JpdGVyRWRpdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdhZGQnLCBjb21wb25lbnQ6IHdyaXRlcl9hZGRfY29tcG9uZW50XzEuV3JpdGVyQWRkQ29tcG9uZW50IH1cclxuICAgICAgICBdXHJcbiAgICB9XTtcclxuZXhwb3J0cy5hcHBSb3V0aW5nUHJvdmlkZXJzID0gW107XHJcbmV4cG9ydHMud3JpdGVyc1JvdXRpbmcgPSByb3V0ZXJfMS5Sb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoZXhwb3J0cy53cml0ZXJzUm91dGVzKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JpdGVycy5yb3V0aW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL3dyaXRlcnMvd3JpdGVycy5yb3V0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBBcHBDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwQ29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFwcENvbXBvbmVudDtcclxufSgpKTtcclxuQXBwQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICBjb3JlXzEuQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICAgICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSlcclxuXSwgQXBwQ29tcG9uZW50KTtcclxuZXhwb3J0cy5BcHBDb21wb25lbnQgPSBBcHBDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5jb21wb25lbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcclxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcclxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcclxcbiAgICAuYm9keS1jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xyXG52YXIgTmF2TWVudUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOYXZNZW51Q29tcG9uZW50KCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE5hdk1lbnVDb21wb25lbnQ7XHJcbn0oKSk7XHJcbk5hdk1lbnVDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIGNvcmVfMS5Db21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgICAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxyXG4gICAgfSlcclxuXSwgTmF2TWVudUNvbXBvbmVudCk7XHJcbmV4cG9ydHMuTmF2TWVudUNvbXBvbmVudCA9IE5hdk1lbnVDb21wb25lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5hdm1lbnUuY29tcG9uZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxyXFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9zcGEnXVxcXCI+V3JpdGVycyBJbmZvIExpc3Q8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL3NwYS93cml0ZXJzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gV3JpdGVyc1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zcGEvYm9va3MnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCc+PC9zcGFuPiBCb29rc1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxyXFxubGkubGluay1hY3RpdmUgYSxcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcclxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxyXFxuLm1haW4tbmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxyXFxuICAgIC5tYWluLW5hdiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItaGVhZGVyIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciB1bCB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGxpIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciBsaSBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIGEge1xcclxcbiAgICAgICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vU1BBL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XHJcbnZhciBIb21lQ29tcG9uZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEhvbWVDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSG9tZUNvbXBvbmVudDtcclxufSgpKTtcclxuSG9tZUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgY29yZV8xLkNvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdob21lJyxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxuICAgIH0pXHJcbl0sIEhvbWVDb21wb25lbnQpO1xyXG5leHBvcnRzLkhvbWVDb21wb25lbnQgPSBIb21lQ29tcG9uZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob21lLmNvbXBvbmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1NQQS9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkhvbWUgbW9kZWw8L2gxPlxcclxcbjxoMj5XZWxjb21lIHRvIFdyaXRlcmBzIGxpc3QgYXBwbGljYXRpb248L2gyPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TUEEvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9