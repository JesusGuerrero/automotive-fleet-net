import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CAR_FEATURE_KEY, CarState } from './car.reducer';

// Lookup the 'Car' feature state managed by NgRx
const getCarState = createFeatureSelector<CarState>(CAR_FEATURE_KEY);

const getLoaded = createSelector(
  getCarState,
  (state: CarState) => {
    return state.loaded && state.info.loaded;
  }
);
const getError = createSelector(
  getCarState,
  (state: CarState) => state.error
);

const getAllCar = createSelector(
  getCarState,
  getLoaded,
  (state: CarState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCarState,
  (state: CarState) => state.selectedId
);
const getCarInfo = createSelector(
  getCarState,
  (state: CarState) => state.info.data
);
const getCarHvac = createSelector(
  getCarState,
  (state: CarState) => state.hvac
);

export const carQuery = {
  getLoaded,
  getError,
  getAllCar,
  getCarInfo,
  getCarHvac
};
