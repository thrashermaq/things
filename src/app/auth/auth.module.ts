import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import {NavigationComponent} from './navigation/navigation.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, NavigationComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: [],
  exports: [NavigationComponent]
})
export class AuthModule {
}
