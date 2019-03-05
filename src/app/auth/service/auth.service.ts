import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {MailCredentials} from '../model/mail-credentials.model';
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(credentials: MailCredentials): Promise<UserCredential> {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  emailLogin(credentials: MailCredentials): Promise<UserCredential> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout(): Promise<void> {
    return this.firebaseAuth.auth.signOut();
  }

}
