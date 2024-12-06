import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectiveConanComponent } from './detective-conan.component';

describe('DetectiveConanComponent', () => {
  let component: DetectiveConanComponent;
  let fixture: ComponentFixture<DetectiveConanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectiveConanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectiveConanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
