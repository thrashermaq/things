import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {User} from 'firebase';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.styl']
})
export class NavigationComponent implements OnInit {

  user: Observable<User>;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.user;
  }

  logout(): void {
    this.authService.logout().then(() => console.log('logged out'));
  }
}
