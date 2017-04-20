import { AdminListComponent } from './admin-list/admin-list.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins.component';

export const adminsRoutes: Routes = [{
    path: 'admin',
    component: AdminsComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: AdminListComponent }
    ]
}];

export const appRoutingProviders: any[] = [];
export const adminsRouting: ModuleWithProviders = RouterModule.forChild(adminsRoutes);
