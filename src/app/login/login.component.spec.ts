import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { LoginComponent } from './login.component';
import { initialAuthState } from '../state/auth';
import { AppState } from '../state';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        provideMockStore({ initialState: { auth: initialAuthState } })
      ]
    })
    .compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the PIN on key up', () => {
    const event = {
      target: {
        value: '5555'
      }
    };

    component.onKeyUp(event as unknown as KeyboardEvent);

    expect(component.pin).toEqual(5555);
  });

  it('should reset auth state and authenticate when the login button is clicked', () => {
    const spy = spyOn(store, 'dispatch');
    component.pin = 1234;

    component.onLoginClick();

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(
      {
        type: '[Auth] Reset Auth State'
      }
    );
    expect(spy).toHaveBeenCalledWith(
      {
        type: '[Auth] Authenticate',
        pin: 1234
      }
    );
  });
});
