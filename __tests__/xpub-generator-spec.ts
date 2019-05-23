import { XPubGenerator } from '../src/xpub-generator';

test('Should greet with message', () => {
  const greeter = new XPubGenerator('friend');
  expect(greeter.greet()).toBe('Bonjour, friend!');
});
