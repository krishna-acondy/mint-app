import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { isLoggedIn, hasFailedAuth, authenticate, resetAuthState } from '../state/auth';

@Component({
  selector: 'mnt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  hasFailedAuth$ = this.store.pipe(select(hasFailedAuth));

  pin: number;

  constructor(
    private store: Store<AppState>
  ) { }

  onLoginClick() {
    this.store.dispatch(resetAuthState());
    this.store.dispatch(authenticate({pin: this.pin}));
  }

  onKeyUp(event: KeyboardEvent) {
    this.pin = parseInt((event.target as HTMLInputElement).value);
  }

}
