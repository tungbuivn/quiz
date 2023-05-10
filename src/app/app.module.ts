import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLessionComponent } from './add-lession/add-lession.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SubLessionComponent } from './sub-lession/sub-lession.component';
import { ChooseLessionComponent } from './choose-lession/choose-lession.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLessionComponent,
    SubLessionComponent,
    ChooseLessionComponent
  ],
  imports: [
    FormsModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
