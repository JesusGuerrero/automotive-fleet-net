import { CarLoaded } from './car.actions';
import { CarState, Entity, initialState, carReducer } from './car.reducer';

describe('Car Reducer', () => {
  const getCarId = it => it['id'];
  let createCar;

  beforeEach(() => {
    createCar = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Car actions ', () => {
    it('should return set the list of known Car', () => {
      const cars = [createCar('PRODUCT-AAA'), createCar('PRODUCT-zzz')];
      const action = new CarLoaded(cars);
      const result: CarState = carReducer(initialState, action);
      const selId: string = getCarId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = carReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
