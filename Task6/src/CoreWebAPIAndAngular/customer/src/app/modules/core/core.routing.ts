import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { ModuleWithProviders } from '@angular/core';
import { customerRoutes } from './customer/customer.routing';


export const coreRoutes: Routes = [{
    path: '',
    component: CoreComponent,
    children: [
        { path: '', redirectTo: 'customer', pathMatch: 'full' },
        ...customerRoutes,

    ]
}];

export const appRoutingProviders: any[] = [];
export const coreRouting: ModuleWithProviders = RouterModule.forChild(coreRoutes);
