import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { isSignedIn, hasFailedAuth, authenticate, resetAuthState } from '../state/auth';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mnt-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  isSignedIn$ = this.store.pipe(select(isSignedIn));
  hasFailedAuth$ = this.store.pipe(
    select(hasFailedAuth),
    tap(failed => {
      if (failed) {
        this.pin = null;
      }
    })
    );

  pin: number;

  constructor(
    private store: Store<AppState>
  ) { }

  onSignInClick() {
    this.store.dispatch(resetAuthState());
    this.store.dispatch(authenticate({pin: this.pin}));
  }

  onKeyPressed(key: number) {
    this.pin = parseInt(`${this.pin || ''}${key}`, 10);
  }

}
