import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdminComponent } from './components/admin/admin.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { UpdatePopupComponent } from './components/update-popup/update-popup.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    DoctorComponent,
    AdminComponent,
    NurseComponent,
    MainComponent,
    UpdatePopupComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class UsersModule { }
