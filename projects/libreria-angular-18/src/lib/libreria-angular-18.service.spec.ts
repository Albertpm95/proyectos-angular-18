import { TestBed } from '@angular/core/testing';

import { LibreriaAngular18Service } from './libreria-angular-18.service';

describe('LibreriaAngular18Service', () => {
  let service: LibreriaAngular18Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreriaAngular18Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
