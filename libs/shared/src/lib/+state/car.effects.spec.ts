import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CarEffects } from './car.effects';
import { LoadCar, CarLoaded } from './car.actions';

describe('CarEffects', () => {
  let actions: Observable<any>;
  let effects: CarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
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
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCar() });
      expect(effects.loadCar$).toBeObservable(
        hot('-a-|', { a: new CarLoaded([]) })
      );
    });
  });
});
