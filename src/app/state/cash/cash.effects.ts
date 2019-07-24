import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, withLatestFrom, catchError } from 'rxjs/operators';
import { withdraw, updateBalance, setErrorState } from './cash.actions';
import { AppState } from '..';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class CashEffects {
  @Effect()
  withdraw$ = this.actions$.pipe(
    ofType(withdraw),
    withLatestFrom(this.store),
    switchMap(([action, state]) => {
      return this.httpClient.post(`${state.config.apiUrl}/withdraw`, {amount: action.amount})
        .pipe(
          map((response: any) => updateBalance({ balance: response.currentBalance, overdraft: response.overdraft })),
          catchError((e: any) => [setErrorState({error: e})])
        );
    }));

    constructor(
      private actions$: Actions,
      private store: Store<AppState>,
      private httpClient: HttpClient) {}
}
