import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mnt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output()
  signOut = new EventEmitter();

  onSignOut() {
    this.signOut.emit();
  }

}
