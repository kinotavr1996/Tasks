"use strict";
var customer_list_component_1 = require('./customer-list/customer-list.component');
var router_1 = require('@angular/router');
var customer_component_1 = require('./customer.component');
exports.customerRoutes = [{
        path: 'customer',
        component: customer_component_1.CustomerComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: customer_list_component_1.CustomerListComponent }
        ]
    }];
exports.appRoutingProviders = [];
exports.CustomerRouting = router_1.RouterModule.forChild(exports.customerRoutes);
//# sourceMappingURL=customer.routing.js.map