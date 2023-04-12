import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAnimalComponent } from './ajouter-animal.component';

describe('AjouterAnimalComponent', () => {
  let component: AjouterAnimalComponent;
  let fixture: ComponentFixture<AjouterAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
