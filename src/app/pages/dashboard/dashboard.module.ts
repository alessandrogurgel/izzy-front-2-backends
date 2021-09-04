import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NbFormlyCheckboxModule } from 'nebular-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbFormlyCheckboxModule,
    FormlyModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
