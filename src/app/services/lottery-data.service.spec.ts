import { TestBed, inject } from '@angular/core/testing';

import { LotteryDataService } from './lottery-data.service';

describe('LotteryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LotteryDataService]
    });
  });

  it('should be created', inject([LotteryDataService], (service: LotteryDataService) => {
    expect(service).toBeTruthy();
  }));
});
