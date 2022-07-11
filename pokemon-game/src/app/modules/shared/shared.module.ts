import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { InvertDirective } from './directives/invert/invert.directive';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DateModifyPipe } from './pipes/date-modify.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldsComponent,
    InvertDirective,
    DateModifyPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports:[
    InputFieldsComponent,
    ButtonComponent,
    InvertDirective,
    DateModifyPipe,
  ]
})
export class SharedModule { }
