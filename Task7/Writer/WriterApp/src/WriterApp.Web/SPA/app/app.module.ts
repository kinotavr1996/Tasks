import { StorageService } from './shared-component/services/storage.service';
import { HttpService } from './shared-component/services/http.service';
import { WritersModule } from './components/writers/writers.module';
import { WriterHttpService } from './components/writers/writers-shared/writer-http.service';
import { WriterListComponent } from './components/writers/writers-list/writer-list.component';
import { writersRoutes } from './components/writers/writers.routing';
import { WritersComponent } from './components/writers/writers.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent
    ],
    providers: [
        HttpService,
        StorageService,
        { provide: 'Window', useValue: window }
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        WritersModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'spa', pathMatch: 'full' },
            { path: 'spa', component: HomeComponent },
            ...writersRoutes,
            { path: '**', redirectTo: 'spa' }
        ])
    ]
})
export class AppModule {
}
