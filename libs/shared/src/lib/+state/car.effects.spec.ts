import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CarEffects } from './car.effects';
import {CarInfoLoad, CarInfoLoaded} from './car.actions';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CarEffects', () => {
  let actions: Observable<any>;
  let effects: CarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers: [
        CarEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CarEffects);
  });

  describe('loadCar$', () => {
    it('work in progress', () => {

    });
    // it('should work', () => {
    //   actions = hot('-a-|', { a: new CarInfoLoad() });
    //   expect(effects.loadCar$).toBeObservable(
    //     hot('-a-|', { a: new CarInfoLoaded([]) })
    //   );
    // });
  });
});
