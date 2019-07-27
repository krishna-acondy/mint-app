import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mnt-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent {
  @Output() keyPress = new EventEmitter<number>();
  keyRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];

  onKeyPressed(key: number) {
    this.keyPress.emit(key);
  }
}
