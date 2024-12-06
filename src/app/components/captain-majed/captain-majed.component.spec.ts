import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainMajedComponent } from './captain-majed.component';

describe('CaptainMajedComponent', () => {
  let component: CaptainMajedComponent;
  let fixture: ComponentFixture<CaptainMajedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptainMajedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptainMajedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
