import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { TypescriptCodeComponent } from './typescript-code/typescript-code.component';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [LogoComponent, TypescriptCodeComponent],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [
    LogoComponent,
    TypescriptCodeComponent
  ]
})
export class SharedModule { }
