import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRatingComponent } from './child-rating.component';

describe('ChildRatingComponent', () => {
  let component: ChildRatingComponent;
  let fixture: ComponentFixture<ChildRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
