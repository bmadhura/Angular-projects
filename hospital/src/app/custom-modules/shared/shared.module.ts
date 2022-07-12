import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { InputComponent } from './input/input/input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { InvertDirective } from './directives/invert.directive';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    InvertDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    InvertDirective
  ]
})
export class SharedModule { }
