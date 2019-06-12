import { TestBed } from '@angular/core/testing';

import { RtTemplateService } from './rt-template.service';

describe('RtTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RtTemplateService = TestBed.get(RtTemplateService);
    expect(service).toBeTruthy();
  });
});
