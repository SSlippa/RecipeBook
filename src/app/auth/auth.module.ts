import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
      SigninComponent,
      SignupComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class AuthModule {}
