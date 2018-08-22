import { TestBed, inject } from '@angular/core/testing';

import { AskMeService } from './ask-me.service';

describe('AskMeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AskMeService]
    });
  });

  it('should be created', inject([AskMeService], (service: AskMeService) => {
    expect(service).toBeTruthy();
  }));
});
