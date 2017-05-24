"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var books_module_1 = require("./components/books/books.module");
var books_routing_1 = require("./components/books/books.routing");
var storage_service_1 = require("./shared-component/services/storage.service");
var http_service_1 = require("./shared-component/services/http.service");
var writers_module_1 = require("./components/writers/writers.module");
var writers_routing_1 = require("./components/writers/writers.routing");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular2_universal_1 = require("angular2-universal");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
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