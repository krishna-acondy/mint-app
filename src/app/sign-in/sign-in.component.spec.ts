import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { I18NTestModule } from '../i18n/i18n-testing.module';
import { SignInComponent } from './sign-in.component';
import { initialAuthState } from '../state/auth';
import { AppState } from '../state';
import { KeypadComponent } from '../keypad/keypad.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent, KeypadComponent ],
      imports: [ I18NTestModule, RouterTestingModule ],
      providers: [
        provideMockStore({ initialState: { auth: initialAuthState } })
      ]
    })
    .compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset auth state and authenticate when the sign in button is clicked', () => {
    const spy = spyOn(store, 'dispatch');
    component.pin = 1234;

    component.onSignInClick();

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

  it('should add digit to the current pin when a key is pressed on the keypad', () => {
    component.pin = 1;

    component.onKeyPressed(3);

    expect(component.pin).toEqual(13);
  });

  it('should add the first digit to the pin when a key is pressed on the keypad', () => {
    component.pin = null;

    component.onKeyPressed(3);

    expect(component.pin).toEqual(3);
  });
});
