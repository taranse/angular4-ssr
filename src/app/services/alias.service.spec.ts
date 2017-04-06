import { TestBed, inject } from '@angular/core/testing';

import { AliasService } from './alias.service';

describe('AliasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AliasService]
    });
  });

  it('should ...', inject([AliasService], (service: AliasService) => {
    expect(service).toBeTruthy();
  }));
});
