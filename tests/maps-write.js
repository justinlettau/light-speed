import { createArray, describe, SKIP } from '../src/index.js';

const report = {
  name: 'Maps write',
  variants: [
    { name: '1,000 items', size: 1_000 },
    { name: '10,00 items', size: 10_000 },
    { name: '100,000 items', size: 100_000 },
    { name: '1,000,000 items', size: 1_000_000 },
  ],
};

describe(report, (test, { size }) => {
  const data = createArray(size);

  test('Object in for loop', () => {
    const subject = {};

    for (const item of data) {
      subject[item] = item;
    }
  });

  test('Map in for loop', () => {
    const subject = new Map();

    for (const item of data) {
      subject.set(item, item);
    }
  });

  test('Reduce', () => {
    data.reduce((prev, curr) => {
      prev[curr] = curr;
      return prev;
    }, {});
  });

  test('Reduce with destructing', () => {
    if (data.length > 100_000) {
      // reduce with destructing takes too long for large arrays
      return SKIP;
    }

    data.reduce(
      (prev, curr) => ({
        ...prev,
        [curr]: curr,
      }),
      {}
    );
  });
});
