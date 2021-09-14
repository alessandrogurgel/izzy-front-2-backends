import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputsComponent } from './forms/inputs/inputs.component';
import { DatepickersComponent } from './forms/datepickers/datepickers.component';
import { PanelsComponent } from './forms/panels/panels.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'forms/inputs',
      component: InputsComponent
    },
    {
      path: 'forms/datepickers',
      component: DatepickersComponent
    },
    {
      path: 'forms/panels',
      component: PanelsComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
