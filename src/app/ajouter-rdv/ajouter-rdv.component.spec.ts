import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRdvComponent } from './ajouter-rdv.component';

describe('AjouterRdvComponent', () => {
  let component: AjouterRdvComponent;
  let fixture: ComponentFixture<AjouterRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
