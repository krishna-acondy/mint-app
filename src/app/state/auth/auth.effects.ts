import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { authenticate, signIn, failAuthentication, signOut } from './auth.actions';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  readonly apiUrl = 'https://mnt-api.herokuapp.com/api';

  @Effect()
  authenticate$ = this.actions$.pipe(
    ofType(authenticate),
    switchMap(action => {
      return this.httpClient.post(`${this.apiUrl}/pin`, {pin: action.pin})
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
      private httpClient: HttpClient,
      private router: Router) {}
}
