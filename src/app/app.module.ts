import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLessionComponent } from './add-lession/add-lession.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table'
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SubLessionComponent } from './sub-lession/sub-lession.component';
import { ChooseLessionComponent } from './choose-lession/choose-lession.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddRemLessionComponent } from './add-rem-lession/add-rem-lession.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLessionComponent,
    SubLessionComponent,
    ChooseLessionComponent,
    AddRemLessionComponent,
    SummaryComponent
  ],
  imports: [
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
