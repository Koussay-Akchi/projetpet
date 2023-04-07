import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionUserComponent } from './inscription-user.component';

describe('InscriptionUserComponent', () => {
  let component: InscriptionUserComponent;
  let fixture: ComponentFixture<InscriptionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
