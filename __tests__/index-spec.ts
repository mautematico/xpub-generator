import * as index from '../src/index';

test('Should have XPubGenerator available', () => {
  expect(index.XPubGenerator).toBeTruthy();
});

test('Should have y2x available', () => {
  expect(index.y2x).toBeTruthy();
});
