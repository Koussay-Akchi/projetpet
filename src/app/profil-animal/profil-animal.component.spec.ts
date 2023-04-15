import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAnimalComponent } from './profil-animal.component';

describe('ProfilAnimalComponent', () => {
  let component: ProfilAnimalComponent;
  let fixture: ComponentFixture<ProfilAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
