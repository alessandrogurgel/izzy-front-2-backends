import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs/inputs.component';
import { FormlyModule } from '@ngx-formly/core';
import { NbCardModule, NbIconModule, NbAccordionModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { SharedModule } from 'app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { NbFormlyCheckboxModule, NbFormlyInputModule } from 'nebular-formly';


@NgModule({
  declarations: [InputsComponent],
  imports: [
    NbCardModule,
    ThemeModule,
    CommonModule,
    NbFormlyCheckboxModule,
    NbFormlyInputModule,
    FormlyModule,
    SharedModule,
    NbIconModule,
    NbAccordionModule,
    NgxMaskModule.forChild()
  ]
})
export class FormsModule { }
