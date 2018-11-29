import {Injectable, NgZone} from '@angular/core';
import * as io from 'socket.io-client';
import { select, Store } from '@ngrx/store';

import { CarPartialState } from './car.reducer';
import { carQuery } from './car.selectors';
import {CarInfoLoad, CarHvacChange, CarHvacLoad, CarHvacChanged} from './car.actions';

@Injectable()
export class CarFacade {
  loaded$ = this.store.pipe(select(carQuery.getLoaded));
  allCar$ = this.store.pipe(select(carQuery.getAllCar));
  info$ = this.store.pipe(select(carQuery.getCarInfo));
  hvac$ = this.store.pipe(select(carQuery.getCarHvac));

  private io;

  constructor(private store: Store<CarPartialState>, private ngZone: NgZone) {
    this.io = io();
    this.ngZone.runOutsideAngular( () => {
      this.io.on('event:hvac', hvac => {
        this.ngZone.runTask( () => {
          this.store.dispatch( new CarHvacChanged(hvac['temperature'], hvac['fanSpeed']) )
        });
      });
    });
  }

  loadInfo() {
    this.store.dispatch(new CarInfoLoad());
  }
  loadHvac(){
    this.store.dispatch(new CarHvacLoad())
  }
  raiseTemp() {
    this.store.dispatch(new CarHvacChange(true))
  }
  lowerTemp() {
    this.store.dispatch(new CarHvacChange(false))
  }
  changeFanSpeed( val ) {
    this.store.dispatch( new CarHvacChange(undefined, val) )
  }
}
