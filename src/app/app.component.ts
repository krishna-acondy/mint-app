import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state';
import { configure } from './state/config';

@Component({
  selector: 'mnt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(configure({apiUrl: 'https://mnt-api.herokuapp.com/api'}));
  }
}
