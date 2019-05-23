import { y2x } from '../src/y2x';

test('Should greet with message', () => {
  const greeter = new y2x('friend');
  expect(greeter.greet()).toBe('Bonjour, friend!');
});
