import { Component, OnInit, Input } from '@angular/core';
import { Withdrawal } from '../../model/withdrawal';
@Component({
  selector: 'mnt-last-withdrawal',
  templateUrl: './last-withdrawal.component.html',
  styleUrls: ['./last-withdrawal.component.scss']
})
export class LastWithdrawalComponent {

  @Input() withdrawal: Withdrawal;

}
