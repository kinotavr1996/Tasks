import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './app.component';
import { appRouting } from './app.routes';
import { CoreModule } from "./core/core.module";
import { StorageService } from "./shared/services/storage.service";

@NgModule({

    declarations: [
        AppComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule,
        appRouting,
        CoreModule

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
