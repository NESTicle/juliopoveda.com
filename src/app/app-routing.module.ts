import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexHomeComponent } from './components/home/index-home/index-home.component';

const routes: Routes = [
  { path: '', component: IndexHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
