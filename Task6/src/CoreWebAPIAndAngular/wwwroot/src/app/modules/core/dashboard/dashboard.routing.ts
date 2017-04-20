import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const dashboardRoutes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent
}];

export const appRoutingProviders: any[] = [];
export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
