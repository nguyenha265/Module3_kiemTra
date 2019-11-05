import { TestBed } from '@angular/core/testing';

import { BookSeviceService } from './book-sevice.service';

describe('BookSeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookSeviceService = TestBed.get(BookSeviceService);
    expect(service).toBeTruthy();
  });
});
