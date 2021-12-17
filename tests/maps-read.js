import { createArray, describe } from '../src/index.js';

const report = {
  name: 'Maps read',
  variants: [
    { name: '1,000 items', size: 1_000 },
    { name: '100,000 items', size: 100_000 },
    { name: '1,000,000 items', size: 1_000_000 },
  ],
};

describe(report, (test, { size }) => {
  const data = createArray(size).map(() => Math.floor(Math.random() * 10) + 1);
  const object = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j',
  };
  const map = new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
    [4, 'd'],
    [5, 'e'],
    [6, 'f'],
    [7, 'g'],
    [8, 'h'],
    [9, 'i'],
    [10, 'j'],
  ]);

  test('Object', () => {
    for (const item of data) {
      // eslint-disable-next-line no-unused-vars
      const value = object[item] || 'x';
    }
  });

  test('Map', () => {
    for (const item of data) {
      // eslint-disable-next-line no-unused-vars
      const value = map.get(item) || 'x';
    }
  });

  test('Switch', () => {
    let value;

    for (const item of data) {
      switch (item) {
        case 1:
          value = 'a';
          break;
        case 2:
          value = 'b';
          break;
        case 3:
          value = 'c';
          break;
        case 4:
          value = 'd';
          break;
        case 5:
          value = 'e';
          break;
        case 6:
          value = 'f';
          break;
        case 7:
          value = 'g';
          break;
        case 8:
          value = 'h';
          break;
        case 9:
          value = 'i';
          break;
        case 10:
          value = 'j';
          break;
        default:
          // eslint-disable-next-line no-unused-vars
          value = 'x';
          break;
      }
    }
  });
});
