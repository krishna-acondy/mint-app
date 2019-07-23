import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { authenticate, signIn, failAuthentication, signOut } from './auth.actions';
import { Router } from '@angular/router';
import { AppState } from '..';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  @Effect()
  authenticate$ = this.actions$.pipe(
    ofType(authenticate),
    withLatestFrom(this.store),
    switchMap(([action, state]) => {
      return this.httpClient.post(`${state.config.apiUrl}/pin`, {pin: action.pin})
        .pipe(
          map((response: any) => {
            if (response.currentBalance) {
              this.router.navigateByUrl('/home');
              return signIn(response as { currentBalance: number});
            } else {
              return failAuthentication();
            }
          }),
          catchError(() => [failAuthentication()])
        );
    }));

    @Effect()
    signOut$ = this.actions$.pipe(
      ofType(signOut),
      switchMap(() => {
        this.router.navigateByUrl('/sign-in');
        return [];
      })
    );

    constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private httpClient: HttpClient,
      private router: Router) {}
}
