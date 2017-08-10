import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
