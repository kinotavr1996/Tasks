import { LocalizationModule } from './../../shared/localization/localization.module';
import { CustomerModule } from './customer/customer.module';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { LayoutModule } from './../../shared/components/layout/layout.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CustomerModule,
        LayoutModule,
        LocalizationModule,
        HttpModule
    ],
    declarations: [
        CoreComponent
    ]
})
export class CoreModule { }
