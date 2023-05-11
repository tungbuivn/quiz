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

const routes: Routes = [

  { path: 'cong', component: AddLessionComponent },
  { path: 'cong-nho', component: AddRemLessionComponent },
  { path: 'cong-doc', component: CongDocComponent },
  { path: 'tru', component: SubLessionComponent },
  { path: 'tru-nho', component: SubRemLessionComponent },
  { path: 'tru-doc', component: TruDocComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'choose', component: ChooseLessionComponent },
  { path: '', redirectTo: 'choose', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
