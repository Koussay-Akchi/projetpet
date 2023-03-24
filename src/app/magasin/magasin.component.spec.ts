import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasinComponent } from './magasin.component';

describe('MagasinComponent', () => {
  let component: MagasinComponent;
  let fixture: ComponentFixture<MagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagasinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
