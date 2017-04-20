import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        CompanyComponent,
        CompanyListComponent,
        CompanyDetailsComponent
    ]
})
export class CompanyModule { }
