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
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SubLessionComponent } from './sub-lession/sub-lession.component';
import { ChooseLessionComponent } from './choose-lession/choose-lession.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddRemLessionComponent } from './add-rem-lession/add-rem-lession.component';
import { SummaryComponent } from './summary/summary.component';
import { SubRemLessionComponent } from './sub-rem-lession/sub-rem-lession.component';
import { NhanComponent } from './nhan/nhan.component';
import { CongDocComponent } from './cong-doc/cong-doc.component';
import { TruDocComponent } from './tru-doc/tru-doc.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ChiaComponent } from './chia/chia.component';
import { NhanDocComponent } from './nhan-doc/nhan-doc.component';
import { ChiaDocComponent } from './chia-doc/chia-doc.component';
import { AnswerChooseComponent } from './answer-choose/answer-choose.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    AddLessionComponent,
    SubLessionComponent,
    ChooseLessionComponent,
    AddRemLessionComponent,
    SummaryComponent,
    SubRemLessionComponent,
    NhanComponent,
    CongDocComponent,
    TruDocComponent,
    PageHeaderComponent,
    ChiaComponent,
    NhanDocComponent,
    ChiaDocComponent,
    AnswerChooseComponent

  ],
  imports: [
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
