import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { signOut } from '../state/auth';
import {
  currentBalance,
  hasWithdrawalError,
  insufficientAtmFunds,
  insufficientUserFunds,
  invalidAmount,
  lastWithdrawal,
  overdraft,
  withdraw
} from '../state/cash';

@Component({
  selector: 'mnt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentBalance$ = this.store.pipe(select(currentBalance));
  overdraft$ = this.store.pipe(select(overdraft));
  hasWithdrawalError$ = this.store.pipe(select(hasWithdrawalError));
  insufficientAtmFunds$ = this.store.pipe(select(insufficientAtmFunds));
  insufficientUserFunds$ = this.store.pipe(select(insufficientUserFunds));
  invalidAmount$ = this.store.pipe(select(invalidAmount));
  lastWithdrawal$ = this.store.pipe(select(lastWithdrawal));

  @ViewChild('amount', {static: false}) amountTextbox: ElementRef;

  constructor(
    private store: Store<AppState>
  ) { }

  onSignOut() {
    this.store.dispatch(signOut());
  }

  withdraw(amount: number) {
    this.amountTextbox.nativeElement.value = '';
    this.store.dispatch(withdraw({amount}));
  }

  onWithdrawClicked(amountString: string) {
    this.withdraw(parseInt(amountString, 10));
  }

}
