import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluerVeterinaireComponent } from './evaluer-veterinaire.component';

describe('EvaluerVeterinaireComponent', () => {
  let component: EvaluerVeterinaireComponent;
  let fixture: ComponentFixture<EvaluerVeterinaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluerVeterinaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluerVeterinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
