import {Component} from '@angular/core';
import {MailCredentials} from '../model/mail-credentials.model';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent {

  mailCredentials: MailCredentials = new MailCredentials();

  constructor(private authService: AuthService) {
  }

  signUp(): void {
    this.authService.signup(this.mailCredentials).then();
  }

}
