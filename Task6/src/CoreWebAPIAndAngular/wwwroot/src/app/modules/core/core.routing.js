"use strict";
var router_1 = require('@angular/router');
var core_component_1 = require('./core.component');
var customer_routing_1 = require('./customer/customer.routing');
exports.coreRoutes = [{
        path: '',
        component: core_component_1.CoreComponent,
        children: [
            { path: '', redirectTo: 'customer', pathMatch: 'full' }
        ].concat(customer_routing_1.customerRoutes)
    }];
exports.appRoutingProviders = [];
exports.coreRouting = router_1.RouterModule.forChild(exports.coreRoutes);
//# sourceMappingURL=core.routing.js.map