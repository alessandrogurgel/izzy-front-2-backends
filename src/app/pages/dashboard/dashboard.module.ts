import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormlyModule } from '@ngx-formly/core';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    FormlyModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
