import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { authenticate, login, failAuthentication } from './auth.actions';
import { AppState } from '..';
@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  readonly apiUrl = 'http://localhost:9999/api'
  @Effect()
  createNavLinkGroups$ = this.actions$.pipe(
    ofType(authenticate),
    switchMap(action => {
      return this.httpClient.post(`${this.apiUrl}/pin`, {pin: action.pin})
        .pipe(
          map(response => {
            if (response['currentBalance']) {
              return login(response as { currentBalance: number});
            } else {
              return failAuthentication();
            }
          }),
          catchError(() => [failAuthentication()])
        )
    }));

    constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private httpClient: HttpClient) {}
}