import { createArray, describe } from '../src/index.js';

const report = {
  name: 'Loops',
  variants: [
    { name: '1,000 items', size: 1_000 },
    { name: '100,000 items', size: 100_000 },
    { name: '1,000,000 items', size: 1_000_000 },
  ],
};

describe(report, (test, { size }) => {
  const data = createArray(size);

  test('for', () => {
    const total = data.length;
    for (let i = 0; i < total; i++) {
      // empty
    }
  });

  test('for...in', () => {
    // eslint-disable-next-line no-unused-vars
    for (const item in data) {
      // empty
    }
  });

  test('for...of', () => {
    // eslint-disable-next-line no-unused-vars
    for (const item of data) {
      // empty
    }
  });

  test('forEach', () => {
    data.forEach(() => {
      // empty
    });
  });

  test('while', () => {
    let i = 0;
    const total = data.length;
    while (i++ < total) {
      // empty
    }
  });
});
