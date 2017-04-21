import { CustomerListComponent } from './customer-list/customer-list.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

export const customerRoutes: Routes = [{
    path: 'customer',
    component: CustomerComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: CustomerListComponent }
    ]
}];

export const appRoutingProviders: any[] = [];
export const CustomerRouting: ModuleWithProviders = RouterModule.forChild(customerRoutes);
