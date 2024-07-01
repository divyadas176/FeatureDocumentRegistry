import { TestBed } from '@angular/core/testing';

import { EditFeatureDocService } from './edit-feature-doc.service';

describe('EditFeatureDocService', () => {
  let service: EditFeatureDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditFeatureDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
