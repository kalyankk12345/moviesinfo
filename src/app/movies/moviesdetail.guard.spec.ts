import { TestBed } from '@angular/core/testing';

import { MoviesdetailGuard } from './moviesdetail.guard';

describe('MoviesdetailGuard', () => {
  let guard: MoviesdetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MoviesdetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
