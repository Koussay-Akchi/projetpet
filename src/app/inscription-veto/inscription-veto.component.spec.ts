import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionVetoComponent } from './inscription-veto.component';

describe('InscriptionVetoComponent', () => {
  let component: InscriptionVetoComponent;
  let fixture: ComponentFixture<InscriptionVetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionVetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionVetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
