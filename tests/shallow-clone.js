import { createArray, describe } from '../src/index.js';

const report = {
  name: 'Shallow clone',
  variants: [
    { name: '1,000 items', size: 1_000 },
    { name: '100,000 items', size: 100_000 },
    { name: '1,000,000 items', size: 1_000_000 },
  ],
};

describe(report, (test, { size }) => {
  const data = createArray(size).map(() => ({
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    f: '6',
    g: '7',
    h: '8',
    i: '9',
    j: '10',
  }));

  test('Object.assign', () => {
    for (const item of data) {
      Object.assign({}, item);
    }
  });

  test('Destructing', () => {
    for (const item of data) {
      // eslint-disable-next-line no-unused-vars
      const copy = { ...item };
    }
  });

  test('Manual', () => {
    for (const item of data) {
      // eslint-disable-next-line no-unused-vars
      const copy = {
        a: item.a,
        b: item.b,
        c: item.c,
        d: item.d,
        e: item.e,
        f: item.f,
        g: item.g,
        h: item.h,
        i: item.i,
        j: item.j,
      };
    }
  });
});
