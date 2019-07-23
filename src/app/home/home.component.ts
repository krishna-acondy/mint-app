import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { signOut } from '../state/auth';
import { currentBalance, withdraw, withdrawalError, hasWithdrawalError } from '../state/cash';

@Component({
  selector: 'mnt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentBalance$ = this.store.pipe(select(currentBalance));
  withdrawalError$ = this.store.pipe(select(withdrawalError));
  hasWithdrawalError$ = this.store.pipe(select(hasWithdrawalError));

  constructor(
    private store: Store<AppState>
  ) { }

  onSignOut() {
    this.store.dispatch(signOut());
  }

  withdraw(amount: number) {
    this.store.dispatch(withdraw({amount}));
  }

}
