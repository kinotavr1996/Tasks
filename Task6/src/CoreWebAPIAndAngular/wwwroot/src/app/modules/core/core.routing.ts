import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core.component';
import { ModuleWithProviders } from '@angular/core';
import { adminsRoutes } from './admins/admins.routing';
import { companyRoutes } from './company/company.routing';
import { dashboardRoutes } from './dashboard/dashboard.routing';

export const coreRoutes: Routes = [{
    path: '',
    component: CoreComponent,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ...dashboardRoutes,
        ...adminsRoutes,
        ...companyRoutes
    ]
}];

export const appRoutingProviders: any[] = [];
export const coreRouting: ModuleWithProviders = RouterModule.forChild(coreRoutes);
