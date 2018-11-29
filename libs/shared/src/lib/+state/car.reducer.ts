import { CarAction, CarActionTypes } from './car.actions';

export const CAR_FEATURE_KEY = 'car';

/**
 * Interface for the 'Car' data used in
 *  - CarState, and
 *  - carReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CarState {
  list: Entity[]; // list of Car; analogous to a sql normalized table
  selectedId?: string | number; // which Car record has been selected
  loaded: boolean; // has the Car list been loaded
  error?: any; // last none error (if any)
  info: any;
  hvac: any;
}

export interface CarPartialState {
  readonly [CAR_FEATURE_KEY]: CarState;
}

export const initialState: CarState = {
  list: [],
  loaded: true,
  info: {
    loaded: false,
    data: []
  },
  hvac: {
    temp: 78,
    ac: true,
    fanSpeed: 4
  }
};

export function carReducer(
  state: CarState = initialState,
  action: CarAction
): CarState {
  switch (action.type) {
    case CarActionTypes.CarHvacChanged: {
      state = {
        ...state,
        hvac: {
          temp: action.temp,
          fanSpeed: action.fanSpeed
        }
      };
      break;
    }

    case CarActionTypes.CarInfoLoad: {
      state = {
        ...state,
        info: {
          loaded: false,
          data: []
        }
      };
      break;
    }
    case CarActionTypes.CarInfoLoaded: {
      let load = {
        info: {
          loaded: true,
          data: action.payload
        }
      }
      state = {
        ...state,
        ...load
      }
    }
    case CarActionTypes.CarLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
