import { TestBed, inject } from '@angular/core/testing';

import { ReplacerService } from './replacer.service';

describe('ReplacerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplacerService]
    });
  });

  it('should ...', inject([ReplacerService], (service: ReplacerService) => {
    expect(service).toBeTruthy();
  }));
});
