import { TestBed } from '@angular/core/testing';

import { PinterestGalleryService } from './pinterest-gallery.service';

describe('PinterestGalleryService', () => {
  let service: PinterestGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinterestGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
