import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ModuleWithProviders } from '@angular/core';

export const companyRoutes: Routes = [{
    path: 'company',
    component: CompanyComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: CompanyListComponent },
        { path: ':id', component: CompanyDetailsComponent }
    ]
}];

export const appRoutingProviders: any[] = [];
export const companyRouting: ModuleWithProviders = RouterModule.forChild(companyRoutes);
