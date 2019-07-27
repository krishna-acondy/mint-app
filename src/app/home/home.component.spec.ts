import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialAppState, AppState } from '../state';
import { Store } from '@ngrx/store';
import { LastWithdrawalComponent } from './last-withdrawal/last-withdrawal.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, HeaderComponent, LastWithdrawalComponent ],
      providers: [provideMockStore({ initialState: initialAppState})]
    })
    .compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sign out', () => {
    const spy = spyOn(store, 'dispatch');

    component.onSignOut();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      {
        type: '[Auth] Sign Out'
      }
    );
  });

  it('should withdraw the specified custom amount', () => {
    const spy = spyOn(component, 'withdraw');

    component.onWithdrawClicked('150');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(150);
  });

  it('should withdraw the preset amount', () => {
    const spy = spyOn(store, 'dispatch');

    component.withdraw(20);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      type: '[Cash] Withdraw',
      amount: 20
    });
  });
});
