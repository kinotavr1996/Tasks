import { WritersModule } from './writers/writers.module';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpService } from "../shared/services/http.service";
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        WritersModule,
        HttpModule
    ],
    declarations: [
        CoreComponent
    ],
    providers: [
        HttpService
    ]
})
export class CoreModule { }
