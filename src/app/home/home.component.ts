import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { signOut } from '../state/auth';
import { currentBalance, withdraw, withdrawalError, hasWithdrawalError, overdraft } from '../state/cash';

@Component({
  selector: 'mnt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentBalance$ = this.store.pipe(select(currentBalance));
  overdraft$ = this.store.pipe(select(overdraft));
  withdrawalError$ = this.store.pipe(select(withdrawalError));
  hasWithdrawalError$ = this.store.pipe(select(hasWithdrawalError));

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
