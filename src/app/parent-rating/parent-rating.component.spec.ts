import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRatingComponent } from './parent-rating.component';

describe('ParentRatingComponent', () => {
  let component: ParentRatingComponent;
  let fixture: ComponentFixture<ParentRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
