import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestGalleryComponent } from './pinterest-gallery.component';

describe('PinterestGalleryComponent', () => {
  let component: PinterestGalleryComponent;
  let fixture: ComponentFixture<PinterestGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinterestGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinterestGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
