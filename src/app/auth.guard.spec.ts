import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialAppState, AppState } from './state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

describe('AuthGuard', () => {
  let store: MockStore<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, provideMockStore({ initialState: initialAppState})],
      imports: [ RouterTestingModule ]
    });
    store = TestBed.get(Store);
  });

  it('should navigate to the sign in page if not signed in', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigateByUrl');
    const guard = new AuthGuard(router, store);
    store.setState({...initialAppState, auth: { isSignedIn: false, hasFailedAuth: false }});

    guard.canActivate().subscribe(canActivate => {
      expect(canActivate).toBeFalsy();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('/sign-in');
    });
  }));

  it('should allow the user through if signed in', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigateByUrl');
    const guard = new AuthGuard(router, store);
    store.setState({...initialAppState, auth: { isSignedIn: true, hasFailedAuth: false }});

    guard.canActivate().subscribe(canActivate => {
      expect(canActivate).toBeTruthy();
      expect(spy).not.toHaveBeenCalled();
    });
  }));
});
