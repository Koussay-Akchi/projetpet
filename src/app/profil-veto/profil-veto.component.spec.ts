import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilVetoComponent } from './profil-veto.component';

describe('ProfilVetoComponent', () => {
  let component: ProfilVetoComponent;
  let fixture: ComponentFixture<ProfilVetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilVetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilVetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
