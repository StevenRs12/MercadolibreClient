import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DetailService } from './detail.service';

describe('DetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DetailService = TestBed.get(DetailService);
    expect(service).toBeTruthy();
  });
});
