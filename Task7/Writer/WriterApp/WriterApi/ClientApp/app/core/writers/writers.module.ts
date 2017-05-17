import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { writersRoutes } from './writers.routing';
import { WriterListComponent } from "./writers-list/writer-list.component";
import { WritersComponent } from "./writers.component";
import { PagerService } from "../../shared/Components/paginator/paginator.component";
import { WriterHttpService } from "./writers-shared/writer-http.service";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        WritersComponent,
        WriterListComponent

    ],
    providers: [
        WriterHttpService,
        PagerService

    ]
})
export class WritersModule { }
