import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NbFormlyCheckboxModule } from 'nebular-formly';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbFormlyCheckboxModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
