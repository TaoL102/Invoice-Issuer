import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsManagementComponent } from './setting-management.component';

describe('SettingsManagementComponent', () => {
  let component: SettingsManagementComponent;
  let fixture: ComponentFixture<SettingsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
