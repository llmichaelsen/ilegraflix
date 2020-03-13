import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { dbConfig } from '../../data/dbIndexed';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, NgxIndexedDBModule.forRoot(dbConfig)]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
