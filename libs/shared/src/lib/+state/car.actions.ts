import { Action } from '@ngrx/store';
import { Entity } from './car.reducer';

export enum CarActionTypes {
  LoadCar = '[Car] Load Car',
  CarLoaded = '[Car] Car Loaded',
  CarLoadError = '[Car] Car Load Error',
  CarInfoLoad = '[Car] Load Car Info',
  CarInfoLoaded = '[Car] Car Info Loaded',
  CarHvacLoad = '[Car] Load Car Hvac',
  CarHvacChange = '[Car] Car Change Hvac',
  CarHvacChanged = '[Car] Car Hvac Changed'
}

export class LoadCar implements Action {
  readonly type = CarActionTypes.LoadCar;
}

export class CarLoadError implements Action {
  readonly type = CarActionTypes.CarLoadError;
  constructor(public payload: any) {}
}
export class CarInfoLoad implements Action {
  readonly type = CarActionTypes.CarInfoLoad;
}
export class CarInfoLoaded implements Action {
  readonly type = CarActionTypes.CarInfoLoaded;
  constructor( public payload: any) {}
}
export class CarLoaded implements Action {
  readonly type = CarActionTypes.CarLoaded;
  constructor(public payload: Entity[]) {}
}
export class CarHvacLoad implements Action {
  readonly type = CarActionTypes.CarHvacLoad;
}
export class CarHvacChange implements Action {
  readonly type = CarActionTypes.CarHvacChange;
  constructor( public up?: any, public fanSpeed?: any) {}
}
export class CarHvacChanged implements Action {
  readonly type = CarActionTypes.CarHvacChanged;
  constructor( public temp: any, public fanSpeed?: any) {}
}
export type CarAction = LoadCar | CarLoaded | CarLoadError | CarInfoLoad | CarInfoLoaded | CarHvacLoad | CarHvacChange | CarHvacChanged;

export const fromCarActions = {
  LoadCar,
  CarLoaded,
  CarLoadError,
  CarInfoLoad,
  CarInfoLoaded,
  CarHvacLoad,
  CarHvacChange,
  CarHvacChanged
};
