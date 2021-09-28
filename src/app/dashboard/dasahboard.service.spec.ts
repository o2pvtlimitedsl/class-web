import { TestBed } from '@angular/core/testing';

import { DasahboardService } from './dasahboard.service';

describe('DasahboardService', () => {
  let service: DasahboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DasahboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
