import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { I18NTestModule } from '../i18n/i18n-testing.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ I18NTestModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event when Sign Out is clicked', () => {
   const spy = spyOn(component.signOut, 'emit');

   component.onSignOut();

   expect(spy).toHaveBeenCalledTimes(1);
  });
});
