import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterVeterinaireComponent } from './consulter-veterinaire.component';

describe('ConsulterVeterinaireComponent', () => {
  let component: ConsulterVeterinaireComponent;
  let fixture: ComponentFixture<ConsulterVeterinaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterVeterinaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterVeterinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
