import {Component} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {MailCredentials} from '../model/mail-credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent {

  mailCredentials: MailCredentials = new MailCredentials();

  constructor(private authService: AuthService) {
  }

  login(): void {
    this.authService.emailLogin(this.mailCredentials);
  }

  logout(): void {
    this.authService.logout().then(() => console.log('logged out'));
  }

}
