import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: []
})
export class AuthModule {
}
