import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './../controls/controls.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { PageTitleComponent } from './page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LocalizationModule } from './../../localization/localization.module';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ControlsModule,
        LocalizationModule

    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        PageTitleComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        PageTitleComponent
    ],
    providers: [
    ],
    bootstrap: [
    ]
})


export class LayoutModule { }
