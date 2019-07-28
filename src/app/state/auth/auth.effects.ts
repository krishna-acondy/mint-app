import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { authenticate, signIn, failAuthentication, signOut } from './auth.actions';
import { Router } from '@angular/router';
import { AppState } from '..';
import { Store } from '@ngrx/store';
import { updateBalance, refreshBalance } from '../cash';
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
          switchMap((response: any) => {
            if (response.hasOwnProperty('currentBalance')) {
              this.router.navigateByUrl('/home');
              return [signIn(response.name), updateBalance({
                balance: response.currentBalance,
                overdraft: response.overdraft,
                lastWithdrawal: null
              })];
            } else {
              return [failAuthentication()];
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

    @Effect()
    updateBalance$ = this.actions$.pipe(
      ofType(refreshBalance),
      withLatestFrom(this.store),
      switchMap(([_, state]) => {
        return this.httpClient.get(`${state.config.apiUrl}/balance`)
          .pipe(
            switchMap((response: any) => {
              return [updateBalance({
                balance: response.currentBalance,
                overdraft: response.overdraft,
                lastWithdrawal: null
              })];
            })
          );
      })
    );

    constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private httpClient: HttpClient,
      private router: Router) {}
}
