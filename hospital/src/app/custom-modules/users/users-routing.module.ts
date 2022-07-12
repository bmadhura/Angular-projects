import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdminComponent } from './components/admin/admin.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { MainComponent } from './components/main/main.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'home',component:MainComponent
  },
  {
    path:'doctor', component:DoctorComponent
  },
  {
    path:'admin', component:AdminComponent
  },
  {
    path:'nurse', component:NurseComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
