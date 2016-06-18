import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PotsdamService } from './potsdam.service';

describe('Potsdam Service', () => {
  beforeEachProviders(() => [PotsdamService]);

  it('should ...',
      inject([PotsdamService], (service: PotsdamService) => {
    expect(service).toBeTruthy();
  }));
});
