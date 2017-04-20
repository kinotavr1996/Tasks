import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './input/input.component';
import { CustomSelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';
import { LocalizationModule } from '../../localization/localization.module';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        LocalizationModule
    ],
    declarations: [
        CustomInputComponent,
        CustomSelectComponent,
        SearchComponent,
        ButtonComponent
    ],
    exports: [
        CustomInputComponent,
        CustomSelectComponent,
        SearchComponent,
        ButtonComponent
    ],
    providers: [
    ],
    bootstrap: [
    ]
})


export class ControlsModule { }
