import { TestBed } from '@angular/core/testing';

import { LoginTokenService } from './login-token.service';

describe('LoginToken', () => {
  let service: LoginTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
