import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer.component';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './../../../shared/components/controls/controls.module';
import { LayoutModule } from './../../../shared/components/layout/layout.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routing';
import { CustomerAddPopupComponent } from './customer-shared/customer-add-popup/customer-add-popup.component';
import { CustomerHttpService } from "app/modules/core/customer/customer-shared/customer-http.service";
import { PagerService } from "app/shared/components/controls/paginator/paginator.component";
import { LocalizationModule } from './../../../shared/localization/localization.module';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutModule,
        ControlsModule,
        LocalizationModule,
        FormsModule
    ],
    declarations: [
        CustomerComponent,
        CustomerListComponent,
        CustomerAddPopupComponent
    ],
    providers: [
        CustomerHttpService,
        PagerService

    ]
})
export class CustomerModule { }
