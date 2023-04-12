import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvComponent } from './rdv.component';

describe('RdvComponent', () => {
  let component: RdvComponent;
  let fixture: ComponentFixture<RdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
