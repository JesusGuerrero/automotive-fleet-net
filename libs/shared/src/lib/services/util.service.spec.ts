import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';
import {RouterTestingModule} from "@angular/router/testing";

describe('UtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule]
  }));

  it('should be created', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service).toBeTruthy();
  });
});
