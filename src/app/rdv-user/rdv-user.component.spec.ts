import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvUserComponent } from './rdv-user.component';

describe('RdvUserComponent', () => {
  let component: RdvUserComponent;
  let fixture: ComponentFixture<RdvUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
