import { isEmpty, sortBy, TCollection } from './collection';

describe('Collection helper methods', () => {
  describe('isEmpty', () => {
    test('returns true in empty array', () => {
      expect(isEmpty([])).toBeTruthy();
    });

    test('returns true in empty object', () => {
      expect(isEmpty({})).toBeTruthy();
    });

    test('returns false in not empty object', () => {
      expect(isEmpty<number>({ a: 1, b: 3 })).toBeFalsy();
    });

    test('returns true in array with empty values', () => {
      expect(isEmpty([undefined, '', null])).toBeTruthy();
    });

    test('returns false in array with not empty values', () => {
      expect(isEmpty([1, undefined, 2, '', 3])).toBeFalsy();
    });
  });

  describe('sortBy', () => {
    const collectionArray: TCollection<{ name: string }> = [
      {
        name: 'b'
      },
      {
        name: 'c'
      },
      {
        name: 'a'
      }
    ];
    const collectionObject: TCollection<{ age: number }> = {
      b: {
        age: 10
      },
      c: {
        age: 15
      },
      a: {
        age: 1
      }
    };
    const collectionComplex: TCollection<{ id: string; detail: { age: number } }> = [
      {
        id: 'b',
        detail: {
          age: 10
        }
      },
      {
        id: 'c',
        detail: {
          age: 15
        }
      },
      {
        id: 'a',
        detail: {
          age: 1
        }
      }
    ];

    test('returns array object sorted descending from array', () => {
      expect(sortBy(collectionArray, 'name', 'desc')).toStrictEqual([
        {
          name: 'c'
        },
        {
          name: 'b'
        },
        {
          name: 'a'
        }
      ]);
    });

    test('returns array object sorted ascending from array', () => {
      expect(sortBy(collectionArray, 'name', 'asc')).toStrictEqual([
        {
          name: 'a'
        },
        {
          name: 'b'
        },
        {
          name: 'c'
        }
      ]);
    });

    test('returns array object sorted descending from object', () => {
      expect(sortBy(collectionObject, 'age', 'desc')).toStrictEqual([
        {
          age: 15
        },
        {
          age: 10
        },
        {
          age: 1
        }
      ]);
    });

    test('returns array object sorted ascending from object', () => {
      expect(sortBy(collectionObject, 'age', 'asc')).toStrictEqual([
        {
          age: 1
        },
        {
          age: 10
        },
        {
          age: 15
        }
      ]);
    });

    test('returns array object sorted ascending from array complex', () => {
      expect(sortBy(collectionComplex, (a) => a.detail.age, 'asc')).toStrictEqual([
        { id: 'a', detail: { age: 1 } },
        { id: 'b', detail: { age: 10 } },
        { id: 'c', detail: { age: 15 } }
      ]);
    });
  });
});
