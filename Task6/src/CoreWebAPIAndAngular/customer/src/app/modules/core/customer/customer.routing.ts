import { CustomerListComponent } from './customer-list/customer-list.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerEditComponent } from "app/modules/core/customer/customer-edit/customer-edit.component";

export const customerRoutes: Routes = [{
    path: 'customer',
    component: CustomerComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: CustomerListComponent },
        { path: ':id/edit', component: CustomerEditComponent }
    ]
}];

export const appRoutingProviders: any[] = [];
export const CustomerRouting: ModuleWithProviders = RouterModule.forChild(customerRoutes);
