import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NGCComponent } from './NGC/NGC.component';

import { PagerService } from './NGC/index';
@NgModule({
  declarations: [
    AppComponent,
    NGCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PagerService],
  bootstrap: [NGCComponent]
})
export class AppModule { }
