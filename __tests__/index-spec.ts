import * as index from '../src/index';

test('Should have Greeter available', () => {
  expect(index.Greeter).toBeTruthy();
});

test('Should have XPubGenerator available', () => {
  expect(index.XPubGenerator).toBeTruthy();
});

test('Should have y2x available', () => {
  expect(index.y2x).toBeTruthy();
});
