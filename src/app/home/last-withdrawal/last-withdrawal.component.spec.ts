import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { I18NTestModule } from '../../i18n/i18n-testing.module';
import { LastWithdrawalComponent } from './last-withdrawal.component';

describe('LastWithdrawalComponent', () => {
  let component: LastWithdrawalComponent;
  let fixture: ComponentFixture<LastWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastWithdrawalComponent ],
      imports: [ I18NTestModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
