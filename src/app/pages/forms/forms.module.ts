import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs/inputs.component';
import { NbFormlyCheckboxModule } from 'nebular-formly';
import { FormlyModule } from '@ngx-formly/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [InputsComponent],
  imports: [
    NbCardModule,
    ThemeModule,
    CommonModule,
    NbFormlyCheckboxModule,
    FormlyModule,
    SharedModule,
    NbIconModule
  ]
})
export class FormsModule { }
