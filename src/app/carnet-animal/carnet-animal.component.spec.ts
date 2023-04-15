import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetAnimalComponent } from './carnet-animal.component';

describe('CarnetAnimalComponent', () => {
  let component: CarnetAnimalComponent;
  let fixture: ComponentFixture<CarnetAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarnetAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
