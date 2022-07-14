import { TestBed } from '@angular/core/testing';

import { PokeGuardService } from './poke-guard.service';

describe('PokeGuardService', () => {
  let service: PokeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
