import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdminComponent } from './components/admin/admin.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    DoctorComponent,
    AdminComponent,
    NurseComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
