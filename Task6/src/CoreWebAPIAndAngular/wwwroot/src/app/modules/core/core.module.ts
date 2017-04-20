import { LocalizationModule } from './../../shared/localization/localization.module';
import { AdminsModule } from './admins/admins.module';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { CompanyModule } from './company/company.module';
import { CoreComponent } from './core.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutModule } from './../../shared/components/layout/layout.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DashboardModule,
        AdminsModule,
        LayoutModule,
        CompanyModule,
        LocalizationModule
    ],
    declarations: [
        CoreComponent
    ]
})
export class CoreModule { }
