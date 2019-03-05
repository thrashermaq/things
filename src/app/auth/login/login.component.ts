import {Component} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {MailCredentials} from '../model/mail-credentials.model';
import {Observable} from 'rxjs';
import {User} from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent {

  mailCredentials: MailCredentials = new MailCredentials();
  user: Observable<User>;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }

  login(): void {
    this.authService.emailLogin(this.mailCredentials);
  }

  logout(): void {
    this.authService.logout().then(() => console.log('logged out'));
  }

}
