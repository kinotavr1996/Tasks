
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriterListComponent } from "./writers-list/writer-list.component";
import { WritersComponent } from "./writers.component";

export const writersRoutes: Routes = [{
    path: 'writer',
    component: WritersComponent,
    children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: WriterListComponent }
    ]
}];

export const appRoutingProviders: any[] = [];
export const writersRouting: ModuleWithProviders = RouterModule.forChild(writersRoutes);
