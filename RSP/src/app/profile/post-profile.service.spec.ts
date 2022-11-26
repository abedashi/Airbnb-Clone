import { TestBed } from '@angular/core/testing';

import { PostProfileService } from './post-profile.service';

describe('PostProfileService', () => {
  let service: PostProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
