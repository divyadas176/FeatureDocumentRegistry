import { TestBed } from '@angular/core/testing';

import { ViewDocumentsService } from './view-documents.service';

describe('ViewDocumentsService', () => {
  let service: ViewDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
