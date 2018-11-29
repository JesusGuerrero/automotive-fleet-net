import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { CarEffects } from './car.effects';
import { CarFacade } from './car.facade';

import { carQuery } from './car.selectors';
import { LoadCar, CarLoaded } from './car.actions';
import { CarState, Entity, initialState, carReducer } from './car.reducer';
import {HttpClientTestingModule} from "@angular/common/http/testing";

interface TestSchema {
  car: CarState;
}

describe('CarFacade', () => {
  let facade: CarFacade;
  let store: Store<TestSchema>;
  let createCar;

  beforeEach(() => {
    createCar = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('car', carReducer, { initialState }),
          EffectsModule.forFeature([CarEffects]),
          HttpClientTestingModule
        ],
        providers: [CarFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(CarFacade);
    });

    it('work in progress', () => {

    });
    /**
     * The initially generated facade::loadAll() returns empty array
     */
    // it('loadAll() should return empty list with loaded == true', async done => {
    //   try {
    //     let list = await readFirst(facade.allCar$);
    //     let isLoaded = await readFirst(facade.loaded$);
    //
    //     expect(list.length).toBe(0);
    //     expect(isLoaded).toBe(false);
    //
    //     facade.loadAll();
    //
    //     list = await readFirst(facade.allCar$);
    //     isLoaded = await readFirst(facade.loaded$);
    //
    //     expect(list.length).toBe(0);
    //     expect(isLoaded).toBe(true);
    //
    //     done();
    //   } catch (err) {
    //     done.fail(err);
    //   }
    // });

    /**
     * Use `CarLoaded` to manually submit list for state management
     */
    // it('allCar$ should return the loaded list; and loaded flag == true', async done => {
    //   try {
    //     let list = await readFirst(facade.allCar$);
    //     let isLoaded = await readFirst(facade.loaded$);
    //
    //     expect(list.length).toBe(0);
    //     expect(isLoaded).toBe(false);
    //
    //     store.dispatch(new CarLoaded([createCar('AAA'), createCar('BBB')]));
    //
    //     list = await readFirst(facade.allCar$);
    //     isLoaded = await readFirst(facade.loaded$);
    //
    //     expect(list.length).toBe(2);
    //     expect(isLoaded).toBe(true);
    //
    //     done();
    //   } catch (err) {
    //     done.fail(err);
    //   }
    // });
  });
});
