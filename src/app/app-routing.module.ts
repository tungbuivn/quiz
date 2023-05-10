import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLessionComponent } from './add-lession/add-lession.component';

const routes: Routes = [

  { path: 'cong', component: AddLessionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
