import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map} from "rxjs/internal/operators";
import { CarPartialState } from './car.reducer';
import {
  LoadCar,
  CarLoadError,
  CarActionTypes,
  CarInfoLoaded,
  CarHvacChanged
} from './car.actions';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CarEffects {
  @Effect() loadCar$ = this.dataPersistence.fetch(CarActionTypes.CarInfoLoad, {
    run: (action: LoadCar, state: CarPartialState) => {
      return this.http.get('/api_2/go').pipe(
        map( list => new CarInfoLoaded(list))
      );
    },

    onError: (action: LoadCar, error) => {
      console.error('Error', error);
      return new CarLoadError(error);
    }
  });

  @Effect() getHvac$ = this.dataPersistence.fetch(CarActionTypes.CarHvacLoad, {
    run: (action: LoadCar, state: CarPartialState) => {
      return this.http.get('/api/hvac').pipe(
        map( res => new CarHvacChanged(res['temperature'], res['fanSpeed']))
      );
    },

    onError: (action: LoadCar, error) => {
      console.error('Error', error);
      return new CarLoadError(error);
    }
  });

  @Effect() changeHvac$ = this.dataPersistence.fetch(CarActionTypes.CarHvacChange, {
    run: (action: LoadCar, state: CarPartialState) => {
      let updateObj = {};
      if( typeof action['up'] !== 'undefined') {
        updateObj['temp'] = state.car.hvac.temp + 1 * (action['up'] ? 1 : -1);
        if (updateObj['temp'] > 90 ) {
          updateObj['temp'] = 90;
        } else if (updateObj['temp'] < 60 ) {
          updateObj['temp'] = 60;
        }
      }

      if( typeof action['fanSpeed'] !== 'undefined' ) {
        updateObj['fanSpeed'] = action['fanSpeed'];
        if( updateObj['fanSpeed'] > 5 ) {
          updateObj['fanSpeed'] = 5;
        } else if( updateObj['fanSpeed'] < 0 ) {
          updateObj['fanSpeed'] = 0;
        }
      }
      return this.http.post('/api/hvac', updateObj).pipe(
        map( list => new CarHvacChanged(updateObj['temp'] || state.car.hvac.temp,
          updateObj['fanSpeed'] || state.car.hvac.fanSpeed))
      );
    },

    onError: (action: LoadCar, error) => {
      console.error('Error', error);
      return new CarLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CarPartialState>,
    private http: HttpClient
  ) {}
}
