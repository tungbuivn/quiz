import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLessionComponent } from './add-lession/add-lession.component';
import { ChooseLessionComponent } from './choose-lession/choose-lession.component';

const routes: Routes = [

  { path: 'cong', component: AddLessionComponent },
  { path: 'choose', component: ChooseLessionComponent },
  { path: '', redirectTo: '/choose', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
