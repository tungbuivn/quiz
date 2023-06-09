import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLessionComponent } from './add-lession/add-lession.component';
import { AddRemLessionComponent } from './add-rem-lession/add-rem-lession.component';
import { ChooseLessionComponent } from './choose-lession/choose-lession.component';
import { SubLessionComponent } from './sub-lession/sub-lession.component';
import { SummaryComponent } from './summary/summary.component';
import { SubRemLessionComponent } from './sub-rem-lession/sub-rem-lession.component';
import { CongDocComponent } from './cong-doc/cong-doc.component';
import { TruDocComponent } from './tru-doc/tru-doc.component';
import { NhanComponent } from './nhan/nhan.component';
import { ChiaComponent } from './chia/chia.component';
import { NhanDocComponent } from './nhan-doc/nhan-doc.component';
import { ChiaDocComponent } from './chia-doc/chia-doc.component';

const routes: Routes = [

  { path: 'cong', component: AddLessionComponent },
  { path: 'cong-nho', component: AddRemLessionComponent },
  { path: 'cong-doc', component: CongDocComponent },
  { path: 'tru', component: SubLessionComponent },
  { path: 'tru-nho', component: SubRemLessionComponent },
  { path: 'tru-doc', component: TruDocComponent },
  { path: 'nhan', component: NhanComponent },
  { path: 'nhan-doc', component: NhanDocComponent },
  { path: 'chia', component: ChiaComponent },
  { path: 'chia-doc', component: ChiaDocComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'choose', component: ChooseLessionComponent },
  { path: '', redirectTo: 'choose', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
