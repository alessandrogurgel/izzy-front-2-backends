import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs/inputs.component';
import { FormlyModule } from '@ngx-formly/core';
import { NbCardModule, NbIconModule, NbAccordionModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { SharedModule } from 'app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { NbFormlyCheckboxModule, NbFormlyInputModule, NbFormlySelectModule, PipesModule, NbFormlyDatepickerModule } from 'nebular-formly';
import { HttpClientModule } from '@angular/common/http';
import { DatepickersComponent } from './datepickers/datepickers.component';
import { PanelsComponent } from './panels/panels.component';

@NgModule({
  declarations: [InputsComponent, DatepickersComponent, PanelsComponent],
  imports: [
    NbCardModule,
    ThemeModule,
    CommonModule,
    NbFormlyCheckboxModule,
    NbFormlyInputModule,
    NbFormlySelectModule,
    NbFormlyDatepickerModule,
    FormlyModule,
    SharedModule,
    NbIconModule,
    NbAccordionModule,
    HttpClientModule,
    NgxMaskModule.forChild()
  ]
})
export class FormsModule { }
