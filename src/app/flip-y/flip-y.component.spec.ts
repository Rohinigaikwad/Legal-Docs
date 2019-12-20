import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipYComponent } from './flip-y.component';

describe('FlipYComponent', () => {
  let component: FlipYComponent;
  let fixture: ComponentFixture<FlipYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
