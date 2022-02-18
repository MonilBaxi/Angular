import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    IndexComponent
  ]
})
export class AdminModule { }
