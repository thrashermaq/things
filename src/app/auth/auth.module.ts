import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './service/auth.service';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {CommonModule} from '@angular/common';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
