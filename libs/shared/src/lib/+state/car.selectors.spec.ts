import { Entity, CarState } from './car.reducer';
import { carQuery } from './car.selectors';

describe('Car Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCarId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCar = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      car: {
        list: [
          createCar('PRODUCT-AAA'),
          createCar('PRODUCT-BBB'),
          createCar('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true,
        info: {
          loaded: true
        }
      }
    };
  });

  describe('Car Selectors', () => {
    it('getAllCar() should return the list of Car', () => {
      const results = carQuery.getAllCar(storeState);
      const selId = getCarId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });


    it("getLoaded() should return the current 'loaded' status", () => {
      const result = carQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = carQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
