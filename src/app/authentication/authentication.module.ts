import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';
import { NbLayoutModule, NbCardModule, NbIconModule, NbAlertModule, NbButtonModule, NbInputModule, NbCheckboxModule, NbSpinnerModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [LoginComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbAuthModule,
    NbAlertModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    NbCheckboxModule,
    NbSpinnerModule,
    SharedModule,
    RouterModule.forChild([])
  ]
})
export class AuthenticationModule { }
