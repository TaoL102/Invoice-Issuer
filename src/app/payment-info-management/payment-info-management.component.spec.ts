import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInfoManagementComponent } from './payment-info-management.component';

describe('PaymentInfoManagementComponent', () => {
  let component: PaymentInfoManagementComponent;
  let fixture: ComponentFixture<PaymentInfoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentInfoManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInfoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
