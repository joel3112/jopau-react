import { Collection, getPropValue, isEmpty, mapValuesBy } from './collection';

describe('Collection helper methods', () => {
  const example: Collection = {
    a: { a1: 'uno', a2: 'dos' },
    b: [1, 2, 3, [4, 5]],
    c: { c1: { c11: 'tres', c12: 'cuatro' } }
  };

  describe('isEmpty', () => {
    test('returns true in empty collection', () => {
      expect(isEmpty({})).toBeTruthy();
    });
    test('returns false in not empty collection', () => {
      expect(isEmpty(example)).toBeFalsy();
    });
  });

  describe('getPropValue', () => {
    [
      { path: '', result: undefined },
      { path: 'a.a1', result: 'uno' },
      { path: 'b.[3].[0]', result: 4 },
      { path: 'c.c1.c12', result: 'cuatro' }
    ].forEach(({ path, result }) => {
      test(`returns "${result}" value in collection with path "${path}"`, () => {
        expect(getPropValue(example, path)).toBe(result);
      });
    });
  });

  describe('mapValues', () => {
    const example: Collection = {
      a: { name: 'a', value: 1 },
      b: { name: 'b', value: 2 }
    };

    test('returns map values in collection with iteratee', () => {
      [
        { iteratee: (x: { name: string }) => x.name, result: { a: 'a', b: 'b' } },
        {
          iteratee: (x: { value: number }) => x.value * 2,
          result: {
            a: 2,
            b: 4
          }
        }
      ].forEach(({ iteratee, result }) => {
        expect(mapValuesBy(example, iteratee as (value: unknown) => unknown)).toEqual(result);
      });
    });
  });
});
