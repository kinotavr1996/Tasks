"use strict";
var core_routing_1 = require('./core/core.routing');
var router_1 = require('@angular/router');
exports.appRoutes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' }
].concat(core_routing_1.coreRoutes);
exports.appRoutingProviders = [];
exports.appRouting = router_1.RouterModule.forRoot(exports.appRoutes, { useHash: false });
//# sourceMappingURL=app.routing.js.map