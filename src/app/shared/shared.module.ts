import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { TypescriptCodeComponent } from './typescript-code/typescript-code.component';
import { NbCardModule } from '@nebular/theme';
import { FormDebugComponent } from './form-debug/form-debug.component';



@NgModule({
  declarations: [LogoComponent, TypescriptCodeComponent, FormDebugComponent],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [
    LogoComponent,
    TypescriptCodeComponent,
    FormDebugComponent
  ]
})
export class SharedModule { }
