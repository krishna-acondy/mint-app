import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state';
import { configure } from './state/config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mnt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>) {
      this.httpClient.get('assets/config.json').subscribe((config: any) => {
      this.store.dispatch(configure({apiUrl: config.apiUrl}));
      });
  }
}
