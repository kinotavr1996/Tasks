import { FormsModule } from '@angular/forms';
import { LocalizationModule } from './../../../shared/localization/localization.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminsComponent } from './admins.component';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './../../../shared/components/controls/controls.module';
import { LayoutModule } from './../../../shared/components/layout/layout.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminsRoutes } from './admins.routing';
import { AdminAddPopupComponent } from './admin-shared/admin-add-popup/admin-add-popup.component';
import { AdminsHttpService } from "app/modules/core/admins/admin-shared/admins-http.service";
import { PagerService } from "app/shared/components/controls/paginator/paginator.component";

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
        AdminsComponent,
        AdminListComponent,
        AdminAddPopupComponent
    ],
    providers: [
        AdminsHttpService,
        PagerService

    ]
})
export class AdminsModule { }
