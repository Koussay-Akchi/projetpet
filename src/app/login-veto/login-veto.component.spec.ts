import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVetoComponent } from './login-veto.component';

describe('LoginVetoComponent', () => {
  let component: LoginVetoComponent;
  let fixture: ComponentFixture<LoginVetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginVetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
