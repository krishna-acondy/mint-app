import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { isLoggedIn, hasFailedAuth, authenticate, resetAuthState } from '../state/auth';

@Component({
  selector: 'mnt-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  hasFailedAuth$ = this.store.pipe(select(hasFailedAuth));

  pin: number;

  constructor(
    private store: Store<AppState>
  ) { }

  onSignInClick() {
    this.store.dispatch(resetAuthState());
    this.store.dispatch(authenticate({pin: this.pin}));
  }

  onKeyUp(event: KeyboardEvent) {
    this.pin = parseInt((event.target as HTMLInputElement).value, 10);
  }

}
