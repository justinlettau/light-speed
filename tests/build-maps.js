import { createArray, describe } from '../src/index.js';

const report = {
  name: 'Build maps',
  variants: [
    { name: '1,000 items', size: 1_000 },
    { name: '10,00 items', size: 10_000 },
    { name: '100,000 items', size: 100_000 },
    // note: reduce test takes too long to go much higher
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

  test('Reduce object', () => {
    data.reduce(
      (prev, curr) => ({
        ...prev,
        [curr]: curr,
      }),
      {}
    );
  });
});
