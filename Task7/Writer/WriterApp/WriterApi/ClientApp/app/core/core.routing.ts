import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { ModuleWithProviders } from '@angular/core';
import { writersRoutes } from './writers/writers.routing';


export const coreRoutes: Routes = [{
    path: '',
    component: CoreComponent,
    children: [
        { path: '', redirectTo: 'writer', pathMatch: 'full' },
        ...writersRoutes,

    ]
}];

export const appRoutingProviders: any[] = [];
export const coreRouting: ModuleWithProviders = RouterModule.forChild(coreRoutes);
