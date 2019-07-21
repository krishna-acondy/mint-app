import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppState } from './state';
import { Store, select } from '@ngrx/store';
import { isLoggedIn } from './state/auth';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AppState>) { }
  canActivate() {
    return this.store.pipe(
      select(isLoggedIn),
      tap(isUserLoggedIn => {
        if (!isUserLoggedIn) {
          this.router.navigateByUrl('/sign-in');
        }
      })
    );
  }
}
