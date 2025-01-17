import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AgGridAngular} from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AgGridAngular
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
